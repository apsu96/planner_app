import { Container, Title, ChartBox } from "./UIKit.styled";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import store, { TaskCategory } from "../Store";
import moment from "moment";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import type { ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskDistribution = observer(({ date }: { date: Date }) => {
  const [workTime, setWorkTime] = useState(0);
  const [leisureTime, setLeisureTime] = useState(0);

  const data = {
    labels: [TaskCategory.Work, TaskCategory.Leisure],
    datasets: [
      {
        data: [workTime, leisureTime],
        backgroundColor: ["rgba(170, 132, 161, 1)", "rgba(249, 249, 249, 1)"],
      },
    ],
  };
  const [chartData, setChartData] =
    useState<ChartData<"doughnut", number[], unknown>>(data);

  const chartRef = useRef(null);

  const options: ChartOptions<"doughnut"> = {
    cutout: 70,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 37,
        },
      },
    },
  };

  useEffect(() => {
    let calcWorkTime = 0;
    let calsLeisureTime = 0;
    const sortedTasks = store.toDoList.filter(
      (toDo) => toDo.date === moment(date).format("LL"),
    );
    sortedTasks.map((task) => {
      if (task.category === TaskCategory.Work) {
        calcWorkTime += task.duration.estimated;
      } else {
        calsLeisureTime += task.duration.estimated;
      }
    });
    setWorkTime(calcWorkTime);
    setLeisureTime(calsLeisureTime);
  }, [store, date]);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    const newData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        data: [workTime, leisureTime],
        backgroundColor: getGradient(chart),
      })),
    };
    setChartData(newData);
  }, [chartRef.current, leisureTime, workTime]);

  function getGradient(chart: {
    ctx: any;
    chartArea: { top: any; bottom: any; left: any; right: any };
  }) {
    const {
      ctx,
      chartArea: { left, right },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    gradientSegment.addColorStop(1, "#AA84A1");
    gradientSegment.addColorStop(0.2, "#EEDDEA");
    return [gradientSegment, "#F9F9F9"];
  }

  return (
    <Container>
      <Title>Allocation of time between work and rest</Title>
      <ChartBox>
        <Doughnut ref={chartRef} data={chartData} options={options} />
      </ChartBox>
    </Container>
  );
});

export default TaskDistribution;
