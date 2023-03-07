import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { theme } from "styles/theme";
import { NoteProvider } from "containers/notes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <NoteProvider>
        <App />
      </NoteProvider>
    </ConfigProvider>
  </React.StrictMode>
);
