import { Container, Title, ChartBox } from "./UIKit.styled";
import store, { TaskCategory, ToDoType } from "../Store";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import DoughnutChart from "./DoughnutChart";

const TaskDistribution = observer(
  ({ date, sortedTasks }: { date: Date; sortedTasks?: ToDoType[] }) => {
    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
      let calcWorkTime = 0;
      let calcLeisureTime = 0;
      let sortedList: ToDoType[];
      if (sortedTasks) {
        sortedList = sortedTasks;
      } else {
        sortedList = store.toDoList.filter(
          (toDo) => toDo.date === moment(date).format("LL"),
        );
      }
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
      setData([calcWorkTime, calcLeisureTime]);
    }, [store.toDoList, store.toDoList.length, date, sortedTasks]);

    return (
      <Container>
        <Title>Allocation of time between work and rest</Title>
        <ChartBox>
          <DoughnutChart
            labels={[TaskCategory.Work, TaskCategory.Leisure]}
            data={data}
          />
        </ChartBox>
      </Container>
    );
  },
);

export default TaskDistribution;
