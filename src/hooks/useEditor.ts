import { useState, useMemo, useCallback } from "react";
import { EditorState, RichUtils } from "draft-js";
import { EInlineStyle } from "types/editorTypes";
import { HTMLtoState, stateToHTML } from "feature/textEditor/convert";

export type TEditorApi = {
  state: EditorState;
  onChange: (state: EditorState) => void;
  addContentToEditor: (html: string) => void;
  toggleInlineStyle: (inlineStyle: EInlineStyle) => void;
  hasInlineStyle: (inlineStyle: EInlineStyle) => boolean;
  toHtml: () => string;
};

export const useEditor = (html?: string): TEditorApi => {
  const [state, setState] = useState(() =>
    html
      ? EditorState.createWithContent(HTMLtoState(html))
      : EditorState.createEmpty()
  );

  const addContentToEditor = useCallback(
    (html: string) =>
      setState(EditorState.createWithContent(HTMLtoState(html))),
    []
  );

  const toggleInlineStyle = useCallback((inlineStyle: EInlineStyle) => {
    setState((currentState) =>
      RichUtils.toggleInlineStyle(currentState, inlineStyle)
    );
  }, []);

  const hasInlineStyle = useCallback(
    (inlineStyle: EInlineStyle) => {
      const currentStyle = state.getCurrentInlineStyle();
      return currentStyle.has(inlineStyle);
    },
    [state]
  );

  const toHtml = useCallback(() => {
    return stateToHTML(state.getCurrentContent());
  }, [state]);

  return useMemo(
    () => ({
      state,
      onChange: setState,
      toggleInlineStyle,
      hasInlineStyle,
      toHtml,
      addContentToEditor,
    }),
    [state, toggleInlineStyle, hasInlineStyle, addContentToEditor]
  );
};
