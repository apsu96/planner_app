import {
  MoveButton,
  TaskLineContainer,
  ButtonsContainer,
  ActionIcon,
  BadgesContainer,
  CategoryContainer,
  TimeContainer,
  TaskLineInput,
} from "./UIKit.styled";
import CloseIcon from "../images/CloseIcon.svg";
import { ToDoType } from "../Store";
import store from "../Store";
import Select from "./Select";
import { TaskCategory } from "../Store";
import { timeRange } from "../utils";
import { useState } from "react";

const TaskLine = ({ toDo, index }: { toDo: ToDoType; index: number }) => {
  const formattedHours =
    toDo.duration.estimated.hours < 10
      ? "0" + toDo.duration.estimated.hours
      : toDo.duration.estimated.hours.toString();
  const formattedMinutes =
    toDo.duration.estimated.minutes < 10
      ? "0" + toDo.duration.estimated.minutes
      : toDo.duration.estimated.minutes.toString();
  const [hours, setHours] = useState(formattedHours);
  const [minutes, setMinutes] = useState(formattedMinutes);
  const [selectOpen, setSelectOpen] = useState(false);
  const [inputValue, setInputValue] = useState(toDo.taskDescription);

  function selectCategoryValue(value: any) {
    store.setTaskCategory(toDo.id, value);
  }

  function changeHours(value: string) {
    if (value == null) return;
    setHours(value);
    if (value !== hours) {
      store.setEstimatedHours(toDo.id, +value);
    }
  }

  function changeMinutes(value: string) {
    if (value == null) return;
    setHours(value);
    console.log(value);
    if (value !== minutes) {
      store.setEstimatedMinutes(toDo.id, +value);
      setMinutes(value);
    }
  }

  function changeTakDescription(value: string) {
    setInputValue(value);
    store.setTaskDescription(index, value);
  }

  function renderTimeValue() {
    let hoursVal = "";
    if (+hours > 0) {
      hoursVal = +hours + " h ";
    }
    const minutesVal = +minutes + " min";
    return hoursVal + minutesVal;
  }

  return (
    <TaskLineContainer>
      <MoveButton />
      <TaskLineInput
        value={inputValue}
        onChange={(e) => changeTakDescription(e.target.value)}
      />
      <BadgesContainer>
        <CategoryContainer>
          <Select
            values={Object.values(TaskCategory)}
            value={toDo.category}
            setValue={selectCategoryValue}
            renderValue={null}
            disabled={false}
          />
        </CategoryContainer>
        <TimeContainer>
          <Select
            values={timeRange(0, 23)}
            value={hours}
            setValue={changeHours}
            renderValue={renderTimeValue}
            disabled={false}
            hideIcon={true}
            timeType={true}
            variant="taskLine"
            boxOpen={selectOpen}
            onListboxOpenChange={(isOpen) => setSelectOpen(isOpen)}
          />
          <Select
            values={timeRange(0, 59)}
            value={minutes}
            setValue={changeMinutes}
            renderValue={() => null}
            disabled={false}
            timeType={true}
            variant="hidden"
            boxOpen={selectOpen}
            onListboxOpenChange={(isOpen) => setSelectOpen(isOpen)}
          />
        </TimeContainer>
        <ButtonsContainer>
          <ActionIcon
            src={CloseIcon}
            alt="close"
            onClick={() => store.removeToDo(toDo.id)}
            disable={false}
          />
        </ButtonsContainer>
      </BadgesContainer>
    </TaskLineContainer>
  );
};

export default TaskLine;
