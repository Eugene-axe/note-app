import React from "react";
import { List } from "antd";

import { useNotesApi } from "containers/notes";
import { TNote } from "types/noteTypes";

import styles from "./index.module.scss";

const { Item } = List;

export const ListItem = ({ item, index }: { item: TNote; index: number }) => {

  const { setCurrentNote } = useNotesApi();
  
  return (
    <Item className={styles.wrapper} onClick={() => setCurrentNote(item)}>
      <Item.Meta
        avatar={`${index + 1}. `}
        title={item.title}
        description={
          <span
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        }
      />
    </Item>
  );
};
