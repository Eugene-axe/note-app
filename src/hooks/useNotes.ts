import React, { useState, useMemo, useCallback, useEffect } from "react";
import { dataSource } from "constants/dataSource";
import { TNote } from "types/noteTypes";
import { getFromStorage, saveToStorage } from "store";

export type TNoteApi = {
  notes: TNote[];
  currentNote: TNote | undefined;
  addNote: () => void;
  deleteNote: (deleteNote: TNote) => void;
  saveEditedNote: (editedNote: TNote) => void;
  setCurrentNote: React.Dispatch<React.SetStateAction<TNote | undefined>>;
};

export const useNotes = () => {
  const [currentNote, setCurrentNote] = useState<TNote>();
  const [notes, setNotes] = useState<TNote[]>([]);

  const addNote = useCallback(() => {
    const newNote: TNote = {
      id: Date.now(),
      title: "Новая заметка",
      description: "",
    };
    setNotes((notes) => [...notes, newNote]);
    setCurrentNote(newNote);
  }, []);

  const deleteNote = useCallback((deleteNote: TNote) => {
    setNotes((notes) => notes.filter((note) => note.id !== deleteNote.id));
    setCurrentNote(undefined);
  }, []);

  const saveEditedNote = useCallback(
    (editedNote: TNote) =>
      setNotes((notes) =>
        notes.map((note) => (note.id !== editedNote.id ? note : editedNote))
      ),
    []
  );

  useEffect(() => {
    const data = getFromStorage() as TNote[];
    if (data.length) {
      setNotes(data);
    } else {
      setNotes(dataSource);
    }
  }, []);

  useEffect(() => {
    if (notes.length) {
      saveToStorage(notes);
    }
  }, [deleteNote, addNote, saveEditedNote, notes]);

  return useMemo(
    () => ({
      notes,
      currentNote,
      addNote,
      deleteNote,
      saveEditedNote,
      setCurrentNote,
    }),
    [addNote, deleteNote, saveEditedNote, setCurrentNote, currentNote, notes]
  );
};
