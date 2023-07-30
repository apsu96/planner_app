import {
  Container,
  Input,
  Text,
  LargeButton,
  CustomSelect,
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
import store, { Emotions, TaskCategory } from "../Store";
import uuid from "react-uuid";
import moment from "moment";

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
    const estimatedTime = hours * 60 + minutes;
    const dateString = moment(date).format("LL");
    store.addTodo({
      id: uuid(),
      date: dateString,
      taskDescription,
      duration: {
        estimated: estimatedTime,
        real: 0,
      },
      category: category,
      emotionalState: Emotions.Normal,
    });
    clearForm();
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
          <CustomSelect
            placeholder="Select"
            value={category}
            onChange={(e) => setCategory(e.target.value as TaskCategory)}
          >
            <option value={TaskCategory.Work}>Work</option>
            <option value={TaskCategory.Leisure}>Leisure</option>
          </CustomSelect>
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
