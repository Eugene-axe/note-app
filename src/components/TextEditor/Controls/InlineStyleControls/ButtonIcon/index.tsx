import React from "react";
import { Button } from "antd";
import {
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from "@ant-design/icons";
import { EInlineStyle } from "types/editorTypes";
import { useEditorApi } from "containers/textEditor";

import styles from "./index.module.scss";

export const ButtonIcon = () => {
  const { hasInlineStyle, toggleInlineStyle } = useEditorApi();

  const buttonIcon: Partial<Record<EInlineStyle, JSX.Element>> = {
    [EInlineStyle.BOLD]: <BoldOutlined />,
    [EInlineStyle.ITALIC]: <ItalicOutlined />,
    [EInlineStyle.UNDERLINE]: <UnderlineOutlined />,
  };

  const buttonIconArray = Object.keys(buttonIcon) as EInlineStyle[];

  return (
    <div className={styles.wrapper}>
      {buttonIconArray.map((style) => (
        <Button
          type={hasInlineStyle(style) ? "primary" : "default"}
          size="small"
          onClick={() => toggleInlineStyle(style)}
          icon={buttonIcon[style]}
          key={style}
        ></Button>
      ))}
    </div>
  );
};
