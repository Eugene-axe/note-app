import React from "react";
import { Select } from "antd";

import { EInlineStyle } from "types/editorTypes";
import { useEditorApi } from "containers/textEditor";
import { INLINE_FONT_SIZE } from "constants/inlineStyle";

const fontSizes = INLINE_FONT_SIZE as unknown as Record<EInlineStyle, string>;

export const FontSizeSelect = () => {
  const { hasInlineStyle, toggleInlineStyle } = useEditorApi();

  const fontsSizeOptions = Object.entries(fontSizes).map(([value, title]) => ({
    label: title,
    value,
  })) as Array<{ label: string; value: EInlineStyle }>;

  const currentValue = fontsSizeOptions.find((option) =>
    hasInlineStyle(option.value)
  );

  const handleChange = (value: EInlineStyle) => {
    toggleInlineStyle(value);
  };

  return (
    <Select
      size="small"
      style={{ width: 100 }}
      onChange={handleChange}
      options={fontsSizeOptions}
      value={currentValue?.value}
    />
  );
};
