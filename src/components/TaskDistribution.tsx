import { Container, Title, ChartBox } from "./UIKit.styled";
import store, { TaskCategory, ToDoType } from "../Store";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";
import StatisticsCard from "./StatisticsCard";
import { statisticsInfoCards } from "../const";

const TaskDistribution = observer(
  ({
    date,
    sortedTasks,
    category,
    setCategory,
    isMobile,
  }: {
    date: Date;
    sortedTasks?: ToDoType[];
    category?: TaskCategory;
    setCategory?: React.Dispatch<React.SetStateAction<TaskCategory>>;
    isMobile?: boolean;
  }) => {
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([
      TaskCategory.Work,
      TaskCategory.Leisure,
    ]);

    useEffect(() => {
      let calcWorkTime = 0;
      let calcLeisureTime = 0;
      let sortedList: ToDoType[];
      if (sortedTasks) {
        sortedTasks.map((task) => {
          if (task.category === TaskCategory.Work) {
            calcWorkTime += task.duration.real;
          } else {
            calcLeisureTime += task.duration.real;
          }
        });
      } else {
        sortedList = store.toDoList.filter(
          (toDo) => toDo.date === moment(date).format("LL"),
        );
        sortedList.map((task) => {
          if (task.category === TaskCategory.Work) {
            calcWorkTime +=
              task.duration.estimated.hours * 60 +
              task.duration.estimated.minutes;
          } else {
            calcLeisureTime +=
              task.duration.estimated.hours * 60 +
              task.duration.estimated.minutes;
          }
        });
      }
      setData([calcWorkTime, calcLeisureTime]);
      if (setCategory) {
        setCategory(() =>
          calcWorkTime > calcLeisureTime
            ? TaskCategory.Work
            : TaskCategory.Leisure,
        );
      }
      const total = calcWorkTime + calcLeisureTime;
      const workPercent = Math.round((calcWorkTime * 100) / total);
      const leisurePercent = 100 - workPercent;
      setLabels([
        TaskCategory.Work + " " + workPercent + "%",
        TaskCategory.Leisure + " " + leisurePercent + "%",
      ]);
    }, [store.toDoList, store.toDoList.length, date, sortedTasks]);

    return (
      <Container>
        <Title>Allocation of time between work and rest</Title>
        <ChartBox>
          <DoughnutChart labels={labels} data={data} />
        </ChartBox>
        {isMobile && category && (
          <StatisticsCard text={statisticsInfoCards.second} value={category} />
        )}
      </Container>
    );
  },
);

export default TaskDistribution;
