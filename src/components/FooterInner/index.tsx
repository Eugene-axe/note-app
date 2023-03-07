import React from "react";
import { Typography } from "antd";

import styles from "./index.module.scss";

const { Link } = Typography;
export const FooterInner = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        Автор:
        <Link href="https://github.com/Eugene-axe">Мой профиль на github</Link>
      </div>
      <div>Стажировка Северсталь 2023</div>
      <div>
        API Текстового редактора :
        <Link href="https://draftjs.org/">Draft.js</Link>
      </div>
    </div>
  );
};
