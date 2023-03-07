import React, { useEffect } from "react";
import { Editor } from "draft-js";
import { Button } from "antd";

import { InlineStyleControls } from "./Controls/InlineStyleControls";
import { ButtonSaveAndDelete } from "./ButtonSaveAndDelete";

import { inlineStyleMap } from "feature/textEditor/inlineStyleMap";
import { useNotesApi } from "containers/notes";
import { useEditorApi } from "containers/textEditor";
import { TNote } from "types/noteTypes";

import "draft-js/dist/Draft.css";
import styles from "./index.module.scss";

export const TextEditor = ({ noteTitle }: { noteTitle: string }) => {
  const { state, onChange, toHtml, addContentToEditor } = useEditorApi();
  const { currentNote, saveEditedNote, deleteNote } = useNotesApi();

  const saveNote = () => {
    const newNote = { ...currentNote } as TNote;
    newNote.description = toHtml();
    newNote.title = noteTitle;
    saveEditedNote(newNote);
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
          spellCheck={true}
        />
      </div>
      <ButtonSaveAndDelete {...{ removeNote, saveNote }} />
    </div>
  );
};
