import { Container } from "./Planning.styled";
import TaskCompletionChart from "../components/TaskCompletionChart";
import TaskDistribution from "../components/TaskDistribution";
import EmotionalStateChart from "../components/EmotionalStateChart";
import StatisticsInfo from "../components/StatisticsInfo";
import { Container as UIContainer } from "../components/UIKit.styled";
import { useEffect, useState } from "react";
import store, { TimePeriod, ToDoType } from "../Store";
import { getTargetDay } from "../const";
import moment from "moment";
import { useMediaQuery } from "@mui/material";

function Statistics() {
  const [timePeriod, setTimePeriod] = useState(TimePeriod.LastWeek);
  const [sortedTasks, setSortedTasks] = useState<ToDoType[]>([]);
  const [doneTasks, setDoneTasks] = useState<string>("");
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [emotions, setEmotions] = useState<string | undefined>(undefined);
  const isMobile = useMediaQuery("(max-width:820px)");

  useEffect(() => {
    const targetDay = getTargetDay(timePeriod);
    const list = store.toDoList.filter((toDo) =>
      moment(toDo.date, '"LL"').isAfter(targetDay),
    );
    setSortedTasks(list);
  }, [timePeriod]);

  return (
    <Container>
      <StatisticsInfo
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
        doneTasks={doneTasks}
        category={category}
        emotions={emotions}
        isMobile={isMobile}
      />
      <UIContainer>
        <TaskCompletionChart
          sortedTasks={sortedTasks}
          doneTasks={doneTasks}
          setDoneTasks={setDoneTasks}
          isMobile={isMobile}
        />
      </UIContainer>
      <TaskDistribution
        date={new Date()}
        sortedTasks={sortedTasks}
        category={category}
        setCategory={setCategory}
        isMobile={isMobile}
      />
      <UIContainer>
        <EmotionalStateChart
          sortedTasks={sortedTasks}
          emotions={emotions}
          setEmotion={setEmotions}
          isMobile={isMobile}
        />
      </UIContainer>
    </Container>
  );
}

export default Statistics;
