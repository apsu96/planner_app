import moment from "moment";
import { PlanningColumn, TasksContainer } from "./PlanningTaskList.styled";
import { Container, SmallText, Title } from "./UIKit.styled";
import { observer } from "mobx-react-lite";
import store from "../Store";
import uuid from "react-uuid";
import TaskLine from "./TaskLine";

const PlanningTaskList = observer(({ date }: { date: Date }) => {
  return (
    <Container>
      <PlanningColumn>
        <Title>{moment(date).format("LL")}</Title>
        <SmallText>{moment().format("dddd")}</SmallText>
      </PlanningColumn>
      <TasksContainer>
        {store.toDoList.map((toDo, index) =>
          toDo.date === moment(date).format("LL") ? (
            <TaskLine key={uuid()} toDo={toDo} index={index} />
          ) : null,
        )}
      </TasksContainer>
    </Container>
  );
});

export default PlanningTaskList;
