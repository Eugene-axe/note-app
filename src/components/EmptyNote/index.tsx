import React from "react";
import { Button, Empty, Tooltip } from "antd";

import { useNotesApi } from "containers/notes";

import styles from "./index.module.scss";

const tooltipText =
  "Новая заметка добавится в список и откроется в окне редактирования. Изменить можно как содержимое, так и название";

export const EmptyNote = () => {
  const { addNote } = useNotesApi();

  return (
    <Empty
      description="Пока ничего не выбрано. Можете создать новую"
      className={styles.wrapper}
    >
      <Tooltip title={tooltipText} defaultOpen placement="bottom">
        <Button type="primary" onClick={addNote}>
          + Новая
        </Button>
      </Tooltip>
    </Empty>
  );
};
