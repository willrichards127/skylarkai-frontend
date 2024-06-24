/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";
import { TColumn, TRow } from "../models/types";
import * as cheerios from "cheerio";
import { parse } from "node-html-parser";
import * as marked from "marked";
import { IDNDContainer, IDNDItem } from "../models/interfaces";
import { removeTemplateCode, replaceContentBetweenCodeBlock, replaceContentBetweenTripleBackticks } from "./string";

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

      columns.push(column);
    });

  $(table)
    .find("tr")
    .each((_, row) => {
      const rowData: TRow = {};
      $(row)
        .find("td")
        .each((j, td) => {
          if (columns[j]?.type === "numeric") {
            rowData[columns[j].label] = $(td)
              .text()
              .replace(/\$|%|billion|million/g, "");
          } else {
            rowData[columns[j]?.label] = $(td).text();
          }
        });

      if (Object.keys(rowData).length) {
        rows.push(rowData);
      }
    });

  return {
    rows,
    columns,
  };
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

export const getNewId = (prefix = "md") => `${prefix}_${uuidv4()}`;

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
const parseCitation = (html: string, limitWordCount?: number) => {
  let startIndex = -1;
  let braceCount = 0;

  let content = replaceContentBetweenCodeBlock(replaceContentBetweenTripleBackticks(html));
  
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

// content parser for saved report (html format)
export const categoryParser3 = (htmlString: string) => {
  const sections: IDNDContainer[] = [];
  const root: any = parse(removeTemplateCode(htmlString));
  root.childNodes.forEach((el: any) => {
    // check if el is correct container
    if ((el.rawAttrs || "").includes("dnd-container")) {
      const containerId = getNewId();

      // get child nodes
      const children: IDNDItem[] = [];
      el.childNodes.forEach((child: any) => {
        if (child.firstChild) {
          if (child.rawAttrs?.includes("viz-item")) {
            children.push({
              id: getNewId(),
              parentId: containerId,
              type: "ITEM",
              value: {
                content: child.innerHTML,
                tag: child.firstChild.rawTagName, // table
                vizType: child.attributes["data-viz-type"],
                axis: child.attributes["data-viz-option"],
              },
            });
          } else {
            let value;
            if (
              child.firstChild.rawTagName === "p" &&
              marked
                .parse(child.firstChild.innerHTML)
                .toString()
                .includes("<table>")
            ) {
              value = {
                content: marked.parse(child.firstChild.innerHTML) as string,
                tag: "table",
              };
            } else if (
              child.firstChild.rawTagName === "p" &&
              child.firstChild?.firstChild?.rawTagName === "code"
            ) {
              console.log('1111111111')
              value = {
                tag: "table",
                content: parseCitation(child.innerHTML),
              };
            } else if (
              child.firstChild.rawTagName === "p" &&
              child.firstChild?.firstChild?.rawTagName === "strong" &&
              child.firstChild?.childNodes?.length > 1 &&
              child.firstChild.childNodes[2] && child.firstChild.childNodes[2].rawTagName === "code"
            ) {
              console.log('2222222222')
              value = {
                tag: "table",
                content: parseCitation(
                  child.innerHTML
                    .replace(/<strong>[\s\S]*?<\/strong>/g, "")
                    .replace("\n", "")
                ),
              };
            } else {
              console.log('3333333333', child.firstChild.rawTagName)
              value = {
                tag: child.firstChild.rawTagName,
                content: parseCitation(child.innerHTML),
              };
            }
            children.push({
              id: getNewId(),
              parentId: containerId,
              type: "ITEM",
              value,
            });
          }
        }
      });
      sections.push({
        id: containerId,
        type: "CONTAINER",
        children,
      });
    }
  });
  return sections;
};

export const getSectionName = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return doc.querySelector("h2")?.innerText;
};

// get containers for the given section
// assuming that section has h2 tag
export const sectionIndexes = (
  containers: IDNDContainer[],
  containerId: string
) => {
  const startIndex = containers.findIndex((con) => con.id === containerId);
  const endIndex = containers.findIndex(
    (con, index) => index > startIndex && con.children[0].value.tag === "h2"
  );
  return {
    startIndex,
    endIndex: endIndex === -1 ? containers.length - 1 : endIndex - 1,
  };
};

// content parser for generating report
export const categoryParser2 = (htmlString: string) => {
  const sections: IDNDContainer[] = [];
  const root: any = parse(htmlString);
  root.childNodes
    .filter((el: any) => el.nodeType !== Node.TEXT_NODE) // Filter out text nodes
    .forEach((el: any) => {
      const id = getNewId();
      const children: IDNDItem[] = [
        {
          id: getNewId(),
          parentId: id,
          type: "ITEM",
          value:
            el.rawTagName === "p" &&
            marked.parse(el.innerHTML).toString().includes("<table>")
              ? {
                  content: marked.parse(el.innerHTML) as string,
                  tag: "table",
                }
              : el.rawTagName === "p" &&
                marked.parse(el.innerHTML).toString().includes("<img")
              ? {
                  tag: "img",
                  content: marked.parse(el.innerHTML) as string,
                }
              : {
                  content: parseCitation(el.outerHTML),
                  tag: el.rawTagName as string,
                },
        },
      ];

      sections.push({
        id,
        type: "CONTAINER",
        children,
      });
    });

  return sections;
};

export const initializeHtmlResponse = (htmlString: string) => {
  // in this htmlString, there is only one container for each item
  if (htmlString.startsWith('<div class="dnd-container')) {
    return htmlString;
  } else {
    let categorizedHtml = "";
    const root: any = parse(removeTemplateCode(htmlString));
    root.childNodes
      .filter((el: any) => el.nodeType !== Node.TEXT_NODE) // Filter out text nodes
      .forEach((el: any) => {
        categorizedHtml += '<div class="dnd-container">';
        // replace <pre>, <code> tags and parse inner content again
        const htmlContent = el.outerHTML;
        if (htmlContent.trim()) {
          categorizedHtml += `<div class="dnd-item">${marked
            .parse(htmlContent)
            .toString()}</div>`;
          categorizedHtml += "</div>";
        }
      });
    return categorizedHtml;
  }
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

export const parseCellData = (data: string) => {
  // Remove any non-numeric characters except for '.' and 'e' (for scientific notation)
  const cleanedData = data.replace(/[$,]/g, "");

  // Parse the cleaned data into a numeric value
  let numericValue = parseFloat(cleanedData);

  // Check if the original data contains 'million' or 'billion' and adjust the numeric value accordingly
  if (data.toLowerCase().includes("m")) {
    numericValue *= 1000000;
  } else if (data.toLowerCase().includes("b")) {
    numericValue *= 1000000000;
  }

  return numericValue;
};
