import { MoveButton, SmallText, TaskLineContainer, Text, ButtonsContainer, ActionIcon, BadgesContainer, } from "./UIKit.styled";
import CloseIcon from "../images/CloseIcon.svg";
import EditIcon from "../images/EditIcon.svg";

const TaskLine = () => {
    return (
        <TaskLineContainer>
            <MoveButton />
            <Text>Study English</Text>
            <BadgesContainer>
                <SmallText>Work</SmallText>
                <SmallText>1 h 35 min</SmallText>
                <ButtonsContainer>
                    <ActionIcon src={EditIcon} alt="edit" />
                    <ActionIcon src={CloseIcon} alt="close" />
                </ButtonsContainer>
            </BadgesContainer>
        </TaskLineContainer>
    );
};

export default TaskLine;