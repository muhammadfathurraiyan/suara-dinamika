"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { $getRoot, $getSelection, EditorState } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table";
import { ListNode, ListItemNode } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { theme } from "./theme/theme";
import ToolBar from "./plugins/Toolbar/Toolbar";
import CodeHighlightPlugin from "./plugins/codeHightLight/CodeHighLight";
import { ImageNode } from "./node/imageNode/ImageNode";
import ImagesPlugin from "./plugins/imagePlugin/ImagePlugin";
import FloatingTextFormatToolbarPlugin from "./plugins/floatingTextFormatToolbarPlugin/FloatingTextFormatToolbarPlugin";

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
}

function onError(error: Error) {
  console.error(error);
}

function OnChangePlugin({
  onChange,
}: {
  onChange: (editorState: EditorState) => void;
}): undefined {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
}

export default function Editor({ body, from }: { body: string; from: string }) {
  const [editorState, setEditorState] = useState<string>();

  function onChange(editorState: EditorState) {
    // Call toJSON on the EditorState object, which produces a serialization safe string
    const editorStateJSON = editorState.toJSON();
    // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
    setEditorState(JSON.stringify(editorStateJSON));
  }

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
      ImageNode,
    ],
  };

  const initialEditConfig = {
    namespace: "MyEditor",
    editorState: body,
    theme,
    onError,
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
      ImageNode,
    ],
  };

  return (
    <>
      <input type="hidden" name="body" value={editorState} />
      <LexicalComposer
        initialConfig={from === "edit" ? initialEditConfig : initialConfig}
      >
        <div className="relative">
          <ToolBar />
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="min-h-[200px] w-full p-2 relative outline-none border border-neutral-900/30" />
            }
            placeholder={
              <div className="absolute top-9 left-0 p-2 text-neutral-900/40 font-semibold">
                Tulis article...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MyCustomAutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <ImagesPlugin captionsEnabled={false} />
          <CodeHighlightPlugin />
          <FloatingTextFormatToolbarPlugin />
          <HistoryPlugin />
          <OnChangePlugin onChange={onChange} />
        </div>
      </LexicalComposer>
    </>
  );
}
