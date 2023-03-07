import React from "react";
import { Select } from "antd";
import { EInlineStyle } from "types/editorTypes";
import { useEditorApi } from "containers/textEditor";

enum EFonts {
  ARIAL = "Arial",
  IMPACT = "Impact",
  TIMES_NEW_ROMAN = "Times New Roman",
  VERDANA = "Verdana",
}

export const FontSelect = () => {
  const { hasInlineStyle, toggleInlineStyle } = useEditorApi();

  const fontsOptions = Object.entries(EFonts).map(([value, title]) => ({
    label: title,
    value,
  })) as Array<{ label: string; value: EInlineStyle }>;

  const currentValue = fontsOptions.find((option) =>
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
      options={fontsOptions}
      value={currentValue?.value}
    />
  );
};
