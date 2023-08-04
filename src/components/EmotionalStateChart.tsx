import { useEffect, useState } from "react";
import store, { Emotions } from "../Store";
import DoughnutChart from "./DoughnutChart";
import { ChartBox, Title } from "./UIKit.styled";
import moment from "moment";
import { observer } from "mobx-react-lite";

const EmotionalStateChart = observer(() => {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    let excellentTime = 0;
    let normalTime = 0;
    let badTime = 0;
    const sortedToDo = store.toDoList.filter(
      (toDo) => toDo.date === moment().format("LL"),
    );
    sortedToDo.map((toDo) => {
      if (toDo.emotionalState === Emotions.Excellent) {
        excellentTime += toDo.duration.real;
      } else if (toDo.emotionalState === Emotions.Normal) {
        normalTime += toDo.duration.real;
      } else if (toDo.emotionalState === Emotions.Bad) {
        badTime += toDo.duration.real;
      }
    });
    setData([excellentTime, normalTime, badTime]);
  }, [store, store.toDoList]);

  return (
    <>
      <Title>Emotional State Tracker</Title>
      <ChartBox>
        <DoughnutChart
          labels={[Emotions.Excellent, Emotions.Normal, Emotions.Bad]}
          data={data}
        />
      </ChartBox>
    </>
  );
});

export default EmotionalStateChart;
