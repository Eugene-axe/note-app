import React, { useEffect, useState } from "react";
import { Typography, Row, Col } from "antd";

import { TextEditor } from "components/TextEditor";

import { TextEditorProvider } from "containers/textEditor";
import { useNotesApi } from "containers/notes";

import styles from "./index.module.scss";

const { Title } = Typography;

export const NoteDescription = () => {
  const { currentNote } = useNotesApi();
  const [editableTitle, setEditableTitle] = useState(currentNote?.title || "");

  useEffect(() => {
    if (currentNote) setEditableTitle(currentNote.title);
  }, [currentNote]);

  return (
    <div className={styles.wrapper}>
      <Row align="bottom" gutter={[16, 16]}>
        <Col className={styles.header}>
          <Title level={3}>Подробнее:</Title>
          <Title level={4} editable={{ onChange: setEditableTitle }}>
            {editableTitle}
          </Title>
        </Col>
        <Col span={24}></Col>
        <Col span={24}>
          <TextEditorProvider>
            <TextEditor noteTitle={editableTitle} />
          </TextEditorProvider>
        </Col>
      </Row>
    </div>
  );
};
