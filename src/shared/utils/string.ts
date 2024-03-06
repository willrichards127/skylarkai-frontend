/* eslint-disable no-prototype-builtins */

import { ITransaction } from "../../redux/interfaces";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const parseAnswer = (inputString: string) => {
  // Step 1: Check all sections that start with "{" and end with "}" (potential JSON objects)
  const jsonMatches = inputString.match(/{[^{}]+}/g) || [];

  // Step 2: Replace sections based on the criteria
  let stringWithReplacedSections = inputString;
  for (const jsonSection of jsonMatches) {
    try {
      const jsonObj = JSON.parse(jsonSection);

      if (jsonObj && typeof jsonObj === "object") {
        if (jsonObj.hasOwnProperty("citation")) {
          // If JSON object includes "citation"
          const firstCitationValue: any = Object.values(jsonObj.citation)[0];
          const replacement = `[link](#${encodeURIComponent(
            firstCitationValue
          )})`;
          stringWithReplacedSections = stringWithReplacedSections.replace(
            `{"citation": ${jsonSection}}`,
            replacement
          );
        } else {
          // If JSON object does not include "citation"
          const firstObjValue: any = Object.values(jsonObj)[0];
          const replacement = `[link](#${encodeURIComponent(firstObjValue)})`;
          stringWithReplacedSections = stringWithReplacedSections.replace(
            jsonSection,
            replacement
          );
        }
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  return stringWithReplacedSections;
};

const cleanUp = (inputString: string, limitWordCount = 5) => {
  // replace all `("` and `")` with `"`
  let result = inputString.replace(/\("\s?/g, '"');
  result = result.replace(/"\)/g, '"');
  // replace all `(` and `)` with `"`;
  result = result.replace(/[()]/g, '"');
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
    quote =
      splited.length > limitWordCount
        ? splited.slice(0, limitWordCount).join("___")
        : quote;
    return `[link](#${filename}______${quote})`;
  } catch (e) {
    return "";
  }
};

// parse citation phase only
export const parseCitation = (documentContent: string, limitWordCount = 5) => {
  // step 1. remove all ```
  let content: string = documentContent.replace(/```/g, "");

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

const cleanUp2 = (inputString: string, limitWordCount = 5) => {
  // replace all `("` and `")` with `"`
  let result = inputString.replace(/\("\s?/g, '"');
  result = result.replace(/"\)/g, '"');
  // replace all `(` and `)` with `"`;
  result = result.replace(/[()]/g, '"');
  let filename: string = "",
    quote: string = "";
  try {
    const parsed = JSON.parse(result);
    if (parsed.citation) {
      filename = parsed.citation["Company File Name"];
      quote = parsed.citation["Direct Quote"];
    } else if (parsed["Company File Name"]) {
      filename = parsed["Company File Name"];
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
    quote =
      splited.length > limitWordCount
        ? splited.slice(0, limitWordCount).join("___")
        : quote;
    return `[link](#${filename}______${quote})`;
  } catch (e) {
    return "";
  }
};

const cleanUp3 = (inputString: string, limitWordCount = 5) => {
  // replace all `("` and `")` with `"`
  let result = inputString.replace(/\("\s?/g, '"');
  result = result.replace(/"\)/g, '"');
  // replace all `(` and `)` with `"`;
  result = result.replace(/[()]/g, '"');
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
    // reduce the count of words of quote
    const splited = quote.split(" ");
    quote =
      splited.length > limitWordCount
        ? splited.slice(0, limitWordCount).join(" ")
        : quote;
    return { filename, quote };
  } catch (e) {
    return undefined;
  }
};

export const parseCitationInReport = (
  documentContent: string,
  limitWordCount = 5
) => {
  // step 1. remove all ```
  let content: string = documentContent.replace(/```/g, "");

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
        const section = cleanUp2(
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

export const parseCitationInReport2 = (
  documentContent: string,
  limitWordCount = 5
) => {
  // step 1. remove all ```
  let content: string = documentContent.replace(/```/g, "");

  let startIndex = -1;
  let braceCount = 0;
  const sections = [];

  for (let i = 0; i < content.length; i++) {
    if (content[i] === "{") {
      if (braceCount === 0) {
        startIndex = i;
      }
      braceCount++;
    } else if (content[i] === "}") {
      braceCount--;
      if (braceCount === 0 && startIndex !== -1) {
        const section = cleanUp3(
          content.substring(startIndex, i + 1),
          limitWordCount
        );
        if (!section) {
          content =
            content.slice(0, startIndex) +
            content.substring(startIndex, i + 1) +
            content.slice(i + 1);
        } else {
          content = content.slice(0, startIndex) + content.slice(i + 1);
          sections.push(section);
        }
        i = startIndex; // Reset index to re-scan the string
        startIndex = -1;
      }
    }
  }
  if (sections.length > 0) {
    return { content, sections };
  }

  return { content };
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
  return filename.split('.').slice(0, -1).join('.');

}