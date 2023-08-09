import { useEffect, useState } from "react";
import store, { Emotions, ToDoType } from "../Store";
import DoughnutChart from "./DoughnutChart";
import { ChartBox, Title } from "./UIKit.styled";
import moment from "moment";
import { observer } from "mobx-react-lite";

const EmotionalStateChart = observer(
  ({ sortedTasks }: { sortedTasks?: ToDoType[] }) => {
    const [data, setData] = useState<number[]>([]);
    const [labels, setLabels] = useState<string[]>([
      Emotions.Excellent,
      Emotions.Normal,
      Emotions.Bad,
    ]);

    useEffect(() => {
      let excellentTime = 0;
      let normalTime = 0;
      let badTime = 0;
      let sortedList: ToDoType[];
      if (sortedTasks) {
        sortedList = sortedTasks;
      } else {
        sortedList = store.toDoList.filter(
          (toDo) => toDo.date === moment().format("LL"),
        );
      }
      sortedList.map((toDo) => {
        if (toDo.emotionalState === Emotions.Excellent) {
          excellentTime += toDo.duration.real;
        } else if (toDo.emotionalState === Emotions.Normal) {
          normalTime += toDo.duration.real;
        } else if (toDo.emotionalState === Emotions.Bad) {
          badTime += toDo.duration.real;
        }
      });
      setData([excellentTime, normalTime, badTime]);
      const total = excellentTime + normalTime + badTime;
      const excellentPercent = Math.round((excellentTime * 100) / total);
      const normalPercent = Math.round((normalTime * 100) / total);
      const badPercent = 100 - excellentPercent - normalPercent;
      if (excellentPercent || normalPercent || badPercent) {
        setLabels([
          Emotions.Excellent + " " + excellentPercent + "%",
          Emotions.Normal + " " + normalPercent + "%",
          Emotions.Bad + " " + badPercent + "%",
        ]);
      }
    }, [store, store.toDoList, sortedTasks]);

    return (
      <>
        <Title>Emotional State Tracker</Title>
        <ChartBox>
          <DoughnutChart labels={labels} data={data} />
        </ChartBox>
      </>
    );
  },
);

export default EmotionalStateChart;
