"use client";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createTextNode, $getRoot, EditorState } from "lexical";
import React, { useEffect, useState } from "react";
import { editorTheme } from "@/theme/EditorTheme";
import { $createHeadingNode, HeadingNode } from "@lexical/rich-text";

const theme = editorTheme;

function onError(error: Error) {
  console.error(error);
}

const nodes = [HeadingNode];

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

  const HeadingPlugin = () => {
    const [editor] = useLexicalComposerContext();
    const onClick = (e: React.MouseEvent) => {
      editor.update(() => {
        const root = $getRoot();
        root.append(
          $createHeadingNode("h1").append($createTextNode("hello World!"))
        );
      });
    };
    return <button onClick={onClick}>Heading</button>;
  };

  const OnChangePlugin = ({
    onChange,
  }: {
    onChange: (editorState: EditorState) => void;
  }): undefined => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        onChange(editorState);
      });
    }, [editor, onChange]);
  };

  return (
    <div className="relative w-3/4">
      <label className="font-semibold text-sm" htmlFor="image">
        Body
      </label>
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="w-full min-h-screen border p-2 border-neutral-900/30 focus:outline-none focus:border-2 focus:border-neutral-900/50" />
          }
          placeholder={
            <div className="absolute left-2 top-[2.1rem] font-semibold text-neutral-900/40">
              Tulis article disini...
            </div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
      </LexicalComposer>
    </div>
  );
}
