import { memo, useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const IndexView = memo(
  ({ items }: { items: { key: string; value: any }[] }) => {
    const theme = useTheme();
    const headingTags = useMemo(
      () =>
        items.filter(
          ({ value }) =>
            value.tag.startsWith("h") && !value.tag.startsWith("hr")
        ),
      [items]
    );

    return headingTags.length ? (
      <Box sx={{ width: "100%" }} className="no-print">
        {headingTags.map(({ key, value }) => (
          <ReactMarkdown
            key={key}
            rehypePlugins={[rehypeRaw as any]}
            components={{
              h1: (props) => (
                <h1 {...props} style={{ margin: "4px 0" }}>
                  <a
                    href={`#${key}`}
                    className="index-heading"
                    style={{
                      color: theme.palette.secondary.light,
                      fontSize: 16,
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
                  }}
                >
                  <a
                    href={`#${key}`}
                    className="index-heading"
                    style={{
                      color: theme.palette.secondary.light,
                      fontSize: 15,
                    }}
                  >
                    {props.children}
                  </a>
                </h2>
              ),
              h3: (props) => (
                <h3 {...props} style={{ margin: "4px 0 4px 8px" }}>
                  <a
                    href={`#${key}`}
                    className="index-heading"
                    style={{
                      color: theme.palette.secondary.light,
                      fontSize: 14,
                    }}
                  >
                    {props.children}
                  </a>
                </h3>
              ),
              h4: (props) => (
                <h4
                  {...props}
                  style={{ margin: "4px 0 4px 12px", fontSize: 13 }}
                >
                  <a
                    href={`#${key}`}
                    className="index-heading"
                    style={{ color: theme.palette.secondary.light }}
                  >
                    {props.children}
                  </a>
                </h4>
              ),
              h5: (props) => (
                <h5
                  {...props}
                  style={{ margin: "4px 0 4px 16px", fontSize: 12 }}
                >
                  <a
                    href={`#${key}`}
                    className="index-heading"
                    style={{
                      color: theme.palette.secondary.light,
                      fontSize: 16,
                    }}
                  >
                    {props.children}
                  </a>
                </h5>
              ),
              h6: (props) => (
                <h6
                  {...props}
                  style={{ margin: "4px 0 4px 20px", fontSize: 11 }}
                >
                  <a
                    href={`#${key}`}
                    className="index-heading"
                    style={{
                      color: theme.palette.secondary.light,
                      fontSize: 16,
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
  }
);

IndexView.displayName = "IndexView";
