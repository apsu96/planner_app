import { MyDayContainer, MyDayPageTitle, MyDayTitle } from "./MyDay.styled"
import TasksIcon from "../../images/Tasks_icon"

function MyDay() {
    return <MyDayContainer>
        <MyDayPageTitle>
            <TasksIcon selected={false}/>
            <MyDayTitle>Tasks for the day</MyDayTitle>
        </MyDayPageTitle>
    </MyDayContainer>
}

export default MyDay