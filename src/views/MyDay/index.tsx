import { MyDayColumnContainer, MyDayContainer, MyDayPageTitle, MyDayRowContainer, MyDayTitle } from "./MyDay.styled"
import TasksIcon from "../../images/Tasks_icon"
import { Container } from "../../components/UIKit.styled"
import TaskList from "../../components/TaskList"
import TaskCompletionChart from "../../components/TaskCompletionChart"
import EmotionalStateChart from "../../components/EmotionalStateChart"



function MyDay() {
    return <MyDayContainer>
        <MyDayPageTitle>
            <TasksIcon selected={false}/>
            <MyDayTitle>Tasks for Today</MyDayTitle>
        </MyDayPageTitle>
        <MyDayRowContainer>
            <Container>
                <TaskList />
            </Container>
            <MyDayColumnContainer>
                <TaskCompletionChart />
                <EmotionalStateChart />
            </MyDayColumnContainer>
        </MyDayRowContainer>
    </MyDayContainer>
}

export default MyDay