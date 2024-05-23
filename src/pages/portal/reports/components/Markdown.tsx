import { colors } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const Markdown = ({
  html,
  isHidden = false,
  onCitationLink,
}: {
  html: string;
  isHidden?: boolean;
  onCitationLink?: ({
    filename,
    quote,
  }: {
    filename: string;
    quote: string;
  }) => void;
}) => {
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
      urlTransform={(value: string) => value} // for image render
      components={{
        pre: (props) => <p {...(props as any)} />,
        li: (props) => (
          <li {...props} style={{ marginBottom: "12px", fontSize: "14px" }} />
        ),
        a: (props: any) => {
          if (props.href) {
            const splited = props.href.split("______");
            const filename = (splited?.[0] || "")
              .replaceAll("___", " ")
              .slice(1);
            const quote = (splited?.[1] || "").replaceAll("___", " ");
            return (
              <a
                {...props}
                className="no-print"
                style={{ color: "tomato", fontSize: "14px" }}
                onClick={() => onCitationLink?.({ filename, quote })}
                title={`${filename}.pdf:${quote}`}
              />
            );
          } else return <p {...props} />;
        },
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
        table: (props) => (
          <table
            {...props}
            style={{
              display: isHidden ? "none" : "auto",
              width: "100%",
              borderCollapse: "collapse",
              overflowX: "auto",
            }}
          />
        ),
        th: (props) => (
          <th
            {...props}
            style={{
              textAlign: "center",
              padding: "4px",
              fontSize: "13px",
              wordBreak: "break-word",
              border: `1px solid ${colors.grey[500]}`,
              backgroundColor: "#A9B6FF",
            }}
          />
        ),
        td: (props) => (
          <td
            {...props}
            style={{
              textAlign: "center",
              padding: "4px",
              fontSize: "12px",
              border: `1px solid ${colors.grey[500]}`,
              wordBreak: "break-word",
            }}
          />
        ),
      }}
    >
      {html}
    </ReactMarkdown>
  );
};
