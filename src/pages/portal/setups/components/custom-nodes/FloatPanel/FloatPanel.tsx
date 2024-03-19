import React, { memo, useRef, useCallback, useState } from "react";
import { Box, IconButton, CircularProgress, colors } from "@mui/material";
import { toast } from "react-toastify";
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
import { ITemplateNode } from "../../../../../../shared/models/interfaces";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DownloadIcon from "@mui/icons-material/Download";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useCustomQueryMutation } from "../../../../../../redux/services/transcriptAPI";
import { EdgarNode } from "../nodes/dataloaders/EdgarNode";
import { SalesforceNode } from "../nodes/dataloaders/SalesforceNode";
import { SlackNode } from "../nodes/dataloaders/SlackNode";
import { HubspotNode } from "../nodes/dataloaders/HubspotNode";
import { PostgresNode } from "../nodes/dataloaders/PostgresNode";
import { ElasticSearchNode } from "../nodes/dataloaders/ElasticSearchNode";
import { YoutubuNode } from "../nodes/dataloaders/YoutubuNode";
import { GoogleDriveNode } from "../nodes/dataloaders/GoogleDriveNode";
import { DataSearchNode } from "../nodes/dataloaders/DataSearchNode";
import { SkylarkDBNode } from "../nodes/vectors/SkylarkDBNode";
import {
  parseCitation,
  removeExtension,
} from "../../../../../../shared/utils/string";
import { ExportModal } from "../../../../../../components/modals/ExportModal";
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
  "GPT-4": OpenAINode,
  Anthropic: AnthropicNode,
  File: DocUploadNode,
  GoogleSearch: GoogleSearchNode,
  Template: DocTemplateNode,
  Comparison: CompareDocumentsNode,
  Pinecone: PineconeNode,
  SkyDatabase: SkylarkDBNode,
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
  DataSearch: DataSearchNode,
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
    const { getNodes, setNodes } = useReactFlow();
    const [customQuery, { isLoading }] = useCustomQueryMutation();
    const [exportModal, showExportModal] = useState<boolean>(false);

    const [fetchTime, setFetchTime] = useState("0.0");
    const XForm = ComponentDict[nodeContent.name];

    const onExecuteNode = useCallback(async () => {
      const startTime = performance.now();
      const nodes = getNodes();

      const inputNode = nodes.find((node) => node.data.name === "Input");
      const skyDBNode = nodes.find((node) => node.data.name === "SkyDatabase");
      const llmNode = nodes.find(
        (node) => node.data.name === "Anthropic" || node.data.name === "GPT-4"
      );
      if (!inputNode || !skyDBNode || !llmNode) {
        toast.error("Invalid graph format!");
        return;
      }
      if (!inputNode.data.properties.text) {
        toast.warn("Type any questions in the input node.");
        return;
      }
      if (!skyDBNode.data.properties.files?.length) {
        toast.warn("There is no ingested file. Please run the graph first.");
        return;
      }
      const answerResponse = await customQuery({
        graph_id: nodeContent.setupId!,
        filenames: skyDBNode.data.properties.files.map(
          ({ file_name }: { file_name: string }) => removeExtension(file_name)
        ),
        question: inputNode.data.properties.text,
        analysis_type: "financial_diligence",
        llm: llmNode.data.name === "Anthropic" ? "Anthropic" : "OpenAI",
      }).unwrap();

      const endTime = performance.now();
      const fetchDurationInSeconds = ((endTime - startTime) / 1000).toFixed(1);
      setNodes((prev) =>
        prev.map((node) =>
          node.data.graph_node_id === nodeContent.graph_node_id
            ? {
                ...node,
                data: {
                  ...node.data,
                  properties: { text: answerResponse.content },
                },
              }
            : node
        )
      );
      setFetchTime(fetchDurationInSeconds);
    }, [customQuery, getNodes, setNodes, nodeContent]);

    const onExport = useCallback(() => {
      showExportModal(true);
    }, []);

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
                  onClick={onExport}
                  disabled={isLoading || !nodeContent.properties.text}
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
        {["Output"].includes(nodeContent.name) &&
          nodeContent.properties.text && (
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
                  allowElement={(element, _, parent) => {
                    if (
                      element.tagName === "p" &&
                      (parent as any).tagName === "li"
                    ) {
                      return false;
                    }
                    if (
                      element.tagName === "strong" &&
                      (parent as any).tagName === "li"
                    ) {
                      return false;
                    }
                    return true;
                  }}
                  unwrapDisallowed={true}
                  components={{
                    code: (props) => <p {...(props as any)} />,
                    pre: (props) => <div {...(props as any)} />,
                    a: (props: any) => (
                      <a
                        {...props}
                        style={{ color: "tomato" }}
                        // onClick={() =>
                        //   onJumpTo({ filename: "", quote: props.href })
                        // }
                      />
                    ),
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    li: ({ node, ...props }) => (
                      <li style={{ marginLeft: 16 }} {...props} />
                    ),
                  }}
                >
                  {parseCitation(nodeContent.properties.text || "", 4)}
                </ReactMarkdown>
              </Box>
            </>
          )}
        <ExportModal
          open={exportModal}
          exportContent={printRef.current!}
          onClose={() => showExportModal(false)}
        />
      </XPanel>
    );
  }
);

FloatPanel.displayName = "FloatPanel";
export default FloatPanel;
