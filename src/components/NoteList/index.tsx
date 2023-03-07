import React from "react";
import { List, Typography } from "antd";

import { ListItem } from "./ListItem";

import { useNotesApi } from "containers/notes";


const { Title } = Typography;

export const NoteList = () => {
  const { notes } = useNotesApi();

  return (
    <List
      bordered
      header={<Title level={3}>Заметки</Title>}
      dataSource={notes.sort((a, b) => b.id - a.id)}
      renderItem={(item, index) => <ListItem {...{ item, index }} />}
    />
  );
};
