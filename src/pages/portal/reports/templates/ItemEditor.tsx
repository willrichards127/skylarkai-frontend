import { memo, useCallback, useRef } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Editor } from "@tinymce/tinymce-react";
import { correctTableFormat } from "../../../../shared/utils/parse";
import { IReportItemValue } from "../../../../shared/models/interfaces";

export const ItemEditor = memo(
  ({
    initialItem,
    onClickAway,
  }: {
    initialItem: IReportItemValue;
    onClickAway: (tag: string, content: string) => void;
  }) => {
    const editorRef = useRef<any>(null);

    const onClickAwayAction = useCallback(() => {
      if (!editorRef.current) return;
      let updatedContent = editorRef.current.getContent();
      if (
        updatedContent.includes("<table>") &&
        !updatedContent.includes("<thead>")
      ) {
        updatedContent = correctTableFormat(updatedContent);
      }
      const tagName =
        (
          editorRef.current.getElement().firstChild?.tagName || ""
        ).toLowerCase() || "p";
      onClickAway(tagName, updatedContent);
    }, [onClickAway]);

    return (
      <ClickAwayListener onClickAway={onClickAwayAction}>
        <div>
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            onInit={(_, editor) => (editorRef.current = editor)}
            inline
            initialValue={initialItem.content}
            init={{
              content_css: "dark",
              menubar: false,
              plugins: ["lists", "anchor", "table"],
              toolbar:
                "blocks | bold italic" +
                "alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "table",
            }}
          />
        </div>
      </ClickAwayListener>
    );
  }
);

ItemEditor.displayName = "ItemEditor";
