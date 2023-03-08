import React, { useEffect } from "react";
import { Editor } from "draft-js";

import { InlineStyleControls } from "./Controls/InlineStyleControls";
import { ButtonSaveAndDelete } from "./ButtonSaveAndDelete";

import { inlineStyleMap } from "feature/textEditor/inlineStyleMap";
import { useNotesApi } from "containers/notes";
import { useEditorApi } from "containers/textEditor";

import "draft-js/dist/Draft.css";
import styles from "./index.module.scss";

export const TextEditor = ({ noteTitle }: { noteTitle: string }) => {
  const { state, onChange, toHtml, addContentToEditor } = useEditorApi();
  const { currentNote, saveEditedNote, deleteNote } = useNotesApi();

  const saveNote = () => {
    if (currentNote)
      saveEditedNote({
        ...currentNote,
        description: toHtml(),
        title: noteTitle,
      });
  };

  const removeNote = () => {
    if (currentNote) deleteNote(currentNote);
  };

  useEffect(() => {
    if (currentNote) {
      addContentToEditor(currentNote.description);
    }
  }, [currentNote]);

  return (
    <div className={styles.wrapper}>
      <InlineStyleControls />
      <div className={styles.editor}>
        <Editor
          customStyleMap={inlineStyleMap}
          editorState={state}
          onChange={onChange}
          placeholder="Я хотел бы записать ..."
          spellCheck
        />
      </div>
      <ButtonSaveAndDelete {...{ removeNote, saveNote }} />
    </div>
  );
};
