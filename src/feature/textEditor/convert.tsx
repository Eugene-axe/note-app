import { convertFromHTML, convertToHTML } from "draft-convert";
import { inlineStyleMap } from "feature/textEditor/inlineStyleMap";
import { EInlineStyle } from "types/editorTypes";

const stateToHTMLMap: Record<EInlineStyle, JSX.Element> = {
  [EInlineStyle.BOLD]: <strong />,
  [EInlineStyle.ITALIC]: <i />,
  [EInlineStyle.UNDERLINE]: <u />,
  [EInlineStyle.ARIAL]: (
    <span className="arial" style={inlineStyleMap[EInlineStyle.ARIAL]} />
  ),
  [EInlineStyle.IMPACT]: (
    <span className="impact" style={inlineStyleMap[EInlineStyle.IMPACT]} />
  ),
  [EInlineStyle.TIMES_NEW_ROMAN]: (
    <span
      className="times_new_roman"
      style={inlineStyleMap[EInlineStyle.TIMES_NEW_ROMAN]}
    />
  ),
  [EInlineStyle.VERDANA]: (
    <span className="verdana" style={inlineStyleMap[EInlineStyle.VERDANA]} />
  ),
  [EInlineStyle.F_10]: (
    <span className="fz_10" style={inlineStyleMap[EInlineStyle.F_10]} />
  ),
  [EInlineStyle.F_12]: (
    <span className="fz_12" style={inlineStyleMap[EInlineStyle.F_12]} />
  ),
  [EInlineStyle.F_14]: (
    <span className="fz_14" style={inlineStyleMap[EInlineStyle.F_14]} />
  ),
  [EInlineStyle.F_16]: (
    <span className="fz_16" style={inlineStyleMap[EInlineStyle.F_16]} />
  ),
  [EInlineStyle.F_18]: (
    <span className="fz_18" style={inlineStyleMap[EInlineStyle.F_18]} />
  ),
};

export const stateToHTML = convertToHTML<EInlineStyle>({
  styleToHTML: (style) => {
    const styleTitle = style as EInlineStyle;
    if (!stateToHTMLMap[styleTitle]) return null;
    return stateToHTMLMap[styleTitle];
  },
});

type TSpan = { [key: string]: EInlineStyle };
type TNodeNameMap = {
  strong: EInlineStyle;
  i: EInlineStyle;
  u: EInlineStyle;
  span: TSpan;
};

const nodeNameMap: TNodeNameMap = {
  strong: EInlineStyle.BOLD,
  i: EInlineStyle.ITALIC,
  u: EInlineStyle.UNDERLINE,
  span: {
    arial: EInlineStyle.ARIAL,
    impact: EInlineStyle.IMPACT,
    times_new_roman: EInlineStyle.TIMES_NEW_ROMAN,
    verdana: EInlineStyle.VERDANA,
    fz_10: EInlineStyle.F_10,
    fz_12: EInlineStyle.F_12,
    fz_14: EInlineStyle.F_14,
    fz_16: EInlineStyle.F_16,
    fz_18: EInlineStyle.F_18,
  },
};

export const HTMLtoState = convertFromHTML<DOMStringMap>({
  htmlToStyle: (nodeName, node, currentStyle) => {
    const name = nodeName as keyof typeof nodeNameMap;
    if (!!nodeNameMap[name]) return currentStyle;
    if (nodeName === "span" && typeof nodeNameMap[nodeName]) {
      for (const key in nodeNameMap.span) {
        if (node.classList.contains(key))
          return currentStyle.add(nodeNameMap.span[key]);
      }
    }
    const styleName = nodeNameMap[name] as string;
    return currentStyle.add(styleName);
  },
});
