/* eslint-disable no-prototype-builtins */
import * as marked from "marked";
import { ITransaction } from "../../redux/interfaces";

export const isCSVFormat = (csvStr: string) => {
  // remove all " symbols
  const replaced = csvStr;
  // Split the string into lines
  const lines = replaced.split("\n").filter((line) => !!line.trim());

  // Check if each line has the same number of commas
  const numColumns = lines[0].split('",').length;
  for (let i = 1; i < lines.length; i++) {
    const columns = lines[i].split('",');
    if (columns.length !== numColumns) {
      return false;
    }
  }

  // If all lines have the same number of columns, it's likely CSV
  return true;
};

export const csvToMDTable = (csv: string) => {
  // Split the CSV into rows
  const rows = csv.trim().split("\n");

  // Extract headers
  const headers = rows[0].split(",");

  // Generate Markdown table header
  let markdown = "|" + headers.join(" | ") + " |\n";
  markdown += "|" + Array(headers.length).fill("---").join(" | ") + " |\n";

  // Generate Markdown table rows
  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(",");
    markdown += "|" + values.join(" | ") + " |\n";
  }

  return markdown;
};

export const csvToHtmlTable = (csv: string) => {
  // remove all "
  const replaced = csv;
  // reformat csv string
  // const lines = replaced.split("\n").filter((line) => !!line.trim());
  // const newFormat = lines
  //   .map((line) =>
  //     line
  //       .split(", ")
  //       .map((item) => item.replaceAll(",", ""))
  //       .join(",")
  //   )
  //   .join("\n");

  // Split CSV into rows
  const rows = replaced.trim().split("\n");

  // Extract headers
  const headers = rows[0].split('",');

  // Generate table headers
  let html = `<table><thead><tr>`;
  headers.forEach((header) => {
    html += `<th>${header.replaceAll('"', "")}</th>`;
  });
  html += "</tr></thead><tbody>";

  // Generate table rows
  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split('",');
    html += "<tr>";
    values.forEach((value) => {
      html += `<td>${value.replaceAll('"', "")}</td>`;
    });
    html += "</tr>";
  }

  // Close table
  html += "</tbody></table>";

  return html;
};

export const htmlTable2CSV = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const rows = Array.from(doc.querySelectorAll("table tr"));
  const csvData = rows
    .map((row) => {
      const cells = Array.from(row.querySelectorAll("th, td"));
      return cells
        .map((cell) => (cell.textContent || "").trim().replaceAll(",", ""))
        .join(",");
    })
    .join("\n");

  return csvData;
};

const addTableAttr = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const rows = Array.from(doc.querySelectorAll("table tr"));
  const csvData = rows
    .map((row) => {
      const cells = Array.from(row.querySelectorAll("th, td"));
      return cells
        .map((cell) => (cell.textContent || "").trim().replaceAll(",", ""))
        .join(",");
    })
    .join("\n");

  return html.replace("<table>", `<table data-csv="${csvData}">`);
};

const addTableAttrs = (html: string) => {
  const regex = /<table[\s\S]*?<\/table>/g;

  return html.replace(regex, (s: string) => {
    return addTableAttr(s);
  });
};

const cleanUp = (inputString: string, limitWordCount?: number) => {
  // replace all `("` and `")` with `"`
  // let result = inputString.replace(/\("\s?/g, '"');
  const result = inputString.replace(/"\)/g, '"');
  // replace all `(` and `)` with `'`;
  // result = result.replace(/[()]/g, "'");
  let filename: string = "",
    quote: string = "";
  try {
    const parsed = JSON.parse(result);

    if (parsed.citation) {
      filename = parsed.citation["Document Title"];
      quote = parsed.citation["Direct Quote"];
    } else if (parsed["Document Title"]) {
      filename = parsed["Document Title"];
      quote = parsed["Direct Quote"];
    } else {
      filename = Object.keys(parsed)[0];
      quote = Object.values<string>(parsed)[0];
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
    return `[Link](#${filename}______${quote})`;
  } catch (e) {
    console.log("parsing citation error.");
    return "";
  }
};

const replaceContentBetweenTripleBackticks = (str: string) => {
  const regex = /```([\s\S]*?)```/g;
  return str.replace(regex, (s: string) => {
    // if pl starts with csv
    const replaced = s.replaceAll("```plaintext", "").replaceAll("```markdown", "").replaceAll("```", "").replaceAll("csv", "").replaceAll("json", "");
    // p1 contains the text between triple backticks
    if (isCSVFormat(replaced)) {
      return csvToHtmlTable(replaced);
    }
    return replaced;
  });
};

export const replaceContentBetweenCodeBlock = (str: string) => {
  const regex = /<p><code>([\s\S]*?)<\/code><\/p>/g;

  return str.replace(regex, (s: string) => {
    const replaced = s
      .replaceAll("csv", "")
      .replaceAll("json", "")
      .replaceAll("<p><code>", "")
      .replaceAll("</code></p>", "");
    
    if (isCSVFormat(replaced)) {
      return csvToHtmlTable(replaced);
    }
    return replaced;
  });
};

// parse citation phase and convert csv format to table
export const parseCitation = (
  documentContent: string,
  limitWordCount?: number
) => {
  // convert ``` content to html table
  let content: string = replaceContentBetweenTripleBackticks(documentContent);
  content = replaceContentBetweenCodeBlock(content);
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
  // convert markdown to html format
  const html = marked.parse(content, { gfm: true }) as string;
  return addTableAttrs(html);
};

export const scrollToAndHighlightText = (
  container: HTMLDivElement,
  searchText: string
) => {
  let reducedSearchText = searchText;
  const text = container.textContent || container.innerText;
  const timesLimit = 7;
  const reduceStep = 2;
  let index = -1,
    times = 0;
  while (index === -1) {
    index = text.indexOf(reducedSearchText);
    console.log(index, "pending index===");
    if (index !== -1) {
      const range = document.createRange();
      range.setStart(container.firstChild!, index);
      range.setEnd(container.firstChild!, index + searchText.length);

      const span = document.createElement("span");
      span.style.backgroundColor = "yellow"; // You can customize the highlight color
      range.surroundContents(span);
      span.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (times === timesLimit) return;
    reducedSearchText = reducedSearchText.slice(0, -reduceStep);
    console.log(reducedSearchText, "reducedSearchText");
    times++;
  }
};

export const removeCitations = (inputString: string) => {
  const content: string = inputString.replace(/```/g, "");
  // Regular expression to match JSON-parsable sections with specific format
  const jsonObjectRegex = /{"[^}]+}/g;

  // Remove JSON-parsable sections
  const stringWithoutJson = content.replace(jsonObjectRegex, "");

  // Remove empty parentheses ()
  const stringWithoutEmptyParentheses = stringWithoutJson.replace(/\(\)/g, "");

  // Remove "citation"
  let finalStr = stringWithoutEmptyParentheses.replace(
    /#### Citation Format:\n- /g,
    ""
  );
  finalStr = stringWithoutEmptyParentheses.replace(/- \*\*Citation\*\*: /g, "");
  finalStr = finalStr.replace(/Citations:/g, "");
  finalStr = finalStr.replace(/### Citation Format:/g, "");
  finalStr = finalStr.replace(/- (})/g, "");
  finalStr = finalStr.replace(/- (?!\S)/g, "");
  return finalStr;
};

const getTransactionType = (dump: string) => {
  const transTypeDict: Record<string, string> = {
    P: "Purchases",
    S: "Sales",
    E: "Option Exercises",
    G: "Option Grants",
    A: "Stock Awards",
    V: "Stock Splits",
    C: "Stock Buybacks",
    M: "Mixed Transactions",
  };
  // Regular expression to extract the value of transaction_type
  const regex = /transaction_code='([A-Za-z0-9]+)'/;

  // Use the exec method to find the match
  const match = regex.exec(dump);
  let transactionType = "";
  // Check if a match is found
  if (match && match[1]) {
    transactionType = match[1];
  }
  return transTypeDict[transactionType] || "Unknown";
};

const getTransactionNumericValues = (dump: string, regex: RegExp) => {
  const match = regex.exec(dump);
  return match ? match[1] : "";
};

export const parseTransaction = (transaction: ITransaction) => {
  const updatedTransaction = {
    ...transaction,
    transaction_type: getTransactionType(transaction.transaction_dump),
    shares: getTransactionNumericValues(
      transaction.transaction_dump,
      /shares=(\d+)/
    ),
    prices: getTransactionNumericValues(
      transaction.transaction_dump,
      /price='([\d.]+)'/
    ),
    remaing: getTransactionNumericValues(
      transaction.transaction_dump,
      /remaining=(\d+)/
    ),
  };

  return updatedTransaction;
};

export const removeExtension = (filename: string) => {
  return filename.split(".").slice(0, -1).join(".");
};
