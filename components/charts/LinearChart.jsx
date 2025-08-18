// Example: components/MyChart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

import { Line } from "react-chartjs-2";

// Register required parts of Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LinearChart({className}) {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Users Learned Words with Methodology",
        data: [10, 25, 40, 55, 70],
        borderColor: "rgba(0, 240, 255, 1)",
        backgroundColor: "rgba(0, 240, 255, 0.2)",
      },
      {
        label: "Users Learned Words without methodology",
        data: [10, 20, 27, 33, 40],
        borderColor: "rgba(255, 0, 247, 1)",
        backgroundColor: "rgba(255, 0, 247, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
         scales: {
          x: { grid: { color: '#2C2C2C' }, ticks: { color: '#EEE' } },
          y: { grid: { color: '#2C2C2C' }, ticks: { color: '#EEE' }, beginAtZero: true }
        },
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Learning Curve" },
      plugins:{legend: {lables: { color: "#fff" }}},
    },
  };

  return <div className={className}><Line className='p-6 card rounded-2xl max-w-[768px] height-[384px]' data={data} options={options} /></div>;
}
