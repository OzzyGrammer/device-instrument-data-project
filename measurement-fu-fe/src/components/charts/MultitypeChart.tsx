"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

type Props = {
  data: AllDeviceRow[];
};

const MultitypeChart = ({ data }: Props) => {
  const numericValues = data.map((row) => {
    const timestamp = row.timestamp;
    const numericDataSet = row.parameter.devicedataSet.find(
      (item) => item.type === "numeric",
    );
    const value = numericDataSet ? parseFloat(numericDataSet.value) : NaN;
    return { timestamp, value };
  });

  // Separate timestamps and numeric values
  const timestamps = numericValues.map((dataPoint) => dataPoint.timestamp);
  const numericData = numericValues.map((dataPoint) => dataPoint.value);

  // Prepare chart data
  const chartData = {
    labels: timestamps,
    datasets: [
      {
        type: "line" as const,
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: numericData,
      },
      {
        type: "bar" as const,
        label: "Dataset 2",
        backgroundColor: "rgb(75, 192, 192)",
        data: numericData,
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar" as const,
        label: "Dataset 3",
        backgroundColor: "rgb(53, 162, 235)",
        data: numericData,
      },
    ],
  };

  return <Chart type="bar" data={chartData} />;
};

export default MultitypeChart;
