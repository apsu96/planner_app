import { observer } from "mobx-react-lite";
import DoughnutChart from "./DoughnutChart";
import { ChartBox, Container, Title } from "./UIKit.styled";
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
    setDoneTasks?: React.Dispatch<React.SetStateAction<string | undefined>>;
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
      const workPercent =
        totalEstimatedTime !== 0
          ? Math.round((done * 100) / totalEstimatedTime)
          : 0;
      if (setDoneTasks) {
        setDoneTasks(workPercent ? workPercent + "%" : undefined);
      }
      const toBeDonePercent = totalEstimatedTime !== 0 ? 100 - workPercent : 0;
      setLabels([
        "Done " + workPercent + "%",
        "Pending " + toBeDonePercent + "%",
      ]);
    }, [store, store.toDoList, sortedTasks, setDoneTasks]);
    return (
      <Container>
        <Title>Task Progress Tracker</Title>
        <ChartBox>
          <DoughnutChart labels={labels} data={data} />
        </ChartBox>
        {isMobile && doneTasks && (
          <StatisticsCard
            text={statisticsInfoCards.performance.text}
            value={doneTasks}
          />
        )}
      </Container>
    );
  },
);

export default TaskCompletionChart;
