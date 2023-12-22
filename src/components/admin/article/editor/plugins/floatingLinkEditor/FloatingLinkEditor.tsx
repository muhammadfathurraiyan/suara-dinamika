import { useEffect, useRef, useState } from "react";
import {
  SELECTION_CHANGE_COMMAND,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
  BaseSelection,
} from "lexical";
import { mergeRegister } from "@lexical/utils";
import { useCallback } from "react";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $isAtNodeEnd } from "@lexical/selection";
import { getSelectedNode } from "../../utils/getSelectedNode";
import { PiCheck, PiPencilSimpleLine } from "react-icons/pi";
import Link from "next/link";

const LowPriority = 1;

function FloatingLinkEditor({ editor }: { editor: LexicalEditor }) {
  const editorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const mouseDownRef = useRef(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [isEditMode, setEditMode] = useState(false);
  const [lastSelection, setLastSelection] = useState<BaseSelection | null>(
    null
  );

  const updateLinkEditor = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent)) {
        setLinkUrl(parent.getURL());
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl("");
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    const rootElement = editor.getRootElement();
    if (
      selection !== null &&
      !nativeSelection!.isCollapsed &&
      rootElement !== null &&
      rootElement.contains(nativeSelection!.anchorNode)
    ) {
      const domRange = nativeSelection!.getRangeAt(0);
      let rect;
      if (nativeSelection!.anchorNode === rootElement) {
        let inner = rootElement;
        while (inner.firstElementChild != null) {
          inner = inner.firstElementChild as HTMLElement;
        }
        rect = inner.getBoundingClientRect();
      } else {
        rect = domRange.getBoundingClientRect();
      }

      if (!mouseDownRef.current) {
        positionEditorElement(editorElem, rect);
      }
      setLastSelection(selection);
    } else if (!activeElement || activeElement.className !== "link-input") {
      positionEditorElement(editorElem, null);
      setLastSelection(null);
      setEditMode(false);
      setLinkUrl("");
    }

    return true;
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },
        LowPriority
      )
    );
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditMode]);

  return (
    <div
      className="absolute z-20 top-0 left-0 -mt-2 max-w-[300px] w-full flex shadow-md duration-300 bg-neutral-100"
      ref={editorRef}
    >
      <div className="flex items-center">
        <div>
          {isEditMode ? (
            <input
              className="w-full relative"
              ref={inputRef}
              value={linkUrl}
              onChange={(event) => {
                setLinkUrl(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  if (lastSelection !== null) {
                    if (linkUrl !== "") {
                      editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
                    }
                    setEditMode(false);
                  }
                } else if (event.key === "Escape") {
                  event.preventDefault();
                  setEditMode(false);
                }
              }}
            />
          ) : (
            <div className="block relative">
              <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
                {linkUrl}
              </Link>
            </div>
          )}
        </div>
        <div>
          <div
            className="link-edit"
            role="button"
            tabIndex={0}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setEditMode(!isEditMode);
            }}
          >
            {isEditMode ? <PiCheck /> : <PiPencilSimpleLine />}
          </div>
        </div>
      </div>
    </div>
  );
}

function positionEditorElement(editor: HTMLDivElement, rect: DOMRect | null) {
  if (rect === null) {
    editor.style.opacity = "0";
    editor.style.top = "-1000px";
    editor.style.left = "-1000px";
  } else {
    editor.style.opacity = "1";
    editor.style.top = `${rect.top + rect.height + window.pageYOffset + 10}px`;
    editor.style.left = `${
      rect.left + window.scrollX - editor.offsetWidth / 2 + rect.width / 2
    }px`;
  }
}

export default FloatingLinkEditor;
