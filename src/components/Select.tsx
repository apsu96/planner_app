import { ReactNode, useEffect, useRef, useState } from "react";
import {
  CustomOption,
  CustomSelect,
  OptionContainer,
  OptionBox,
  RTimeOptionBox,
  LTimeOptionBox,
  CategoryOptionContainer,
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
  boxOpen,
  onListboxOpenChange,
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
  boxOpen?: boolean;
  onListboxOpenChange?: (isOpen: boolean) => void;
}) => {
  const [boxWidth, setBoxWidth] = useState<number>();
  const ref = useRef<HTMLElement>(null);

  function handleResize() {
    if (ref.current?.offsetWidth !== boxWidth) {
      setBoxWidth(ref.current?.offsetWidth);
    }
  }

  useEffect(() => {
    if (ref.current) {
      handleResize();
    }
  }, [ref.current]);

  useEffect(() => {
    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <CustomSelect
      ref={ref}
      label="Emotion"
      value={value}
      onChange={(_, value) => {
        setValue(value);
      }}
      slots={{
        listbox:
          variant === "taskForm"
            ? OptionBox
            : variant === "category"
            ? CategoryOptionContainer
            : variant === "taskLine"
            ? LTimeOptionBox
            : variant === "hidden"
            ? RTimeOptionBox
            : OptionContainer,
        root: "button",
      }}
      renderValue={renderValue || undefined}
      disabled={disabled}
      variant={variant}
      hideicon={hideIcon?.toString()}
      timetype={timeType?.toString()}
      listboxOpen={boxOpen}
      onListboxOpenChange={onListboxOpenChange}
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
