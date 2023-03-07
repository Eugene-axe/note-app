import { INLINE_FONTS, INLINE_FONT_SIZE } from "constants/inlineStyle";
import { EInlineStyle } from "types/editorTypes";

const fontsMap = Object.fromEntries(
  Object.entries(INLINE_FONTS).map(([Enum, fontValue]) => [
    [Enum],
    { fontFamily: fontValue },
  ])
) as Record<EInlineStyle, { fontFamily: string }>;

const fontSizeMap = Object.fromEntries(
  Object.entries(INLINE_FONT_SIZE).map(([Enum, size]) => [
    [Enum],
    { fontSize: size },
  ])
) as Record<EInlineStyle, { fontSize: number }>;

export const inlineStyleMap = { ...fontsMap, ...fontSizeMap };
