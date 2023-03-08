import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontFamily: "Grtsk Peta, Arial, sans-serif",
    colorPrimary: "#0041a0",
    colorPrimaryHover: "#002f6c",
  },
  components: {
    Layout: {
      colorBgBody: "#ffffff",
      colorBgHeader: "#08449c",
      colorTextHeading: "white",
    },
    Button: {
      borderRadius: 25,
      paddingContentHorizontal: 18,
      paddingContentVertical: 0,
      controlHeight: 42,
    },
    Typography: {
      sizeMarginHeadingVerticalStart: 0,
      sizeMarginHeadingVerticalEnd: 0,
    },
    Tooltip: {
      colorBgDefault: "#021f45",
    },
  },
};
