import React from "react";
import { Button, Empty } from "antd";

import { useNotesApi } from "containers/notes";

export const EmptyNote = () => {

  const { addNote } = useNotesApi();

  return (
    <Empty description="Пока ничего не выбрано. Можете создать новую">
      <Button type="primary" onClick={addNote}>
        + Новая
      </Button>
    </Empty>
  );
};
