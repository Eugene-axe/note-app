import React from "react";
import { Button, Typography } from "antd";
import styles from "./index.module.scss";
import { useNotesApi } from "containers/notes";

const { Title } = Typography;

export const HeaderInner = () => {

  const { addNote } = useNotesApi();
  
  return (
    <div className={styles.wrapper}>
      <Title level={2}>Заметки-App</Title>
      <Button type="default" size="large" onClick={addNote}>
        + Новая
      </Button>
    </div>
  );
};
