import { PlanningColumn, TasksContainer } from "./PlanningTaskList.styled";
import TaskLine from "./TaskLine";
import { Container, SmallText, Title } from "./UIKit.styled";

function PlanningTaskList() {
  return (
    <Container>
      <PlanningColumn>
        <Title>July 1</Title>
        <SmallText>Friday</SmallText>
      </PlanningColumn>
      <TasksContainer>
        <TaskLine />
        <TaskLine />
        <TaskLine />
        <TaskLine />
        <TaskLine />
        <TaskLine />
      </TasksContainer>
    </Container>
  );
}

export default PlanningTaskList;
