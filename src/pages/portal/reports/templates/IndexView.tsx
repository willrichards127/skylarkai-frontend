import { memo, useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { IDNDContainer } from "../../../../shared/models/interfaces";

export const IndexView = memo(({ items }: { items: IDNDContainer[] }) => {
  const theme = useTheme();
  const headingItems = useMemo(
    () =>
      items
        .filter(
          ({ children }) =>
            children.length > 0 &&
            children[0].value.tag.startsWith("h") &&
            children[0].value.tag !== "hr"
        )
        .map(({ children }) => children[0]),
    [items]
  );

  return headingItems.length ? (
    <Box sx={{ width: "100%" }} className="no-print">
      {headingItems.map(({ id, value }) => (
        <ReactMarkdown
          key={id}
          rehypePlugins={[rehypeRaw as any]}
          components={{
            h1: (props) => (
              <h1 {...props} style={{ margin: "4px 0", lineHeight: "22px" }}>
                <a
                  href={`#${id}`}
                  style={{
                    color: theme.palette.secondary.light,
                    fontSize: 17,
                    textDecoration: "none",
                  }}
                >
                  {props.children}
                </a>
              </h1>
            ),
            h2: (props) => (
              <h2
                {...props}
                style={{
                  margin: "4px 0 4px 4px",
                  lineHeight: "22px",
                }}
              >
                <a
                  href={`#${id}`}
                  style={{
                    color: theme.palette.secondary.light,
                    fontSize: 14,
                    textDecoration: "none",
                  }}
                >
                  {props.children}
                </a>
              </h2>
            ),
            h3: (props) => (
              <h3
                {...props}
                style={{ margin: "4px 0 4px 8px", lineHeight: "20px" }}
              >
                <a
                  href={`#${id}`}
                  style={{
                    color: theme.palette.secondary.light,
                    fontSize: 12,
                    textDecoration: "none",
                  }}
                >
                  {props.children}
                </a>
              </h3>
            ),
            h4: (props) => (
              <h4
                {...props}
                style={{
                  margin: "4px 0 4px 12px",
                  fontSize: 11,
                  lineHeight: "16px",
                }}
              >
                <a
                  href={`#${id}`}
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: "none",
                  }}
                >
                  {props.children}
                </a>
              </h4>
            ),
            h5: (props) => (
              <h5
                {...props}
                style={{
                  margin: "4px 0 4px 16px",
                  fontSize: 10,
                  lineHeight: "14px",
                }}
              >
                <a
                  href={`#${id}`}
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: "none",
                  }}
                >
                  {props.children}
                </a>
              </h5>
            ),
            h6: (props) => (
              <h6
                {...props}
                style={{
                  margin: "4px 0 4px 20px",
                  fontSize: 10,
                  lineHeight: "14px",
                }}
              >
                <a
                  href={`#${id}`}
                  style={{
                    color: theme.palette.secondary.light,
                    textDecoration: "none",
                  }}
                >
                  {props.children}
                </a>
              </h6>
            ),
          }}
        >
          {value.content}
        </ReactMarkdown>
      ))}
    </Box>
  ) : null;
});

IndexView.displayName = "IndexView";
