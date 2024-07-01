import React, { memo, useRef, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, IconButton, CircularProgress, colors } from "@mui/material";
import { toast } from "react-toastify";
import { useReactFlow } from "reactflow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { XPanel } from "../../../../../../components/XPanel";
import { Header } from "./Header";
import { XChip } from "../../../../../../components/XChip";
import { LLMNode } from "../nodes/llms/LLMNode";
import { InputNode } from "../nodes/inputs/InputNode";
import { OutputNode } from "../nodes/outputs/OutputNode";
import { DocUploadNode } from "../nodes/dataloaders/DocUploadNode";
import { WebcrawlerNode } from "../nodes/dataloaders/WebcrawlerNode";
import { PineconeNode } from "../../custom-nodes/nodes/vectors/PineconeNode";
import { ChromaNode } from "../../custom-nodes/nodes/vectors/ChromaNode";
import { DocTemplateNode } from "../nodes/resources/DocTemplateNode";
import { CompareDocumentsNode } from "../nodes/resources/CompareDocumentsNode";
import { GoogleSearchNode } from "../nodes/dataloaders/GoogleSearchNode";
import { YahooFinanceNode } from "../nodes/dataloaders/YahooFinanceNode";
import { PitchbookNode } from "../nodes/dataloaders/PitchbookNode";
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
import { YoutubeNode } from "../nodes/dataloaders/YoutubeNode";
import { GoogleDriveNode } from "../nodes/dataloaders/GoogleDriveNode";
import { DataSearchNode } from "../nodes/dataloaders/DataSearchNode";
import { SkylarkDBNode } from "../nodes/vectors/SkylarkDBNode";
import { InvestmentCriteriaNode } from "../nodes/inputs/InvestmentCriteriaNode";
import {
  parseCitation,
  removeExtension,
} from "../../../../../../shared/utils/string";
import { ExportModal } from "../../../../../../components/modals/ExportModal";
import { VDDNode } from "../nodes/dataloaders/VDDNode";
import { useExecuteCriteriaMutation } from "../../../../../../redux/services/setupApi";
import { useSaveReportMutation } from "../../../../../../redux/services/reportApi";
import { longDateFormat } from "../../../../../../shared/utils/basic";
import { CrunchbaseNode } from "../nodes/dataloaders/CrunchbaseNode";
import {
  useIngestFilesCrunchbaseMutation,
  useIngestFilesLinkedinMutation,
  useIngestFilesYoutubeMutation,
} from "../../../../../../redux/services/factsetApi";
import { LinkedInNode } from "../nodes/dataloaders/LinkedInNode";

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
  LLM: LLMNode,
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
  Edgar: EdgarNode,
  Notion: NotionNode,
  MongoDB: MongoDBNode,
  Salesforce: SalesforceNode,
  Slack: SlackNode,
  Hubspot: HubspotNode,
  Postgres: PostgresNode,
  ElasticSearch: ElasticSearchNode,
  Youtube: YoutubeNode,
  GoogleDrive: GoogleDriveNode,
  DataSearch: DataSearchNode,
  VDD: VDDNode,
  InvestmentCriteria: InvestmentCriteriaNode,
  Crunchbase: CrunchbaseNode,
  LinkedIn: LinkedInNode,
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
    const [searchParams] = useSearchParams();
    const unitName = searchParams.get("unitName");
    const printRef = useRef();
    const { getNodes, setNodes } = useReactFlow();

    const [customQuery, { isLoading }] = useCustomQueryMutation();
    const [saveReport] = useSaveReportMutation();
    const [exportModal, showExportModal] = useState<boolean>(false);

    const [executeCriteria, { isLoading: isExecutingCriteria }] =
      useExecuteCriteriaMutation();
    const [ingestfilesCrunchbase, { isLoading: isIngestingCrunchbase }] =
      useIngestFilesCrunchbaseMutation();
    const [ingestfilesYoutube, { isLoading: isIngestingYoutube }] =
      useIngestFilesYoutubeMutation();
    const [ingestfilesLinkedin, { isLoading: isIngestingLinkedin }] =
      useIngestFilesLinkedinMutation();
    const [executionTime, setExecutionTime] = useState("0.0");

    const XForm = ComponentDict[nodeContent.name];

    const onExecuteNode = useCallback(async () => {
      const startTime = performance.now();
      const nodes = getNodes();
      const inputNode = nodes.find((node) => node.data.name === "Input");
      const skyDBNode = nodes.find((node) => node.data.name === "SkyDatabase");
      const llmNode = nodes.find((node) => node.data.name === "LLM");
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
        company_name: unitName!,
        question: inputNode.data.properties.text,
        analysis_type: "financial_diligence",
        llm: llmNode.data.properties?.model || "OpenAI",
        recursion: llmNode?.data.properties?.recursion || 5,
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
      setExecutionTime(fetchDurationInSeconds);
    }, [customQuery, getNodes, setNodes, unitName, nodeContent]);

    const onExecuteCriteria = async () => {
      const nodes = getNodes();
      const llmNode = nodes.find((node) => node.data.name === "LLM");
      const criteriaNode = nodes.find(
        (node) => node.data.name === "InvestmentCriteria"
      );
      if (
        criteriaNode &&
        llmNode &&
        criteriaNode.data.properties.isExecutable
      ) {
        const llm: string = llmNode.data.properties.model;
        const criterias = criteriaNode.data.properties.json;

        const result = await Promise.all(
          criterias.map(async (criteriaCategory: any) => {
            const subResult = await Promise.all(
              criteriaCategory.children.map(async (criteria: any) => {
                const response = await executeCriteria({
                  setupId: nodeContent.setupId!,
                  llm,
                  companyName: nodeContent.setupName!,
                  question: criteria.question,
                }).unwrap();

                if (response && response.length) {
                  return {
                    ...criteria,
                    ...response[0],
                  };
                } else {
                  return {
                    ...criteria,
                  };
                }
              })
            );

            return {
              name: criteriaCategory.name,
              children: subResult,
            };
          })
        );

        setNodes((prev) =>
          prev.map((node) =>
            node.id === nodeId
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    properties: { json: result },
                  },
                }
              : node
          )
        );

        const content = result
          .map((category: any) => {
            const subContent = category.children.map((criteria: any) => {
              return `<h3>${
                criteria.question
              }<span style="font-size: 24px; color: ${
                criteria.Criteria === "Pass" ? "green" : "red"
              }">${
                criteria.Criteria === "Pass" ? "&#x2714" : "&#x2718"
              }</span></h3><p>${criteria.Explanation}${criteria.Citation.map(
                (citation: any) => JSON.stringify({ citation: citation })
              )}</p>`;
            });
            return `<h2>${category.name}</h2>${subContent}`;
          })
          .join("");

        saveReport({
          setupId: nodeContent.setupId!,
          reportName: `Investment Criteria-${new Date().getTime() % 1000}`,
          reportType: 3,
          data:
            `<h1 style="text-align: center;">Investment criteria: ${
              nodeContent.setupName
            }</h1><p style="text-align: center;"><strong>${longDateFormat(
              new Date()
            )}</strong></p>` + content,
        });
      }
    };

    const onIngestCrunchbase = async () => {
      const nodes = getNodes();
      const llmNode = nodes.find((node) => node.data.name === "LLM");
      const crunchBaseNode = nodes.find(
        (node) => node.data.name === "Crunchbase"
      );

      if (crunchBaseNode && llmNode && crunchBaseNode.data.properties.json) {
        const llm: string = llmNode.data.properties.model;
        const categories = crunchBaseNode.data.properties.json.reduce(
          (accum: any, cur: any) => [
            ...accum,
            ...cur.children
              .filter((f: any) => f.checked)
              .map((f: any) => f.key),
          ],
          []
        );

        await ingestfilesCrunchbase({
          setupId: nodeContent.setupId!,
          analysisType: "financial_diligence",
          categories,
          llm,
        });
      }
    };

    const onIngestYoutube = async () => {
      const nodes = getNodes();
      const llmNode = nodes.find((node) => node.data.name === "LLM");
      const youtubeNode = nodes.find((node) => node.data.name === "Youtube");
      const dbNode = nodes.find((node) => node.data.name === "SkyDatabase");

      if (youtubeNode && llmNode && dbNode && youtubeNode.data.properties.url) {
        const llm: string = llmNode.data.properties.model;
        const youtubeUrl: string = youtubeNode.data.properties.url;

        const res = await ingestfilesYoutube({
          setupId: nodeContent.setupId!,
          analysisType: "financial_diligence",
          youtubeUrl,
          llm,
        }).unwrap();

        setNodes((prev) =>
          prev.map((node) =>
            node.data.name === "SkyDatabase"
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    properties: {
                      ...node.data.properties,
                      files: (node.data.properties.files || []).concat(res),
                    },
                  },
                }
              : node
          )
        );
      }
    };

    const onIngestLinkedIn = async () => {
      const nodes = getNodes();
      const llmNode = nodes.find((node) => node.data.name === "LLM");
      const linkedInNode = nodes.find((node) => node.data.name === "Youtube");

      if (linkedInNode && llmNode && linkedInNode.data.properties.url) {
        const llm: string = llmNode.data.properties.model;
        const linkedInUrl: string = linkedInNode.data.properties.url;

        const res = await ingestfilesLinkedin({
          setupId: nodeContent.setupId!,
          analysisType: "financial_diligence",
          linkedInUrl,
          llm,
        });

        setNodes((prev) =>
          prev.map((node) =>
            node.data.name === "SkyDatabase"
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    properties: {
                      ...node.data.properties,
                      files: (node.data.properties.files || []).concat(res),
                    },
                  },
                }
              : node
          )
        );
      }
    };

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
            {["Output"].includes(nodeContent.name) ? (
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
                      <AccessTimeIcon sx={{ fontSize: 14 }} /> {executionTime}s
                    </Box>
                  }
                />
              </Box>
            ) : ["InvestmentCriteria"].includes(nodeContent.name) ? (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box mr="auto" />
                {!isExecutingCriteria ? (
                  <IconButton size="small" onClick={onExecuteCriteria}>
                    <PlayArrowIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                ) : (
                  <CircularProgress size={18} />
                )}
              </Box>
            ) : ["Crunchbase"].includes(nodeContent.name) ? (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box mr="auto" />
                {!isIngestingCrunchbase ? (
                  <IconButton size="small" onClick={onIngestCrunchbase}>
                    <PlayArrowIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                ) : (
                  <CircularProgress size={18} />
                )}
              </Box>
            ) : ["Youtube"].includes(nodeContent.name) ? (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box mr="auto" />
                {!isIngestingYoutube ? (
                  <IconButton size="small" onClick={onIngestYoutube}>
                    <PlayArrowIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                ) : (
                  <CircularProgress size={18} />
                )}
              </Box>
            ) : ["LinkedIn"].includes(nodeContent.name) ? (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box mr="auto" />
                {!isIngestingLinkedin ? (
                  <IconButton size="small" onClick={onIngestLinkedIn}>
                    <PlayArrowIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                ) : (
                  <CircularProgress size={18} />
                )}
              </Box>
            ) : null}
          </Box>
        }
        sxProps={{ minWidth: 320, maxWidth: 400 }}
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
