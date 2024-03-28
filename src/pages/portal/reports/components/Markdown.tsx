import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const Markdown = ({ html }: { html: string }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw as any]}
      remarkPlugins={[remarkGfm]}
      allowElement={(element, _, parent) => {
        if (element.tagName === "p" && (parent as any).tagName === "li") {
          return false;
        }
        if (element.tagName === "strong" && (parent as any).tagName === "li") {
          return false;
        }
        return true;
      }}
      unwrapDisallowed={true}
      components={{
        pre: (props) => <div {...(props as any)} />,
        li: (props) => (
          <li {...props} style={{ marginBottom: "12px", fontSize: "14px" }} />
        ),
        h1: (props) => (
          <h1
            {...props}
            style={{
              ...props.style,
              fontSize: "28px",
              color: "red",
              margin: "18.76px 0",
            }}
          />
        ),
        h2: (props) => (
          <h2
            {...props}
            style={{
              ...props.style,
              fontSize: "22px",
              color: "#327bf0",
              margin: "18.76px 0",
            }}
          />
        ),
        h3: (props) => (
          <h3
            {...props}
            style={{
              ...props.style,
              fontSize: "18px",
              color: "darkcyan",
              margin: "16.76px 0",
            }}
          />
        ),
        h4: (props) => (
          <h4
            {...props}
            style={{
              ...props.style,
              fontSize: "16px",
              margin: "16px 0",
            }}
          />
        ),
        p: (props) => (
          <p
            {...props}
            style={{ ...props.style, fontSize: "14px", margin: "8px 0" }}
          />
        ),
      }}
    >
      {html}
    </ReactMarkdown>
  );
};
