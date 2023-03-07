import React from "react";

import { ButtonIcon } from "./ButtonIcon";
import { ControlItem } from "./ContolItem";
import { FontSelect } from "./FontSelect";
import { FontSizeSelect } from "./FontSizeSelect";

import styles from "./index.module.scss";

export const InlineStyleControls = () => {
  const controls: Array<{ title: string; children: React.ReactNode }> = [
    {
      title: "Выделение текста",
      children: <ButtonIcon />,
    },
    {
      title: "Шрифт",
      children: <FontSelect />,
    },
    {
      title: "Размер",
      children: <FontSizeSelect />,
    },
  ];

  return (
    <div className={styles.control_styles}>
      {controls.map((item) => (
        <ControlItem {...item} key={item.title} />
      ))}
    </div>
  );
};
