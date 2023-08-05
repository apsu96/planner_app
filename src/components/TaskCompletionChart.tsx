import { observer } from "mobx-react-lite";
import DoughnutChart from "./DoughnutChart";
import { ChartBox, Title } from "./UIKit.styled";
import { useEffect, useState } from "react";
import store from "../Store";
import moment from "moment";

const TaskCompletionChart = observer(() => {
  const [data, setData] = useState<number[]>([]);
  useEffect(() => {
    let done = 0;
    let toBeDone = 0;
    let totalEstimatedTime = 0;
    const sortedList = store.toDoList.filter(
      (toDo) => toDo.date === moment().format("LL"),
    );
    sortedList.map((toDo) => {
      totalEstimatedTime +=
        toDo.duration.estimated.hours * 60 + toDo.duration.estimated.minutes;
      if (!toDo.isDone) {
        toBeDone +=
          toDo.duration.estimated.hours * 60 + toDo.duration.estimated.minutes;
      }
    });
    done = totalEstimatedTime - toBeDone;
    setData([done, toBeDone]);
  }, [store, store.toDoList]);
  return (
    <>
      <Title>Task Progress Tracker</Title>
      <ChartBox>
        <DoughnutChart labels={["Done", "To be done"]} data={data} />
      </ChartBox>
    </>
  );
});

export default TaskCompletionChart;
