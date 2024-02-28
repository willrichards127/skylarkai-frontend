import { memo, useMemo } from "react";
import { Box, useTheme } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const IndexView = memo(
  ({ items }: { items: { key: string; value: any }[] }) => {
    const theme = useTheme();
    const headingTags = useMemo(
      () => items.filter(({ value }) => value.tag.startsWith("h") && !value.tag.startsWith("hr")),
      [items]
    );

    return (
      headingTags.length ?
        <Box sx={{ minHeight: 1200, width: "100%" }} className="no-print">
          {headingTags.map(({ key, value }) => (
            <ReactMarkdown
              key={key}
              rehypePlugins={[rehypeRaw as any]}
              components={{
                h1: (props) => (
                  <h1 {...props} style={{ marginBottom: 32 }}>
                    <a
                      href={`#${key}`}
                      className="index-heading"
                      style={{ color: theme.palette.secondary.light }}
                    >
                      {props.children}
                    </a>
                  </h1>
                ),
                h2: (props) => (
                  <h2
                    {...props}
                    style={{
                      marginLeft: 16,
                      marginBottom: 16,
                    }}
                  >
                    <a
                      href={`#${key}`}
                      className="index-heading"
                      style={{ color: theme.palette.secondary.light }}
                    >
                      {props.children}
                    </a>
                  </h2>
                ),
                h3: (props) => (
                  <h3 {...props} style={{ marginLeft: 32, marginBottom: 8 }}>
                    <a
                      href={`#${key}`}
                      className="index-heading"
                      style={{ color: theme.palette.secondary.light }}
                    >
                      {props.children}
                    </a>
                  </h3>
                ),
                h4: (props) => (
                  <h4 {...props} style={{ marginLeft: 48, marginBottom: 4 }}>
                    <a
                      href={`#${key}`}
                      className="index-heading"
                      style={{ color: theme.palette.secondary.light }}
                    >
                      {props.children}
                    </a>
                  </h4>
                ),
              }}
            >
              {value.content}
            </ReactMarkdown>
          ))}
        </Box>
        : null
    );
  }
);

IndexView.displayName = "IndexView";
