import moment from "moment";
import { PlanningColumn, TasksContainer } from "./PlanningTaskList.styled";
import TaskLine from "./TaskLine";
import { Container, SmallText, Title } from "./UIKit.styled";

function PlanningTaskList({ date }: { date: Date }) {
  return (
    <Container>
      <PlanningColumn>
        <Title>{moment(date).format("LL")}</Title>
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
