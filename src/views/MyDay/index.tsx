import { MyDayColumnContainer, MyDayRowContainer } from "./MyDay.styled"
import { Container } from "../../components/UIKit.styled"
import TaskList from "../../components/TaskList"
import TaskCompletionChart from "../../components/TaskCompletionChart"
import EmotionalStateChart from "../../components/EmotionalStateChart"

function MyDay() {
    return <MyDayRowContainer>
        <Container>
            <TaskList />
        </Container>
        <MyDayColumnContainer>
            <TaskCompletionChart />
            <EmotionalStateChart />
        </MyDayColumnContainer>
    </MyDayRowContainer>
}

export default MyDay