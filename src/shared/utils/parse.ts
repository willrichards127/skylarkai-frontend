/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";
import * as htmlparser2 from "htmlparser2";

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

const getColumnType = (columnLabel: string, rows: Record<string, string>[]) => {
  if (columnLabel === "Year") return { type: "category" };
  let units: string[] = [];
  const columnValues: string[] = rows.reduce((pv: string[], cv) => {
    if ((cv[columnLabel] || "").includes("%")) {
      units.push("%");
    } else if ((cv[columnLabel] || "").includes("$")) {
      units.push("$");
    } else if ((cv[columnLabel] || "").toLowerCase().includes("billion")) {
      units.push("Billion");
    } else if ((cv[columnLabel] || "").toLowerCase().includes("million")) {
      units.push("Million");
    }
    if (["N/A", "NA"].includes(cv[columnLabel] || "")) {
      pv.push("");
    } else {
      const cleanedString = (cv[columnLabel] || "").replace(/[$%,]/g, "");
      pv.push(cleanedString);
    }
    return pv;
  }, []);
  units = units.filter((unit) => !!unit);
  if (columnValues.some((value) => !isNaN(parseFloat(value)))) {
    return {
      unit: units.length > 0 ? units[0] : "",
      type: "numeric",
    };
  }
  return { type: "category" };
};

const convertObjTable = (data: any) => {
  if (!data[0].props.children[0].props.children)
    return {
      headers: [],
      rows: [],
    };
  const columns = data[0].props.children[0].props.children.map((column: any) =>
    column.props.children && column.props.children.length
      ? column.props.children[0]
      : ""
  );

  const rows = (data && data.length >= 1 ? data[1].props.children : []).map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (row: any) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      row.props.children.map((cell: any) =>
        cell.props.children && cell.props.children.length
          ? cell.props.children[0]
          : ""
      )
  );

  const objRows: Record<string, any>[] = [];

  for (let i = 0; i < rows.length; i++) {
    const row: Record<string, string> = {};

    for (let j = 0; j < columns.length; j++) {
      row[columns[j]] = rows[i][j];
    }
    objRows.push(row);
  }

  return {
    headers: columns,
    rows: objRows,
  };
};

export const parseTable = (data: any) => {
  const json = convertObjTable(data);

  const columns = json.headers.map((header: string) => ({
    label: header,
    ...getColumnType(header, json.rows),
  }));
  return {
    columns,
    rows: json.rows.map((row: any) => {
      const newRow: Record<string, string> = {};
      for (const key in row) {
        const column = columns.find((col: any) => col.label === key);
        if (
          row[key] &&
          !["N/A", "NA"].includes(row[key]) &&
          column!.type === "numeric"
        ) {
          newRow[key] = row[key].replace(/\$|%|billion|million/g, "");
        } else if (
          column!.type === "numeric" &&
          ["N/A", "NA"].includes(row[key])
        ) {
          newRow[key] = "0";
        } else {
          newRow[key] = row[key];
        }
      }
      return newRow;
    }),
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

export const getDate = (date: Date = new Date()) => {
  return date.toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const extractTableColumnsAndRows = (tableHTML: string) => {
  const columns: string[] = [];
  const rows: string[][] = [];

  // Use regular expressions to extract columns and rows
  const trRegex = /<tr>(.*?)<\/tr>/gs;
  const tdThRegex = /<(th|td)>(.*?)<\/\1>/gs;

  let trMatch;
  while ((trMatch = trRegex.exec(tableHTML)) !== null) {
    const rowContent = trMatch[1];
    const row = [];
    let tdThMatch;

    // Extract columns
    while ((tdThMatch = tdThRegex.exec(rowContent)) !== null) {
      const cellContent = tdThMatch[2];
      row.push(cellContent);
    }

    if (row.length > 0) {
      if (columns.length === 0) {
        columns.push(...row);
      } else {
        rows.push(row);
      }
    }
  }

  // convert obj table
  const objRows: Record<string, any>[] = [];

  for (let i = 0; i < rows.length; i++) {
    const row: Record<string, string> = {};

    for (let j = 0; j < columns.length; j++) {
      row[columns[j]] = rows[i][j];
    }
    objRows.push(row);
  }

  // add column type
  const typedColumns = columns.map((column: string) => ({
    label: column,
    ...getColumnType(column, objRows),
  }));

  // correction for row values
  const correctedObjRows = objRows.map((row: any) => {
    const newRow: Record<string, string> = {};
    for (const key in row) {
      const column = typedColumns.find((col: any) => col.label === key);
      if (
        row[key] &&
        !["N/A", "NA"].includes(row[key]) &&
        column!.type === "numeric"
      ) {
        newRow[key] = row[key].replace(/\$|%|billion|million/g, "");
      } else if (
        column!.type === "numeric" &&
        ["N/A", "NA"].includes(row[key])
      ) {
        newRow[key] = "0";
      } else {
        newRow[key] = row[key];
      }
    }
    return newRow;
  });

  return {
    columns: typedColumns,
    rows: correctedObjRows,
  };
};

export const extractTagsAndContent = (htmlString: string) => {
  const results: Record<string, any> = {};
  const tagRegex = /<(h[1-6]|p|div|table)>(.*?)<\/\1>|<table>(.*?)<\/table>/gs;

  // remove html or body tags
  const html = htmlString.replace(/<\/?body>|<\/?html>/gi, "");

  let match;
  while ((match = tagRegex.exec(html)) !== null) {
    const tagname = match[1];
    const content = match[2];
    if (tagname) {
      const id = `${tagname}_${uuidv4()}`;
      if (tagname === "table") {
        results[id] = {
          id,
          tagname,
          content: extractTableColumnsAndRows(content),
        };
      } else {
        results[id] = {
          id,
          tagname,
          content,
        };
      }
    }
  }

  return results;
};

export const getNewId = (prefix = "md") => `${prefix}_${uuidv4()}`;

export const categoryParser = (htmlString: string) => {
  const sections: { key: string; value: any }[] = [];
  let currentSection = "";
  let isTable = false;

  const parser = new htmlparser2.Parser(
    {
      onopentag(name) {
        if (name === "table" || name === "ul" || name === "ol") {
          isTable = true;
        }
        if (isTable) {
          currentSection += `<${name}>`;
        } else {
          currentSection = `<${name}>`;
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