import { ReactNode } from "react";
import { CustomOption, CustomSelect, OptionContainer } from "./Select.styled";
import { SelectOption } from "@mui/base";
import uuid from "react-uuid";

const Select = ({
  values,
  initialValue,
  setValue,
  renderValue,
  disabled,
}: {
  values: any[];
  initialValue: any;
  setValue: (value: any) => void;
  renderValue:
    | null
    | ((option: SelectOption<any> | null | SelectOption<any>[]) => ReactNode);
  disabled: boolean;
}) => {
  return (
    <CustomSelect
      label="Emotion"
      value={initialValue}
      onChange={(_, value) => {
        setValue(value);
      }}
      slots={{ listbox: OptionContainer, root: "button" }}
      renderValue={renderValue || undefined}
      disabled={disabled}
    >
      {values.map((value) => (
        <CustomOption value={value} key={uuid()}>
          {value}
        </CustomOption>
      ))}
    </CustomSelect>
  );
};

export default Select;
