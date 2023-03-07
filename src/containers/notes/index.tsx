import { useContext, createContext, ReactNode } from "react";
import { useNotes, TNoteApi } from "hooks/useNotes";

const NoteContext = createContext<TNoteApi | undefined>(undefined);

export const useNotesApi = () => {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error("useEditorApi must be used within TextEditorProvider");
  }

  return context;
};

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const notesApi = useNotes();

  return (
    <NoteContext.Provider value={notesApi}>{children}</NoteContext.Provider>
  );
};
