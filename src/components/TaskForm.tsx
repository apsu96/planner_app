import {
  Container,
  Input,
  Text,
  LargeButton,
  TimeInput,
  Title,
} from "./UIKit.styled";
import TimeIcon from "../images/TimeIcon.svg";
import {
  TaskFormLongColumnContainer,
  TaskFormShortColumnContainer,
  TaskFormRowContainer,
  TaskFormRowMContainer,
  RowContainer,
  TimeIconImage,
} from "./TaskForm.styled";
import { useState } from "react";
import store, { TaskCategory } from "../Store";
import uuid from "react-uuid";
import moment from "moment";
import Select from "./Select";

function TaskForm({ date }: { date: Date }) {
  const initialTime = 0;
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState<TaskCategory>(TaskCategory.Work);
  const [hours, setHours] = useState(initialTime);
  const [minutes, setMinutes] = useState(initialTime);

  function clearForm() {
    setTaskDescription("");
    setCategory(TaskCategory.Work);
    setHours(initialTime);
    setMinutes(initialTime);
  }

  function submitTask() {
    const dateString = moment(date).format("LL");
    store.addTodo({
      id: uuid(),
      date: dateString,
      taskDescription,
      duration: {
        estimated: {
          hours,
          minutes,
        },
        real: 0,
      },
      category: category,
      emotionalState: null,
      isDone: false,
    });
    clearForm();
  }

  function selectCategoryValue(value: any) {
    setCategory(value as TaskCategory);
  }

  return (
    <Container>
      <Title>Add your task</Title>
      <TaskFormRowMContainer>
        <TaskFormLongColumnContainer>
          <Text>Task</Text>
          <Input
            placeholder="Insert your task"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </TaskFormLongColumnContainer>
        <TaskFormShortColumnContainer>
          <Text>Duration (hh:mm)</Text>
          <RowContainer>
            <TimeInput
              placeholder="00"
              type="number"
              value={hours}
              onChange={(e) => setHours(+e.target.value)}
            />
            <TimeIconImage src={TimeIcon} alt="timeIcon" />
            <TimeInput
              placeholder="00"
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(+e.target.value)}
            />
          </RowContainer>
        </TaskFormShortColumnContainer>
      </TaskFormRowMContainer>
      <TaskFormRowContainer>
        <TaskFormLongColumnContainer>
          <Text>Category</Text>
          <Select
            values={Object.values(TaskCategory)}
            value={category}
            setValue={selectCategoryValue}
            renderValue={null}
            disabled={false}
            variant="taskForm"
          />
        </TaskFormLongColumnContainer>
        <TaskFormShortColumnContainer>
          <LargeButton
            onClick={submitTask}
            disabled={
              taskDescription === "" ||
              (minutes === initialTime && hours === initialTime)
            }
          >
            Add
          </LargeButton>
        </TaskFormShortColumnContainer>
      </TaskFormRowContainer>
    </Container>
  );
}

export default TaskForm;
