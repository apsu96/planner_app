import { MyDayColumnContainer, MyDayContainer } from "./MyDay.styled";
import TaskList from "../components/TaskList";
import TaskCompletionChart from "../components/TaskCompletionChart";
import EmotionalStateChart from "../components/EmotionalStateChart";

function MyDay() {
  return (
    <MyDayContainer>
      <TaskList />
      <MyDayColumnContainer>
        <TaskCompletionChart />
        <EmotionalStateChart />
      </MyDayColumnContainer>
    </MyDayContainer>
  );
}

export default MyDay;
