import React, { memo, useRef, useCallback, useEffect, useState } from "react";
import { Box, IconButton, CircularProgress, colors } from "@mui/material";
import { useReactFlow } from "reactflow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { XPanel } from "../../../../../../components/XPanel";
import { Header } from "./Header";
import { XChip } from "../../../../../../components/XChip";
import { OpenAINode } from "../nodes/llms/OpenAINode";
import { InputNode } from "../nodes/inputs/InputNode";
import { OutputNode } from "../nodes/outputs/OutputNode";
import { DocUploadNode } from "../nodes/dataloaders/DocUploadNode";
import { WebcrawlerNode } from "../nodes/dataloaders/WebcrawlerNode";
import { PineconeNode } from "../../custom-nodes/nodes/vectors/PineconeNode";
import { ChromaNode } from "../../custom-nodes/nodes/vectors/ChromaNode";
import { AnthropicNode } from "../nodes/llms/AnthropicNode";
import { DocTemplateNode } from "../nodes/resources/DocTemplateNode";
import { CompareDocumentsNode } from "../nodes/resources/CompareDocumentsNode";
import { GoogleSearchNode } from "../nodes/dataloaders/GoogleSearchNode";
import { YahooFinanceNode } from "../nodes/dataloaders/YahooFinanceNode";
import { PitchbookNode } from "../nodes/dataloaders/PitchbookNode";
import { SkyNode } from "../nodes/dataloaders/SkyNode";
import { CustomAPINode } from "../nodes/dataloaders/CustomAPINode";
import { NotionNode } from "../nodes/dataloaders/NotionNode";
import { MongoDBNode } from "../nodes/dataloaders/MongoDBNode";
import { ITemplateNode,INode, IEdge } from "../../../../../../shared/models/interfaces";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {
  convert2DBNode,
  convert2DBEdge,
  convert2Node,
  convert2Edge,
} from "../../../utils";

import { useExecuteNodeMutation } from "../../../../../../redux/services/setupApi";
import { EdgarNode } from "../nodes/dataloaders/EdgarNode";
import { SalesforceNode } from "../nodes/dataloaders/SalesforceNode";
import { SlackNode } from "../nodes/dataloaders/SlackNode";
import { HubspotNode } from "../nodes/dataloaders/HubspotNode";
import { PostgresNode } from "../nodes/dataloaders/PostgresNode";
import { ElasticSearchNode } from "../nodes/dataloaders/ElasticSearchNode";
import { YoutubuNode } from "../nodes/dataloaders/YoutubuNode";
import { GoogleDriveNode } from "../nodes/dataloaders/GoogleDriveNode";
import { DataSearchNode } from "../nodes/dataloaders/DataSearchNode";
// key is corresponding to items.name
const ComponentDict: Record<
  string,
  React.MemoExoticComponent<
    ({
      nodeId,
    }: {
      nodeId: string;
      nodeContent: ITemplateNode;
    }) => React.JSX.Element
  >
> = {
  Input: InputNode,
  Output: OutputNode,
  Webcrawler: WebcrawlerNode,
  "GPT-3.5": OpenAINode,
  Anthropic: AnthropicNode,
  File: DocUploadNode,
  GoogleSearch: GoogleSearchNode,
  Template: DocTemplateNode,
  Comparison: CompareDocumentsNode,
  Pinecone: PineconeNode,
  Chroma: ChromaNode,
  YahooFinance: YahooFinanceNode,
  PitchBook: PitchbookNode,
  CustomAPI: CustomAPINode,
  Sky: SkyNode,
  Edgar: EdgarNode,
  Notion: NotionNode,
  MongoDB: MongoDBNode,
  Salesforce: SalesforceNode,
  Slack: SlackNode,
  Hubspot: HubspotNode,
  Postgres: PostgresNode,
  ElasticSearch: ElasticSearchNode,
  Youtube: YoutubuNode,
  GoogleDrive: GoogleDriveNode,
  DataSearch: DataSearchNode
};

const FloatPanel = memo(
  ({
    nodeId,
    nodeContent,
    onItem,
    onClose,
  }: {
    nodeId: string;
    nodeContent: ITemplateNode;
    onItem: (itemId: string) => void;
    onClose: () => void;
  }) => {
    const printRef = useRef();
    const { getNodes, getEdges, setNodes, setEdges } = useReactFlow();
    const [executeNode, { isLoading, data }] = useExecuteNodeMutation();

    const startTimeRef = useRef<number>(0);
    const [fetchTime, setFetchTime] = useState("0.0");
    const XForm = ComponentDict[nodeContent.name];

    const onExecuteNode = useCallback(() => {
      startTimeRef.current = performance.now();

      const nodes = getNodes();
      const edges = getEdges();

      const dbNodes = nodes.map((node) => convert2DBNode(node as INode));
      const dbEdges = edges.map((edge) => convert2DBEdge(edge as IEdge));

      executeNode({
        id: nodeContent.setupId!,
        name: nodeContent.setupName,
        edges: dbEdges,
        nodes: dbNodes,
      });
    }, [executeNode, getNodes, getEdges, nodeContent]);

    const onDownload = useCallback(() => {
      const contentToPrint = printRef.current;
      if (contentToPrint) {
        const htmlContent = `<html><head><title>Print</title>
					<style>
						.visualize-button {
							display: none;
						}
						tpan, text {
							fill: black;
						}
					</style>
					</head>
					<body>${(contentToPrint as HTMLDivElement).innerHTML}</body></html>`;
        fetch(`${process.env.apiUrl}generate_pdf`, {
          method: "POST",
          body: new URLSearchParams({ html_content: htmlContent }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
          .then((response) => {
            return response.blob();
          })
          .then((blob) => {
            // Create a download link for the PDF
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "output.pdf";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }, []);

    useEffect(() => {
      if (isLoading || !data) return;

      const endTime = performance.now();
      const fetchDurationInSeconds = (
        (endTime - startTimeRef.current) /
        1000
      ).toFixed(1);

      setFetchTime(fetchDurationInSeconds);
    }, [isLoading, data]);

    useEffect(() => {
      if (isLoading || !data) return;

      const loadedNodes = (data as any).nodes.map((node: any) =>
        convert2Node(node, nodeContent.categoryDict!, data.id, data.name)
      );
      const loadedEdges = (data as any).edges.map((edge: any) =>
        convert2Edge(edge, (data as any).nodes)
      );

      setNodes(loadedNodes);
      setEdges(loadedEdges as any);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, data]);

    
    return (
      <XPanel
        header={
          <Header
            nodeId={nodeId}
            nodeContent={nodeContent}
            onClose={onClose}
            onItem={onItem}
          />
        }
        footer={
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: 1,
              alignItems: "center",
              mt: 0.5,
            }}
          >
            {["Output"].includes(nodeContent.name) && (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box mr="auto" />
                <IconButton
                  size="small"
                  onClick={onDownload}
                  disabled={isLoading || !data}
                >
                  <DownloadIcon sx={{ fontSize: 14 }} />
                </IconButton>
                {!isLoading ? (
                  <IconButton size="small" onClick={onExecuteNode}>
                    <PlayArrowIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                ) : (
                  <CircularProgress size={14} />
                )}
                <XChip
                  label={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <AccessTimeIcon sx={{ fontSize: 14 }} /> {fetchTime}s
                    </Box>
                  }
                />
              </Box>
            )}
          </Box>
        }
        sxProps={{ minWidth: 320 }}
      >
        {!!XForm && <XForm nodeId={nodeId} nodeContent={nodeContent} />}
        {["Output"].includes(nodeContent.name) && !!data?.result && (
          <>
            <Box fontSize={12} mb={0.5}>
              Result:
            </Box>
            <Box
              ref={printRef}
              className="nowheel"
              sx={{
                p: 1,
                border: `1px solid ${colors.grey[500]}`,
                borderRadius: 1,
                maxHeight: 240,
                minHeight: 100,
                maxWidth: 400,
                overflowY: "auto",
              }}
            >
              <ReactMarkdown
                rehypePlugins={[rehypeRaw as any]}
                components={{
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  li: ({ node, ...props }) => (
                    <li style={{ marginLeft: 16 }} {...props} />
                  ),
                }}
              >
                {data.result || ""}
              </ReactMarkdown>
            </Box>
          </>
        )}
      </XPanel>
    );
  }
);

FloatPanel.displayName = "FloatPanel";
export default FloatPanel;
