import { Container, Title, ChartBox } from "./UIKit.styled";
import store, { TaskCategory, ToDoType } from "../Store";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";
import StatisticsCard from "./StatisticsCard";
import { statisticsInfoCards } from "../const";
import { compareTaskCategory } from "../utils";

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
    category?: string | undefined;
    setCategory?: React.Dispatch<React.SetStateAction<string | undefined>>;
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
      const data = [calcWorkTime, calcLeisureTime];
      setData(data);
      if (setCategory) {
        const result = compareTaskCategory(data);
        setCategory(result);
      }
      const total = calcWorkTime + calcLeisureTime;
      const workPercent = Math.round((calcWorkTime * 100) / total);
      const leisurePercent = 100 - workPercent;
      setLabels([
        TaskCategory.Work + " " + (workPercent || "0") + "%",
        TaskCategory.Leisure + " " + (leisurePercent || "0") + "%",
      ]);
    }, [store.toDoList, store.toDoList.length, date, sortedTasks, setCategory]);

    return (
      <Container>
        <Title>Allocation of time between work and rest</Title>
        <ChartBox>
          <DoughnutChart labels={labels} data={data} />
        </ChartBox>
        {isMobile && category && (
          <StatisticsCard
            text={
              category === "both"
                ? statisticsInfoCards.equalTaskCategory
                : statisticsInfoCards.taskCategory
            }
            value={category === "both" ? "" : category}
          />
        )}
      </Container>
    );
  },
);

export default TaskDistribution;
