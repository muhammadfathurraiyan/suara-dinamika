"use client";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";
import { useEffect, useState } from "react";

const theme = {};

function onError(error: Error) {
  console.error(error);
}

export default function Editor() {
  const [editorState, setEditorState] = useState("");
  function onChange(editorState: EditorState) {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));
  }

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

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

  return (
    <div className="relative">
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={
            <ContentEditable className="w-3/4 min-h-screen border p-2 border-neutral-900/30 duration-300 focus:outline-neutral-900/50" />
          }
          placeholder={
            <div className="absolute p-2 top-0">Enter some text...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
      </LexicalComposer>
    </div>
  );
}
