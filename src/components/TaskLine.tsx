import {
  MoveButton,
  TaskLineContainer,
  Text,
  ButtonsContainer,
  ActionIcon,
  BadgesContainer,
  CategoryContainer,
  TimeContainer,
} from "./UIKit.styled";
import CloseIcon from "../images/CloseIcon.svg";
import { ToDoType } from "../Store";
import store from "../Store";
import Select from "./Select";
import { TaskCategory } from "../Store";
import { observer } from "mobx-react-lite";
import { timeRange } from "../utils";
import { useState } from "react";

const TaskLine = observer(({ toDo }: { toDo: ToDoType }) => {
  const [hours, setHours] = useState(toDo.duration.estimated.hours);
  const [minutes, setMinutes] = useState(toDo.duration.estimated.minutes);
  const [selectOpen, setSelectOpen] = useState(false);

  function selectCategoryValue(value: any) {
    store.setTaskCategory(toDo.id, value);
  }

  function changeHours(value: string) {
    setHours(+value);
    // store.setEstimatedHours(toDo.id, +value);
  }

  function changeMinutes(value: string) {
    setMinutes(+value);
    // store.setEstimatedMinutes(toDo.id, +value);
  }

  function renderTimeValue() {
    let hoursVal = "";
    let minutesVal = "";
    if (hours > 0) {
      hoursVal = hours + " h ";
    }
    if (minutes > 0 && minutes < 10) {
      minutesVal = "0" + minutes.toString() + " min";
    } else if (minutes >= 10) {
      minutesVal = minutes + " min";
    } else {
      minutesVal = "00 min";
    }
    return hoursVal + minutesVal;
  }

  return (
    <TaskLineContainer>
      <MoveButton />
      <Text>{toDo.taskDescription}</Text>
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
            values={timeRange(1, 24)}
            value={hours.toString()}
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
            values={timeRange(1, 60)}
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
});

export default TaskLine;
