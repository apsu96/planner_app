import { MyDayColumnContainer, MyDayContainer, MyDayRowContainer } from "./MyDay.styled"
import { Container } from "../components/UIKit.styled"
import TaskList from "../components/TaskList"
import TaskCompletionChart from "../components/TaskCompletionChart"
import EmotionalStateChart from "../components/EmotionalStateChart"
import styled from "styled-components"

const ChartContainer = styled(Container)`
        height: 50%;
    `;

function MyDay() {
    return <MyDayContainer>
        <MyDayRowContainer>
            <TaskList />
        </MyDayRowContainer>
        <MyDayRowContainer>
            <MyDayColumnContainer>
                <ChartContainer>
                    <TaskCompletionChart />
                </ChartContainer>
                <ChartContainer>
                    <EmotionalStateChart />
                </ChartContainer>
            </MyDayColumnContainer>
        </MyDayRowContainer>
    </MyDayContainer>
}

export default MyDay