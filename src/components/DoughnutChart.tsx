import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import type { Plugin } from "chart.js";

const plugin: Plugin<"doughnut"> = {
  id: "empty",
  afterDraw(chart: ChartJS) {
    const { datasets } = chart.data;
    let totalSum = 0;
    datasets.map((dataset) => {
      dataset.data.map((val) => {
        totalSum += Number(val);
      });
    });

    if (totalSum == 0) {
      const {
        chartArea: { left, top, right, bottom },
        ctx,
      } = chart;
      const centerX = (left + right) / 2;
      const centerY = (top + bottom) / 2;
      const r = Math.min(right - left, bottom - top) / 2;

      ctx.beginPath();
      ctx.fillStyle = "#f9f9f9";
      ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = "#979797";
      ctx.font = "14px 'OpenSans,sans-serif'";
      ctx.fillText("Empty...", chart.width / 5, chart.height / 2);
    }
  },
};

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({
  labels,
  data,
}: {
  labels: string[];
  data: number[];
}) => {
  const [chartData, setChartData] = useState<
    ChartData<"doughnut", number[], unknown>
  >({
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: ["rgba(170, 132, 161, 1)", "rgba(249, 249, 249, 1)"],
      },
    ],
  });
  const chartRef = useRef(null);

  const options: ChartOptions<"doughnut"> = {
    cutout: 60,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 37,
          color: "#53514D",
          font: {
            size: 14,
            family: "OpenSans, sans-serif",
            weight: "500",
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: { formattedValue: any }) {
            if (!context.formattedValue) {
              return;
            }
            let hourVal = "";
            let minutes = Number(context.formattedValue);
            const hours = Math.floor(minutes / 60);
            if (hours > 0) {
              hourVal = hours + "h ";
            }
            minutes -= hours * 60;
            const minVal = minutes + "min";
            return hourVal + minVal;
          },
        },
      },
    },
  };
  function getGradient(chart: {
    ctx: any;
    chartArea: { top: any; bottom: any; left: any; right: any };
  }) {
    const {
      ctx,
      chartArea: { left, right },
    } = chart;
    const firstGradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    firstGradientSegment.addColorStop(1, "#AA84A1");
    firstGradientSegment.addColorStop(0.2, "#EEDDEA");
    const secondGradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    secondGradientSegment.addColorStop(1, "#979797");
    secondGradientSegment.addColorStop(0.2, "#E5E5E5");
    if (labels.length === 3) {
      return [firstGradientSegment, secondGradientSegment, "#F9F9F9"];
    } else {
      return [firstGradientSegment, "#F9F9F9"];
    }
  }

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }
    const chartColor = getGradient(chart);
    setChartData({
      labels: labels,
      datasets: [
        {
          data,
          backgroundColor: chartColor,
        },
      ],
    });
  }, [chartRef.current, data, labels]);

  return (
    <Doughnut
      ref={chartRef}
      options={options}
      data={chartData}
      plugins={[plugin]}
    />
  );
};

export default DoughnutChart;
