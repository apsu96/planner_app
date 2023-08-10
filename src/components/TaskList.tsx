import { SmallText, Title } from "./UIKit.styled";
import moment from "moment";
import store from "../Store";
import uuid from "react-uuid";
import { TaskListBox, TaskListContainer } from "./TaskList.styled";
import Task from "./Task";
import NoTask from "./NoTask";

const TaskList = () => {
  const sortedList = store.toDoList.filter(
    (toDo) => toDo.date === moment().format("LL"),
  );
  return (
    <TaskListContainer>
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
    </TaskListContainer>
  );
};

export default TaskList;
