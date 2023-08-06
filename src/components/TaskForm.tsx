import { Container, Input, Text, LargeButton, Title } from "./UIKit.styled";
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
import { timeRange } from "../utils";
import { SelectOption } from "@mui/base";

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

  function selectHours(value: any) {
    setHours(+value);
  }

  function selectMinutes(value: any) {
    setMinutes(+value);
  }

  function renderHoursValue(
    option: SelectOption<any> | null | SelectOption<any>[],
  ) {
    if (option == null && hours === 0) {
      return "00";
    } else if (hours < 10) {
      return "0" + hours;
    } else {
      return hours;
    }
  }

  function renderMinutesValue(
    option: SelectOption<any> | null | SelectOption<any>[],
  ) {
    if (option == null && minutes === 0) {
      return "00";
    } else if (minutes < 10) {
      return "0" + minutes;
    } else {
      return minutes;
    }
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
            <Select
              values={timeRange(0, 23)}
              value={hours}
              setValue={selectHours}
              renderValue={renderHoursValue}
              disabled={false}
              variant="taskForm"
              hideIcon={true}
              timeType={true}
            />
            <TimeIconImage src={TimeIcon} alt="timeIcon" />
            <Select
              values={timeRange(0, 59)}
              value={minutes}
              setValue={selectMinutes}
              renderValue={renderMinutesValue}
              disabled={false}
              variant="taskForm"
              hideIcon={true}
              timeType={true}
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
