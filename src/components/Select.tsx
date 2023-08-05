import { ReactNode, useEffect, useRef, useState } from "react";
import {
  CustomOption,
  CustomSelect,
  OptionContainer,
  OptionBox,
} from "./Select.styled";
import { SelectOption } from "@mui/base";
import uuid from "react-uuid";

const Select = ({
  values,
  value,
  setValue,
  renderValue,
  disabled,
  variant,
  hideIcon,
  timeType,
}: {
  values: any[];
  value: any;
  setValue: (value: any) => void;
  renderValue:
    | null
    | ((option: SelectOption<any> | null | SelectOption<any>[]) => ReactNode);
  disabled: boolean;
  variant?: string | undefined;
  hideIcon?: boolean;
  timeType?: boolean;
}) => {
  const [boxWidth, setBoxWidth] = useState<number>();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      setBoxWidth(ref.current.offsetWidth);
    }
  }, [ref.current]);
  return (
    <CustomSelect
      ref={ref}
      label="Emotion"
      value={value}
      onChange={(_, value) => {
        setValue(value);
      }}
      slots={{
        listbox: variant === "taskForm" ? OptionBox : OptionContainer,
        root: "button",
      }}
      renderValue={renderValue || undefined}
      disabled={disabled}
      variant={variant}
      hideicon={hideIcon?.toString()}
      timetype={timeType?.toString()}
    >
      {values.map((value) => (
        <CustomOption
          value={value}
          key={uuid()}
          variant={variant}
          customwidth={boxWidth}
          timetype={timeType?.toString()}
        >
          {value}
        </CustomOption>
      ))}
    </CustomSelect>
  );
};

export default Select;
