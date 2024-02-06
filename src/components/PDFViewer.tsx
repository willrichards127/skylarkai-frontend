import { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { generateMatches } from "../shared/utils/basic";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/search/lib/styles/index.css";

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
  const { toolbarPluginInstance } = defaultLayoutPluginInstance;
  const { searchPluginInstance } = toolbarPluginInstance;
  const { highlight } = searchPluginInstance;

  useEffect(() => {
    setDocumentLoaded(false);
  }, [keyword]);

  useEffect(() => {
    if (isDocumentLoaded && keyword) {
      highlight(generateMatches(keyword));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDocumentLoaded]);

  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
      <Viewer
        fileUrl={pdfUrl}
        plugins={[defaultLayoutPluginInstance]}
        onDocumentLoad={handleDocumentLoad}
      />
    </Worker>
  );
};
