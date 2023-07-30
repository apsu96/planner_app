import {
  MoveButton,
  SmallText,
  TaskLineContainer,
  Text,
  ButtonsContainer,
  ActionIcon,
  BadgesContainer,
  CategoryContainer,
  TimeContainer,
} from "./UIKit.styled";
import CloseIcon from "../images/CloseIcon.svg";
import EditIcon from "../images/EditIcon.svg";
import { ToDoType } from "../Store";
import store from "../Store";

const TaskLine = ({ toDo }: { toDo: ToDoType }) => {
  const hours = Math.floor(toDo.duration.estimated / 60);
  const minutes = toDo.duration.estimated - hours * 60;
  return (
    <TaskLineContainer>
      <MoveButton />
      <Text>{toDo.taskDescription}</Text>
      <BadgesContainer>
        <CategoryContainer>
          <SmallText>{toDo.category}</SmallText>
        </CategoryContainer>
        <TimeContainer>
          <SmallText>
            {hours ? `${hours} h` : null} {minutes ? `${minutes} min` : null}
          </SmallText>
        </TimeContainer>
        <ButtonsContainer>
          <ActionIcon src={EditIcon} alt="edit" />
          <ActionIcon
            src={CloseIcon}
            alt="close"
            onClick={() => store.removeToDo(toDo.id)}
          />
        </ButtonsContainer>
      </BadgesContainer>
    </TaskLineContainer>
  );
};

export default TaskLine;
