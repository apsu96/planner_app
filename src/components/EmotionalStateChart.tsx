import { useEffect, useState } from "react";
import store, { Emotions, ToDoType } from "../Store";
import DoughnutChart from "./DoughnutChart";
import { ChartBox, Container, Title } from "./UIKit.styled";
import moment from "moment";
import { observer } from "mobx-react-lite";
import StatisticsCard from "./StatisticsCard";
import { statisticsInfoCards } from "../const";
import { compareEmotions } from "../utils";

const EmotionalStateChart = observer(
  ({
    sortedTasks,
    emotions,
    setEmotion,
    isMobile,
  }: {
    sortedTasks?: ToDoType[];
    emotions?: string | undefined;
    setEmotion?: React.Dispatch<React.SetStateAction<string | undefined>>;
    isMobile?: boolean;
  }) => {
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
      const data = [excellentTime, normalTime, badTime];
      setData(data);
      if (setEmotion) {
        const result = compareEmotions(data);
        setEmotion(result);
      }
      const total = excellentTime + normalTime + badTime;
      const excellentPercent =
        total !== 0 ? Math.round((excellentTime * 100) / total) : 0;
      const normalPercent =
        total !== 0 ? Math.round((normalTime * 100) / total) : 0;
      const badPercent =
        total !== 0 ? 100 - excellentPercent - normalPercent : 0;

      setLabels([
        Emotions.Excellent + " " + excellentPercent + "%",
        Emotions.Normal + " " + normalPercent + "%",
        Emotions.Bad + " " + badPercent + "%",
      ]);
    }, [store, store.toDoList, sortedTasks, setEmotion]);

    return (
      <Container>
        <Title>Emotional State Tracker</Title>
        <ChartBox>
          <DoughnutChart labels={labels} data={data} />
        </ChartBox>
        {isMobile && emotions && (
          <StatisticsCard text={statisticsInfoCards.emotion} value={emotions} />
        )}
      </Container>
    );
  },
);

export default EmotionalStateChart;
