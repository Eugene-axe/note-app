import { useContext, createContext, ReactNode } from "react";
import { useEditor, TEditorApi } from "hooks/useEditor";
import { useNotesApi } from "containers/notes";

const TextEditorContext = createContext<TEditorApi | undefined>(undefined);

export const useEditorApi = () => {
  const context = useContext(TextEditorContext);
  if (context === undefined) {
    throw new Error("useEditorApi must be used within TextEditorProvider");
  }

  return context;
};

const mockData = `<p>Мок я тут <strong>значит</strong> свою <span class="verdana" style="font-family:Verdana , sans-serif">заметку.</span> <u>Длиннуююю оох</u></p>`;

export const TextEditorProvider = ({ children }: { children: ReactNode }) => {
  const { currentNote } = useNotesApi();
  const editorApi = useEditor(currentNote?.description || mockData);

  return (
    <TextEditorContext.Provider value={editorApi}>
      {children}
    </TextEditorContext.Provider>
  );
};
