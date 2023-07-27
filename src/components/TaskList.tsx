import styled from "styled-components";
import { Container, Title } from "./UIKit.styled";

const TaskListContainer = styled(Container)`
    height: 100%;
`

const TaskList = () => {
    return (
        <TaskListContainer>
            <Title>July 1</Title>
        </TaskListContainer>
    );
};

export default TaskList;