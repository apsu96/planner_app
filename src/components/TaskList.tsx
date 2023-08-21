import { SmallText, Title, Container } from "./UIKit.styled";
import moment from "moment";
import store from "../Store";
import uuid from "react-uuid";
import { TaskListBox } from "./TaskList.styled";
import Task from "./Task";
import NoTask from "./NoTask";

const TaskList = () => {
  const sortedList = store.toDoList.filter(
    (toDo) => toDo.date === moment().format("LL"),
  );
  return (
    <Container>
      <Title>{moment().format("LL")}</Title>
      <SmallText>{moment().format("dddd")}</SmallText>
      <TaskListBox>
        {sortedList.length === 0 && <NoTask />}
        {store.toDoList.map((toDo, index) =>
          toDo.date === moment().format("LL") ? (
            <Task toDo={toDo} key={uuid()} index={index} />
          ) : null,
        )}
      </TaskListBox>
    </Container>
  );
};

export default TaskList;
