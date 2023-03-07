import React from "react";
import { Button } from "antd";

import styles from "./index.module.scss";

type TProps = {
  saveNote: () => void;
  removeNote: () => void;
};

export const ButtonSaveAndDelete = (props: TProps) => {
  const { saveNote, removeNote } = props;
  return (
    <div className={styles.wrapper}>
      <Button type="primary" onClick={saveNote}>
        Сохранить изменения
      </Button>
      <Button type="default" onClick={removeNote}>
        Удалить заметку
      </Button>
    </div>
  );
};
