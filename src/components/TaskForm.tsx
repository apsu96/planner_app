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
  TaskFormColumnContainer,
  TaskFormRowContainer,
  RowContainer,
  TimeIconImage,
} from "./TaskForm.styled";

function TaskForm() {
  return (
    <Container>
      <Title>Add your task</Title>
      <TaskFormRowContainer>
        <TaskFormColumnContainer>
          <Text>Task</Text>
          <Input placeholder="Insert your task" />
        </TaskFormColumnContainer>
        <TaskFormColumnContainer>
          <Text>Duration</Text>
          <RowContainer>
            <TimeInput placeholder="00" />
            <TimeIconImage src={TimeIcon} alt="timeIcon" />
            <TimeInput placeholder="00" />
          </RowContainer>
        </TaskFormColumnContainer>
      </TaskFormRowContainer>
      <Text>Category</Text>
      <TaskFormRowContainer>
        <CustomSelect placeholder="Select">
          <option>Work</option>
          <option>Leisure</option>
        </CustomSelect>
        <LargeButton>Add</LargeButton>
      </TaskFormRowContainer>
    </Container>
  );
}

export default TaskForm;
