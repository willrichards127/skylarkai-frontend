/* eslint-disable @typescript-eslint/no-explicit-any */
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import * as cheerio from "cheerio";

const isInvalidTable = (table: {
  columns: string[];
  rows: Record<string, string>[];
}) => {
  return table.rows.every((row) => !Object.values(row)[0]);
};

export const exportToExcel = (
  table: {
    columns: string[];
    rows: Record<string, string>[];
  },
  fileName: string
) => {
  // Convert data and columns to Excel format
  const ws = XLSX.utils.json_to_sheet(table.rows, { header: table.columns });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

  // Save the Excel file
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  saveAs(blob, `${fileName}.xlsx`);
};

export const addDownloadButtons = (document: Document) => {
  const htmlContent = document.body.innerHTML;
  const $ = cheerio.load(htmlContent);
  const tables: {
    columns: string[];
    rows: Record<string, string>[];
  }[] = [];
  const tableEls = document.body.querySelectorAll("table");
  $("table").each((tableIndex, tableElement) => {
    const table: {
      columns: string[];
      rows: Record<string, string>[];
    } = {
      columns: [],
      rows: [],
    };

    // Extract column names (header)
    $(tableElement)
      .find("thead th")
      .each((_, colElement: any) => {
        table.columns.push($(colElement).text().trim());
      });

    // Extract rows
    $(tableElement)
      .find("tbody tr")
      .each((_, rowElement) => {
        const rowData: Record<string, string> = {};

        // Extract data from each cell
        $(rowElement)
          .find("td")
          .each((colIndex, cellElement) => {
            const columnName =
              table.columns[colIndex] || `column_${colIndex + 1}`;
            const rowContent = $(cellElement).text().trim();
            if (rowContent) rowData[columnName] = $(cellElement).text().trim();
          });

        // Add the row data to the table
        table.rows.push(rowData);
      });

    // check if table is valid and then add download button    
    if (!isInvalidTable(table)) {
      if (tableEls[tableIndex] && tableEls[tableIndex].parentNode) {
        const button = document.createElement("button");
        button.innerText = "Download";
        button.addEventListener("click", () => {
          exportToExcel(table, `table_${tableIndex + 1}`);
        });
        tableEls[tableIndex]!.parentNode!.appendChild(button);
      }

      // Add the table to the list of tables
      tables.push(table);
    }
  });
};
