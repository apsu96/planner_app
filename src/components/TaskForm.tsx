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

function TaskForm() {
  return (
    <Container>
      <Title>Add your task</Title>
      <TaskFormRowMContainer>
        <TaskFormLongColumnContainer>
          <Text>Task</Text>
          <Input placeholder="Insert your task" />
        </TaskFormLongColumnContainer>
        <TaskFormShortColumnContainer>
          <Text>Duration</Text>
          <RowContainer>
            <TimeInput placeholder="00" />
            <TimeIconImage src={TimeIcon} alt="timeIcon" />
            <TimeInput placeholder="00" />
          </RowContainer>
        </TaskFormShortColumnContainer>
      </TaskFormRowMContainer>
      <TaskFormRowContainer>
        <TaskFormLongColumnContainer>
          <Text>Category</Text>
          <CustomSelect placeholder="Select">
            <option>Work</option>
            <option>Leisure</option>
          </CustomSelect>
        </TaskFormLongColumnContainer>
        <TaskFormShortColumnContainer>
          <LargeButton>Add</LargeButton>
        </TaskFormShortColumnContainer>
      </TaskFormRowContainer>
    </Container>
  );
}

export default TaskForm;
