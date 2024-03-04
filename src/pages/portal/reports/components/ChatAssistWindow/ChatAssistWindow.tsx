/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { memo, useCallback, useState } from "react";
import Split from "react-split";
import {
  Box,
  Button,
  Breadcrumbs,
  Link,
  Typography,
  TextField,
  IconButton,
  colors,
  CircularProgress,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { REPORTS_DICT } from "../../../../../shared/models/constants";
import { XWidget } from "../XWidget";
import { parseObj } from "../../../../../shared/utils/parse";

import "./split.css";

const CHAR_LIMIT = 600;

const tempAnswers = [
  `<code>
  {"title": "2021 Revenue","icon": "","color": "#6081F6","value": "$20,613M"}
  {"title": "2022 Revenue","icon": "","color": "#4DD874","value": "$20,421M"}
  {"title": "2023 Revenue","icon": "","color": "#F76983","value": "$16,996M"}
  </code>`,
  `<table>
<thead>
  <tr>
    <th
      style="
        text-align: center;
        padding: 2px 4px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Quarter
    </th>
    <th
      style="
        text-align: center;
        padding: 2px 4px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Revenue (in millions)
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Q1 2021
    </td>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      $4654
    </td>
  </tr>
  <tr>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Q2 2021
    </td>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      $5341
    </td>
  </tr>
  <tr>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Q3 2021
    </td>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      $5451
    </td>
  </tr>
  <tr>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Q4 2021
    </td>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      $5167
    </td>
  </tr>
  <tr>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Q1 2022
    </td>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      $4654
    </td>
  </tr>
  <tr>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Q2 2022
    </td>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      $5562
    </td>
  </tr>
  <tr>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      Q3 2022
    </td>
    <td
      style="
        text-align: center;
        padding: 4px 8px;
        border: 1px solid rgb(158, 158, 158);
      "
    >
      $5273
    </td>
  </tr>
</tbody>
</table>`,
  `<table style="border-collapse: collapse; margin: 4px 2px; overflow-x: auto">
  <thead>
    <tr>
      <th
        style="
          text-align: center;
          padding: 2px 4px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Quarter
      </th>
      <th
        style="
          text-align: center;
          padding: 2px 4px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Year
      </th>
      <th
        style="
          text-align: center;
          padding: 2px 4px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Gross Margin ($ in millions)
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Q1 2022
      </td>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        1447
      </td>
    </tr>
    <tr>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Q2 2022
      </td>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        1755
      </td>
    </tr>
    <tr>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Q3 2022
      </td>      
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        1477
      </td>
    </tr>
    <tr>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Q4 2022
      </td>      
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        1877
      </td>
    </tr>
    <tr>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Q1 2023
      </td>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        1324
      </td>
    </tr>
    <tr>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Q2 2023
      </td>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        3133
      </td>
    </tr>
    <tr>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        Q3 2023
      </td>
      <td
        style="
          text-align: center;
          padding: 4px 8px;
          border: 1px solid rgb(158, 158, 158);
        "
      >
        2533
      </td>
    </tr>
  </tbody>
</table>`,
];

export const ChatAssistWindow = memo(
  ({
    reportType,
    onExportChat,
    onClose,
  }: {
    reportType: string;
    onExportChat: (htmls: string[]) => void;
    onClose: () => void;
  }) => {
    const [text, setText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [answers, setAnswers] = useState<string[]>([]);

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.value.length <= CHAR_LIMIT) {
          setText(e.target.value);
        }
      },
      []
    );
    const onGenerate = useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAnswers(tempAnswers as string[]);
      }, 1000);
    }, []);

    const onExport = useCallback(() => {
      onExportChat(tempAnswers as string[]);
      onClose();
    }, [onExportChat, onClose]);

    return (
      <Box
        sx={{
          width: "100%",
          height: "calc(100% - 72px)",
          position: "absolute",
          top: 0,
          left: 0,
          bgcolor: "black",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2 }}>
          <IconButton href="/portal/reports">
            <ArrowBackIcon />
          </IconButton>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
            <Link underline="hover" color="inherit" href="/portal/reports">
              Reports
            </Link>
            <Link underline="hover" color="inherit" href="#" onClick={onClose}>
              {REPORTS_DICT[reportType].label} Report
            </Link>
            <Typography color="text.primary">Chat Box</Typography>
          </Breadcrumbs>
        </Box>
        <Split
          className="split"
          sizes={[40, 60]}
          minSize={100}
          expandToMin={false}
          gutterSize={8}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          direction="horizontal"
          cursor="col-resize"
        >
          <Box sx={{ height: "100%", p: 2, bgcolor: colors.grey[900] }}>
            <Box textAlign="right" fontSize={12}>
              {text.length}/{CHAR_LIMIT}
            </Box>
            <TextField
              fullWidth
              multiline
              disabled={loading}
              value={text}
              onChange={onChange}
              placeholder="Enter your iniputs..."
              rows={12}
              sx={{
                bgcolor: "rgba(0, 0, 0.6)",
                "& .MuiInputBase-root": { fontSize: 12 },
              }}
            />
            <Box sx={{ fontSize: 10, color: colors.grey[600] }}>
              Write a prompt about the provided top.
            </Box>
            <Box textAlign="right" mt={2}>
              <Button
                variant="contained"
                size="small"
                onClick={onGenerate}
                disabled={loading || !text}
              >
                Generate
              </Button>
            </Box>
          </Box>
          <Box sx={{ height: "100%", p: 2, bgcolor: "#292943" }}>
            <Box fontWeight="bold" fontSize={12} my={1}>
              Output
            </Box>

            <Box
              sx={{
                borderRadius: 1,
                bgcolor: "rgba(0, 0, 0.6)",
                height: 600,
                width: "100%",
                p: 4,
                overflowY: "auto",
              }}
            >
              {loading ? (
                <Box pt={32} textAlign="center">
                  <CircularProgress />
                </Box>
              ) : (
                (answers as any).map((answer: string, index: number) => (
                  <ReactMarkdown
                    key={index}
                    rehypePlugins={[rehypeRaw as any]}
                    components={{
                      code: (props: any) => {
                        const parsed: any[] = parseObj(
                          props.children[0]!.toString()
                        );

                        return (
                          <Box sx={{ display: "flex", gap: 2 }}>
                            {parsed.map((category: any) => (
                              <Box
                                key={category.title}
                                sx={{
                                  width: "100%",
                                  px: 4,
                                  py: 2,
                                  bgcolor: colors.grey[900],
                                  display: "flex",
                                  gap: 2,
                                }}
                              >
                                <Box
                                  sx={{
                                    borderRadius: "50%",
                                    bgcolor: category.color,
                                    width: 50,
                                    height: 50,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <MonetizationOnIcon sx={{ fontSize: 36 }} />
                                </Box>
                                <Box>
                                  <Box>{category.title}</Box>
                                  <Typography variant="h5" fontWeight="bold">
                                    {category.value}
                                  </Typography>
                                </Box>
                              </Box>
                            ))}
                          </Box>
                        );
                      },
                      pre: (props) => <div {...(props as any)} />,
                      table: (props) => (
                        <XWidget
                          {...props}
                          data={{ tag: "table", content: "" }}
                          isVisualize={false}
                          // visualType={"bar"}
                          onCloseVisualize={() => {}}
                          onChangeData={() => {}}
                        />
                      ),
                      th: ({ isHeader, ...props }: any) => (
                        <th
                          {...props}
                          style={{
                            textAlign: "center",
                            padding: "4px 8px",
                            // color: "white",
                            // background: "black",
                            border: `1px solid ${colors.grey[500]}`,
                          }}
                        />
                      ),
                      td: ({ isHeader, ...props }: any) => (
                        <td
                          {...props}
                          style={{
                            textAlign: "center",
                            padding: "4px 8px",
                            border: `1px solid ${colors.grey[500]}`,
                          }}
                        />
                      ),
                    }}
                  >
                    {answer! || ""}
                  </ReactMarkdown>
                ))
              )}
            </Box>

            <Box textAlign="right">
              <Button
                disabled={loading}
                variant="contained"
                onClick={onExport}
                sx={{ mt: 2 }}
              >
                Export to Report
              </Button>
            </Box>
          </Box>
        </Split>
      </Box>
    );
  }
);

ChatAssistWindow.displayName = "ChatAssistWindow";
