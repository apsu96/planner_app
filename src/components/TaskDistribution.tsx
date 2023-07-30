import { Container, Title, ChartBox } from "./UIKit.styled";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import store, { TaskCategory } from "../Store";
import moment from "moment";
import { observer } from "mobx-react-lite";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskDistribution = observer(({ date }: { date: Date }) => {
  const sortedTasks = store.toDoList.filter(
    (toDo) => toDo.date === moment(date).format("LL"),
  );

  let workTime = 0;
  let leisureTime = 0;

  sortedTasks.map((task) => {
    if (task.category === TaskCategory.Work) {
      workTime += task.duration.estimated;
    } else {
      leisureTime += task.duration.estimated;
    }
  });

  const data = {
    labels: [TaskCategory.Work, TaskCategory.Leisure],
    datasets: [
      {
        data: [workTime, leisureTime],
        backgroundColor: ["rgba(170, 132, 161, 1)", "rgba(249, 249, 249, 1)"],
      },
    ],
  };
  return (
    <Container>
      <Title>Allocation of time between work and rest</Title>
      <ChartBox>
        <Doughnut data={data} />
      </ChartBox>
    </Container>
  );
});

export default TaskDistribution;
