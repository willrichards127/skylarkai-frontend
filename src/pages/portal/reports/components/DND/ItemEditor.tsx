import { memo, useCallback, useRef } from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { Editor } from "@tinymce/tinymce-react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Paragraph,
  Undo,
  Heading,
  CodeBlock,
} from "ckeditor5";

import {
  IDNDContainer,
  IDNDItem,
} from "../../../../../shared/models/interfaces";
import { parse } from "node-html-parser";
import { categoryParser2 } from "../../../../../shared/utils/parse";

import "ckeditor5/ckeditor5.css";
// import "ckeditor5-premium-features/ckeditor5-premium-features.css";

export const ItemEditorTiny = memo(
  ({
    item,
    onClickAway,
  }: {
    item: IDNDItem;
    onClickAway: (updatedItem: IDNDItem, containers: IDNDContainer[]) => void;
  }) => {
    const editorRef = useRef<any>(null);

    const onClickAwayAction = useCallback(() => {
      if (!editorRef.current) return;
      const content: string = editorRef.current.getContent();
      // 1. Replace 1st element with first element of content
      // 2. Add new items with new containers
      const root = parse(content);
      const validElements: any[] = root.childNodes.filter(
        (el: any) => el.nodeType !== Node.TEXT_NODE
      ); // Filter out text nodes
      if (!validElements.length) return;

      // Correct img tag
      const replaceItem = {
        id: item.id,
        parentId: item.parentId,
        type: "ITEM",
        value:
          validElements[0].rawTagName === "p" &&
          validElements[0].innerHTML.includes("<img")
            ? {
                tag: "img",
                content: validElements[0].innerHTML,
              }
            : {
                tag: validElements[0].rawTagName,
                content: validElements[0].outerHTML,
              },
      };
      // remove first container: this container is an owner of replaced item.
      const containers = categoryParser2(content).slice(1);
      console.log(replaceItem, containers);
      onClickAway(replaceItem as IDNDItem, containers);
    }, [onClickAway, item]);

    return (
      <ClickAwayListener onClickAway={onClickAwayAction}>
        <div>
          <Editor
            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
            onInit={(_, editor) => (editorRef.current = editor)}
            // inline
            initialValue={item.value.content.replaceAll("display: none;", "")} // when table is visualized by chart
            init={{
              menubar: false,
              plugins: "lists anchor link image code media table",
              toolbar:
                "undo redo | blocks | bold italic" +
                "alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "table tablerowheader | image",
              width: "100%",
              height: 240,
              automatic_uploads: true,
              table_header_type: "sectionCells",
              file_picker_types: "image",
              file_picker_callback: (cb) => {
                const input = document.createElement("input");
                input.setAttribute("type", "file");
                input.setAttribute("accept", "image/*");

                input.addEventListener("change", (e: any) => {
                  const file = e.target.files[0];

                  const reader = new FileReader();
                  reader.onload = () => {
                    // Create a Blob object from the file data
                    const blob = new Blob([reader.result!], {
                      type: file.type,
                    });
                    const uri = URL.createObjectURL(blob);
                    cb(uri, { title: file.name });
                  };

                  // Read the file as an ArrayBuffer
                  reader.readAsArrayBuffer(file);
                });

                input.click();
              },
            }}
          />
        </div>
      </ClickAwayListener>
    );
  }
);

export const ItemEditorCK = memo(
  ({
    item,
    onClickAway,
  }: {
    item: IDNDItem;
    onClickAway: (updatedItem: IDNDItem, containers: IDNDContainer[]) => void;
  }) => {
    const editorRef = useRef<ClassicEditor>();

    const onClickAwayAction = useCallback(() => {
      if (!editorRef.current) return;
      const content: string = editorRef.current.getData();
      console.log('==========================', content);
      // 1. Replace 1st element with first element of content
      // 2. Add new items with new containers
      const root = parse(content);
      const validElements: any[] = root.childNodes.filter(
        (el: any) => el.nodeType !== Node.TEXT_NODE
      ); // Filter out text nodes
      if (!validElements.length) return;

      // Correct img tag
      const replaceItem = {
        id: item.id,
        parentId: item.parentId,
        type: "ITEM",
        value:
          validElements[0].rawTagName === "p" &&
          validElements[0].innerHTML.includes("<img")
            ? {
                tag: "img",
                content: validElements[0].innerHTML,
              }
            : {
                tag: validElements[0].rawTagName,
                content: validElements[0].outerHTML,
              },
      };
      // remove first container: this container is an owner of replaced item.
      const containers = categoryParser2(content).slice(1);
      console.log(replaceItem, containers);
      onClickAway(replaceItem as IDNDItem, containers);
    }, [onClickAway, item]);

    return (
      <ClickAwayListener onClickAway={onClickAwayAction}>
        <div>
          <CKEditor
            editor={ClassicEditor}
            config={{
              toolbar: {
                items: ["undo", "redo", "|", "bold", "italic", "|", "heading", "|", "codeBlock"],
              },
              plugins: [Bold, Essentials, Italic, Paragraph, Undo, Heading, CodeBlock],
              licenseKey:
                "VXZlUVExQ0Z1cU84SjJkazZlK0lENnhZdThjbkdtaWdzcWZpZ0lQYzl4ZXpTeWV6Vnd0K1Npd05oWU5EVVE9PS1NakF5TkRBNE1ERT0=",
              initialData: item.value.content.replaceAll("display: none;", ""),
            }}
            onReady={(editor) => (editorRef.current = editor)}
          />
        </div>
      </ClickAwayListener>
    );
  }
);
