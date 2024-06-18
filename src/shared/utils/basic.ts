import moment from "moment";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getUniques = (arr: string[]) => {
  if (!arr.length) return [];
  return [...new Set(arr)];
};

export const genYears = (startYear?: number) => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = currentYear; year >= (startYear || 2000); year--) {
    years.push(year.toString());
  }

  return years;
};

export const genInstanceName = (
  instanceType: "report" | "chat",
  ticker?: string
) => {
  const date = new Date().toISOString().split("T")[0];
  return `${ticker ? ticker + " " : ""}${instanceType} ${date}`;
};

export const uniqueArr = (
  objects: any,
  uniqueBy: string[],
  keepFirst = true
) => {
  return Array.from(
    objects
      .reduce((map: any, e: any) => {
        const key: string = uniqueBy
          .map((key) => [e[key], typeof e[key]])
          .flat()
          .join("-");
        if (keepFirst && map.has(key)) return map;
        return map.set(key, e);
      }, new Map())
      .values()
  );
};

export const scrollToAndHighlightInIFrame = (
  iframeDoc: Document,
  searchText: string
) => {
  // Get all span nodes in the iframe
  const pNodes = iframeDoc!.body.getElementsByTagName("p");
  const spanNodes = iframeDoc!.body.getElementsByTagName("span");
  const tdNodes = iframeDoc!.body.getElementsByTagName("td");

  // Iterate through each text node and highlight the search text
  for (const node of [...pNodes, ...spanNodes, ...tdNodes]) {
    // replace all line-breaks to white space
    const text = (node.textContent || node.innerText).replace(/\n/g, " ");
    const searchTextIndex = text
      .toLowerCase()
      .indexOf(searchText.toLowerCase());

    if (searchTextIndex !== -1) {
      // Create a span element to wrap the search text and apply a background color
      const span = document.createElement("span");
      span.style.backgroundColor = "yellow";

      // Split the text node into three parts: before, matching, and after the search text
      const beforeText = text.substring(0, searchTextIndex);
      const matchText = text.substring(
        searchTextIndex,
        searchTextIndex + searchText.length
      );
      const afterText = text.substring(searchTextIndex + searchText.length);

      // Create new text nodes for each part
      const beforeNode = document.createTextNode(beforeText);
      const matchNode = document.createTextNode(matchText);
      const afterNode = document.createTextNode(afterText);

      // Append the nodes to the span element
      span.appendChild(matchNode);

      // Replace the original text node with the span and the new text nodes
      node.parentNode!.replaceChild(span, node);
      span.parentNode!.insertBefore(beforeNode, span);
      span.parentNode!.insertBefore(afterNode, span.nextSibling);
      // Scroll to the highlighted text
      span.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    }
  }
};

export const generateMatches = (input: string): string[] => {
  const strings = [input];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      const stringWithoutSpace = input.slice(0, i) + input.slice(i + 1);
      strings.push(stringWithoutSpace);
    }
  }

  return strings;
};

export const getDomainFromUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname;
  } catch (error) {
    console.error("Invalid URL:", url);
    return "";
  }
};

export const currencyFormat = (q: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(q);
};

export const myRandomInts = (quantity: number, max: number) => {
  const arr = [];
  while (arr.length < quantity) {
    const candidateInt = Math.floor(Math.random() * max);
    if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
  }
  return arr;
};

export const longDateFormat = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return formatter.format(date);
};

export const getHumanableDuration = (_duration: moment.Duration) => {
  const hours = _duration.hours();
  const minutes = _duration.minutes();
  const seconds = _duration.seconds();

  let duration = "";
  if (hours) duration += `${hours}h`;
  if (minutes) duration += `${duration ? " " : ""}${minutes}m`;
  if (seconds) duration += `${duration ? " " : ""}${seconds}s`;

  return duration;
}