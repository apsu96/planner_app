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
import { range } from "../utils";
import { useState } from "react";

const TaskLine = observer(({ toDo }: { toDo: ToDoType }) => {
  const [hours, setHours] = useState(toDo.duration.estimated.hours);
  const [minutes, setMinutes] = useState(toDo.duration.estimated.minutes);

  function selectCategoryValue(value: any) {
    store.setTaskCategory(toDo.id, value);
  }

  function changeHours(value: number) {
    setHours(value);
    store.setEstimatedHours(toDo.id, value);
  }

  function changeMinutes(value: number) {
    setMinutes(value);
    store.setEstimatedMinutes(toDo.id, value);
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
            values={range(1, 24)}
            value={hours}
            setValue={changeHours}
            renderValue={null}
            disabled={false}
          />
          <Select
            values={range(1, 60)}
            value={minutes}
            setValue={changeMinutes}
            renderValue={null}
            disabled={false}
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
