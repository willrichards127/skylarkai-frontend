/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadStoreValue } from "./storage";
export const downloadPdf = async ({
  graph_id,
  ...options
}: {
  graph_id: number;
  analysis_type: string;
  filename: string;
  ticker?: string;
}) => {
  try {
    const token = loadStoreValue("token");
    const tenancy = loadStoreValue("tenancy");
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/pdf");
    myHeaders.append("X-TENANT-ID", tenancy);

    const raw = JSON.stringify(options);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}downloadfile/${graph_id}`,
      requestOptions as any
    );

    const result = await response.arrayBuffer();
    return result;
  } catch (e) {
    return null;
  }
};

export const downloadCSV = (csvStr: string) => {
  const blob = new Blob([csvStr], { type: "text/csv;charset=utf-8" });

  const anchor = document.createElement("a");
  anchor.href = window.URL.createObjectURL(blob);
  anchor.download = "data.csv";
  anchor.click();

  window.URL.revokeObjectURL(anchor.href);
};
