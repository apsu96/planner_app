import { SmallText, Title } from "./UIKit.styled";
import moment from "moment";
import store from "../Store";
import uuid from "react-uuid";
import { TaskListBox, TaskListContainer } from "./TaskList.styled";
import Task from "./Task";

const TaskList = () => {
  return (
    <TaskListContainer>
      <Title>{moment().format("LL")}</Title>
      <SmallText>{moment().format("dddd")}</SmallText>
      <TaskListBox>
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
