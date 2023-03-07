import React from "react";
import { Typography } from "antd";

import styles from "./index.module.scss";

const { Title } = Typography;

type TProps = { title: string; children: React.ReactNode };
export const ControlItem = (props: TProps) => {
  const { title, children } = props;

  return (
    <div className="wrapper">
      <Title level={5}>{title}</Title>
      <div className={styles.child}>{children}</div>
    </div>
  );
};
