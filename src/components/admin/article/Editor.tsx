"use client";
import { EDITOR_JS_TOOLS } from "@/libs/tools";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";

export default function Editor() {
  const ref = useRef<any>();
  const initialEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        console.log("Editor.js is ready to work!");
        ref.current = editor
      },
      autofocus: true,
      onChange: async() => {
        let content = await editor.saver.save()
        console.log(content)
      },
      tools: EDITOR_JS_TOOLS,
    });
  };

  useEffect(() => {
    if(ref.current === null){
      initialEditor()
    }

    return () => {
      ref?.current?.destroy()
      ref.current = null
    }
  }, []);
  return <div id="editorjs"></div>;
}
