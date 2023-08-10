import { MyDayColumnContainer, MyDayContainer } from "./MyDay.styled";
import { Container } from "../components/UIKit.styled";
import TaskList from "../components/TaskList";
import TaskCompletionChart from "../components/TaskCompletionChart";
import EmotionalStateChart from "../components/EmotionalStateChart";
import styled from "styled-components";

const ChartContainer = styled(Container)`
  height: 50%;
`;

function MyDay() {
  return (
    <MyDayContainer>
      <TaskList />
      <MyDayColumnContainer>
        <ChartContainer>
          <TaskCompletionChart />
        </ChartContainer>
        <ChartContainer>
          <EmotionalStateChart />
        </ChartContainer>
      </MyDayColumnContainer>
    </MyDayContainer>
  );
}

export default MyDay;
