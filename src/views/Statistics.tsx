import { Container, PlanningRow } from "./Planning.styled";
import TaskCompletionChart from "../components/TaskCompletionChart";
import TaskDistribution from "../components/TaskDistribution";
import EmotionalStateChart from "../components/EmotionalStateChart";
import StatisticsInfo from "../components/StatisticsInfo";
import { Container as UIContainer } from "../components/UIKit.styled";
import { useEffect, useState } from "react";
import store, { TimePeriod, ToDoType } from "../Store";
import { getTargetDay } from "../const";
import moment from "moment";

function Statistics() {
  const [timePeriod, setTimePeriod] = useState(TimePeriod.LastWeek);
  const [sortedTasks, setSortedTasks] = useState<ToDoType[]>([]);

  useEffect(() => {
    const targetDay = getTargetDay(timePeriod);
    const list = store.toDoList.filter((toDo) =>
      moment(toDo.date, '"LL"').isAfter(targetDay),
    );
    setSortedTasks(list);
  }, [timePeriod]);

  return (
    <Container>
      <PlanningRow>
        <StatisticsInfo timePeriod={timePeriod} setTimePeriod={setTimePeriod} />
        <UIContainer>
          <TaskCompletionChart sortedTasks={sortedTasks} />
        </UIContainer>
      </PlanningRow>
      <PlanningRow>
        <TaskDistribution date={new Date()} sortedTasks={sortedTasks} />
        <UIContainer>
          <EmotionalStateChart sortedTasks={sortedTasks} />
        </UIContainer>
      </PlanningRow>
    </Container>
  );
}

export default Statistics;
