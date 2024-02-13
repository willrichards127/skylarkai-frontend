import { memo, useCallback, useRef } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Editor } from "@tinymce/tinymce-react";
import { correctTableFormat } from "../../../../shared/utils/parse";

export const ItemEditor = memo(
  ({
    initialItem,
    onClickAway,
  }: {
    initialItem: {
      content: string;
      tag: string;
    };
    onClickAway: (content: string) => void;
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
      onClickAway(updatedContent);
    }, [onClickAway]);

    return (
      <ClickAwayListener onClickAway={onClickAwayAction}>
        <div>
          <Editor
            apiKey={process.env.tinymceAPIKey}
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
