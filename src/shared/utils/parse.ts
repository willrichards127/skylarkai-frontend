/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";
import * as htmlparser2 from "htmlparser2";
import { TColumn, TRow } from "../models/types";
import * as cheerios from "cheerio";
import { parse } from "node-html-parser";
import * as marked from "marked";
import { IDNDContainer } from "../models/interfaces";

export const parseSWOT = (content: string) => {
  const strengthsRegex = /Strengths:([\s\S]*?)(Weaknesses:|$)/;
  const weaknessesRegex = /Weaknesses:([\s\S]*?)(Opportunities:|$)/;
  const opportunitiesRegex = /Opportunities:([\s\S]*?)(Threats:|$)/;
  const threatsRegex = /Threats:([\s\S]*?)(?:\n\n|$)/;

  // Function to extract and parse the ordered list as an array
  function extractAndParseList(input: string, regex: RegExp) {
    const match = input.match(regex);
    if (match) {
      const listText = match[1].trim();
      const listItems = listText
        .split(/\d+\.\s+/)
        .filter((item) => item.trim() !== "");
      return listItems.map((item) => item.trim());
    }
    return [];
  }

  // Extract the sections and their children
  const strengths = extractAndParseList(content, strengthsRegex);
  const weaknesses = extractAndParseList(content, weaknessesRegex);
  const opportunities = extractAndParseList(content, opportunitiesRegex);
  const threats = extractAndParseList(content, threatsRegex);
  return [strengths, weaknesses, opportunities, threats];
};

const getUnitFromColumn = (columnLabel: string) => {
  const regex = /\((.*?)\)/;
  const match = regex.exec(columnLabel);

  if (match) {
    const unit = match[1];
    return unit;
  } else {
    return "";
  }
};
/*
const convertObjTable = (data: any) => {
  try {
    if (!data[0].props.children.props.children)
      return {
        headers: [],
        rows: [],
      };

    const columns = data[0].props.children.props.children.map((column: any) =>
      column.props.children && column.props.children.length
        ? (column.props.children || "").trim()
        : ""
    );

    const rows = (data && data.length >= 1 ? data[1].props.children : []).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (row: any) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        row.props.children.map((cell: any) =>
          cell.props.children && cell.props.children.length
            ? (cell.props.children || "").trim()
            : ""
        )
    );

    const objRows: Record<string, any>[] = [];

    for (let i = 0; i < rows.length; i++) {
      const row: Record<string, string> = {};

      for (let j = 0; j < columns.length; j++) {
        if (["N/A", "NA", "NaN", ""].includes(rows[i][j].trim()))
          row[columns[j]] = "-";
        else row[columns[j]] = rows[i][j].trim();
      }
      objRows.push(row);
    }

    return {
      headers: columns,
      rows: objRows,
    };
  } catch (err) {
    return {
      headers: [],
      rows: [],
    };
  }
};
*/
export const parseTable = (data: string) => {
  const $ = cheerios.load(data);

  const rows: TRow[] = [];
  const columns: TColumn[] = [];
  const table = $("table").first();
  $(table)
    .find("th")
    .each((_, col) => {
      const headerLabel = $(col).text() || "";
      const unit = getUnitFromColumn(headerLabel);
      const column = {
        label: headerLabel,
        unit,
        type: unit ? "numeric" : "category",
      } as TColumn;
      if ($(col).hasClass("table-cell-hide")) {
        column["isUnChecked"] = true;
      }
      columns.push(column);
    });

  $(table)
    .find("tr")
    .each((_, row) => {
      const rowData: TRow = {};
      $(row)
        .find("td")
        .each((j, td) => {
          if (columns[j].type === "numeric") {
            rowData[columns[j].label] = $(td)
              .text()
              .replace(/\$|%|billion|million/g, "");
          } else {
            rowData[columns[j].label] = $(td).text();
          }
        });

      if (Object.keys(rowData).length) {
        if ($(row).hasClass("table-row-hide")) {
          rowData["isUnChecked"] = true;
        }
        rows.push(rowData);
      }
    });

  return {
    rows,
    columns,
  };
  // const json = HTMLTableParser.parse(data);

  // if (json.results) {
  //   const headers = Object.keys(json.results[0][0]);
  //   const columns = headers.map((header: string) => {
  //     const unit = getUnitFromColumn(header);
  //     return { label: header, unit, type: unit ? "numeric" : "category" } as TColumn;
  //   });
  //   return {
  //     columns,
  //     rows: json.results[0].map((row: any) => {
  //       const newRow: Record<string, string> = {};
  //       for (const key in row) {
  //         const column = columns.find((col: any) => col.label === key);
  //         if (column!.type === "numeric") {
  //           newRow[key] = row[key].replace(/\$|%|billion|million/g, "");
  //         } else {
  //           newRow[key] = row[key];
  //         }
  //       }
  //       return newRow;
  //     }),
  //   };
  // }
};

export const parse2Apex = (
  table: {
    columns: (
      | {
          type: string;
          unit?: undefined;
          label: string;
        }
      | {
          unit: string;
          type: string;
          label: string;
        }
    )[];
    rows: Record<string, string>[];
  },
  xLabel: string,
  seriesLabels: string[],
  hasSameUnit?: boolean
) => {
  const { columns, rows } = table;
  if (hasSameUnit) {
    const series = seriesLabels.map((label) => ({
      name: label,
      data: rows.map((row) => row[label]).flat(),
    }));
    return [
      {
        categories: rows.map((row) => row[xLabel]).flat(),
        series,
        xAxisLabel: xLabel,
        yAxisLabel:
          columns.find((col) => col.label === seriesLabels[0])?.unit || "",
      },
    ];
  } else {
    return seriesLabels.map((label) => {
      return {
        categories: rows.map((row) => row[xLabel]).flat(),
        series: [
          {
            name: label,
            data: rows.map((row) => row[label]).flat(),
          },
        ],
        xAxisLabel: xLabel,
        yAxisLabel: columns.find((col) => col.label === label)?.unit || "",
      };
    });
  }
};

export const getDate = (date: Date = new Date()) => {
  return date.toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const getNewId = (prefix = "md") => `${prefix}_${uuidv4()}`;

export const categoryParser = (htmlString: string) => {
  const sections: IReportItem[] = [];
  let currentSection = "";
  let isTable = false;

  const parser = new htmlparser2.Parser(
    {
      onopentag(name, attr) {
        if (name === "table" || name === "ul" || name === "ol") {
          isTable = true;
        }
        if (isTable) {
          currentSection += `<${name}${
            attr.class ? ` class=${attr.class}` : ""
          }>`;
        } else {
          if (name === "a") {
            currentSection = attr.href
              ? `<${name} href="${attr.href}">`
              : `<${name}>`;
          } else {
            currentSection = `<${name}>`;
          }
        }
      },
      ontext(text) {
        currentSection += text.trim();
      },
      onclosetag(name) {
        currentSection += `</${name}>`;
        if (name === "table" || name === "ul" || name === "ol") {
          isTable = false;
        }
        if (!isTable) {
          sections.push({
            key: getNewId(),
            value: { content: currentSection, tag: name },
          });

          currentSection = "";
        }
      },
    },
    { decodeEntities: true }
  );

  parser.write(htmlString);
  parser.end();
  return sections.filter((section) => section.value.tag !== "br");
};

const parseExpression = (json: any, limitWordCount?: number) => {
  let filename: string = "",
    quote: string = "";
  if (json.citation) {
    filename = json.citation["Document Title"];
    quote = json.citation["Direct Quote"];
  } else if (json["Document Title"]) {
    filename = json["Document Title"];
    quote = json["Direct Quote"];
  } else {
    if (Object.keys(json).length === 2) {
      filename = Object.values<string>(json)[0];
      quote = Object.values<string>(json)[1];
    } else {
      filename = Object.keys(json)[0];
      quote = Object.values<string>(json)[0];
    }
  }
  // replace whitespaces with "___"
  filename = filename.replace(/\s/g, "___");
  quote = quote.replace(/\s/g, "___");
  // reduce the count of words of quote
  const splited = quote.split("___");
  quote = limitWordCount
    ? splited.length > limitWordCount
      ? splited.slice(0, limitWordCount).join("___")
      : quote
    : quote;
  return { filename, quote };
};

const cleanUp = (inputString: string, limitWordCount?: number) => {
  let parsed;
  // remove all &quot;
  const nextInputString = inputString.replace(/&quot;/g, '"');
  try {
    parsed = JSON.parse(nextInputString);
    const { filename, quote } = parseExpression(parsed, limitWordCount);
    return `<a href="#${filename}______${quote}">Link</a>`;
  } catch (e) {
    let result = nextInputString.replace(/\("\s?/g, '"');
    result = result.replace(/"\)/g, '"');
    // replace all `(` and `)` with `"`;
    result = result.replace(/[()]/g, '"');
    try {
      parsed = JSON.parse(result);
      const { filename, quote } = parseExpression(parsed, limitWordCount);
      return `<a href="#${filename}______${quote}">Link</a>`;
    } catch (e) {
      return "";
    }
  }
};

// parse citation phase only
const parseCitation = (content: string, limitWordCount?: number) => {
  let startIndex = -1;
  let braceCount = 0;

  for (let i = 0; i < content.length; i++) {
    if (content[i] === "{") {
      if (braceCount === 0) {
        startIndex = i;
      }
      braceCount++;
    } else if (content[i] === "}") {
      braceCount--;
      if (braceCount === 0 && startIndex !== -1) {
        const section = cleanUp(
          content.substring(startIndex, i + 1),
          limitWordCount
        );
        content = content.slice(0, startIndex) + section + content.slice(i + 1);
        i = startIndex; // Reset index to re-scan the string
        startIndex = -1;
      }
    }
  }

  return content;
};

export const categoryParser2 = (htmlString: string) => {
  const sections: IDNDContainer[] = [];
  const root: any = parse(htmlString);
  root.childNodes
    .filter((el: HTMLElement) => el.nodeType !== 3) // get rid of line-breaks
    .forEach((el: any) => {
      if (el.rawTagName !== "br") {
        if (el.rawTagName === "p") {
          const innerParsed = marked.parse(el.innerHTML) as string;
          if (innerParsed.includes("<table>")) {
            const id = getNewId();
            sections.push({
              id,
              type: "CONTAINER",
              children: [
                {
                  id: getNewId(),
                  parentId: id,
                  type: "ITEM",
                  value: { content: innerParsed, tag: "table" },
                },
              ],
            });
          } else {
            const id = getNewId();
            sections.push({
              id,
              type: "CONTAINER",
              children: [
                {
                  id: getNewId(),
                  parentId: id,
                  type: "ITEM",
                  value: {
                    content: parseCitation(el.outerHTML),
                    tag: el.rawTagName,
                  },
                },
              ],
            });
          }
        } else {
          const id = getNewId();
          sections.push({
            id,
            type: "CONTAINER",
            children: [
              {
                id: getNewId(),
                parentId: id,
                type: "ITEM",
                value: {
                  content: parseCitation(el.outerHTML),
                  tag: el.rawTagName,
                },
              },
            ],
          });
        }
      }
    });

  return sections;
};
const extractRows = (inputString: string) => {
  const trRegex = /<tr[^>]*>((?:.|\n)*?)<\/tr>/gi;
  const matches = inputString.match(trRegex);

  if (!matches) {
    return []; // Return null if no <tr> tags are found
  }

  const rowContents = matches.map((match) => {
    const contentMatch = match.match(/<tr[^>]*>((?:.|\n)*?)<\/tr>/i);
    return contentMatch ? contentMatch[1] : null;
  });

  return rowContents;
};

export const correctTableFormat = (inputString: string) => {
  const rows = extractRows(inputString);
  const header = rows[0]!
    .replaceAll("<td>", "<th>")
    .replaceAll("</td>", "</th>");
  return `<table><thead><tr>${header}</tr></thead><tbody>${rows
    .slice(1)
    .map((row) => "<tr>" + row + "</tr>")
    .join("")}</tbody></table>`;
};

export const convertCSVToTable = (data: string[][]) => {
  const header = data[0].map((item) => `<th>${item}</th>`).join("");
  const rows = data
    .slice(1)
    .map(
      (items) => `<tr>${items.map((item) => `<td>${item}</td>`).join("")}</tr>`
    )
    .join("");
  return `<table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>`;
};

export const parseObj = (inputString: string) => {
  const arr = [];
  try {
    const jsonMatches = inputString.match(/{[^{}]+}/g) || [];
    for (const jsonSection of jsonMatches) {
      const jsonObj = JSON.parse(jsonSection);
      arr.push(jsonObj);
    }
    return arr;
  } catch (e) {
    console.log(e);
    return [];
  }
};
