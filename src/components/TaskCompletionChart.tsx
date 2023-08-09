import { observer } from "mobx-react-lite";
import DoughnutChart from "./DoughnutChart";
import { ChartBox, Title } from "./UIKit.styled";
import React, { useEffect, useState } from "react";
import store, { ToDoType } from "../Store";
import moment from "moment";
import StatisticsCard from "./StatisticsCard";
import { statisticsInfoCards } from "../const";

const TaskCompletionChart = observer(
  ({
    sortedTasks,
    doneTasks,
    setDoneTasks,
    isMobile,
  }: {
    sortedTasks?: ToDoType[];
    doneTasks?: string;
    setDoneTasks?: React.Dispatch<React.SetStateAction<string>>;
    isMobile?: boolean;
  }) => {
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>(["Done", "Pending"]);

    useEffect(() => {
      let done = 0;
      let toBeDone = 0;
      let totalEstimatedTime = 0;
      let sortedList: ToDoType[];
      if (sortedTasks) {
        sortedList = sortedTasks;
      } else {
        sortedList = store.toDoList.filter(
          (toDo) => toDo.date === moment().format("LL"),
        );
      }
      sortedList.map((toDo) => {
        totalEstimatedTime +=
          toDo.duration.estimated.hours * 60 + toDo.duration.estimated.minutes;
        if (!toDo.isDone) {
          toBeDone +=
            toDo.duration.estimated.hours * 60 +
            toDo.duration.estimated.minutes;
        }
      });
      done = totalEstimatedTime - toBeDone;
      setData([done, toBeDone]);
      const total = done + toBeDone;
      const workPercent = Math.round((done * 100) / total);
      if (setDoneTasks) {
        setDoneTasks(workPercent + "%");
      }
      const toBeDonePercent = 100 - workPercent;
      setLabels([
        "Done " + workPercent + "%",
        "Pending " + toBeDonePercent + "%",
      ]);
    }, [store, store.toDoList, sortedTasks]);
    return (
      <>
        <Title>Task Progress Tracker</Title>
        <ChartBox>
          <DoughnutChart labels={labels} data={data} />
        </ChartBox>
        {isMobile && doneTasks && (
          <StatisticsCard text={statisticsInfoCards.first} value={doneTasks} />
        )}
      </>
    );
  },
);

export default TaskCompletionChart;
