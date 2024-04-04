import { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { OnHighlightKeyword, searchPlugin } from "@react-pdf-viewer/search";
// import { generateMatches } from "../shared/utils/basic";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/highlight/lib/styles/index.css";

export const PdfViewer = ({
  pdfUrl,
  keyword,
}: {
  pdfUrl: string;
  keyword?: string;
}) => {
  const [isDocumentLoaded, setDocumentLoaded] = useState<boolean>(false);
  const handleDocumentLoad = () => setDocumentLoaded(true);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const searchPluginInstance = searchPlugin();
  const { highlight} = searchPluginInstance;

  useEffect(() => {
    if (isDocumentLoaded && keyword) {
      
      const search = keyword.split(" ").slice(0, 3).join(" ");
      console.log("-------------", keyword, search);
      highlight([search]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDocumentLoaded, keyword]);

  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
      <Viewer
        fileUrl={pdfUrl}
        plugins={[defaultLayoutPluginInstance, searchPluginInstance]}
        onDocumentLoad={handleDocumentLoad}
      />
    </Worker>
  );
};
