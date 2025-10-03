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
  ArcElement,
} from "chart.js";

import { Line, Doughnut } from "react-chartjs-2";

// Register required parts of Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function CategoryDoughnutChart({className}) {
  const data = {
    labels: ["verbs", "nouns", "adjectives and adverbs", "phrases", "idioms", "others"],
    datasets: [
      {
        data: [300, 50, 100, 40, 120, 80],
        backgroundColor: [
          "#00F0FF",
          "#FF00F7",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#fabe25",
        ],
        borderColor: "rgba(0,0,0,0)"
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {legend:{ position: "bottom", lables:{color: "#ddd"} }}}

  return <div className={className}><Doughnut className='p-6 rounded-2xl max-w-[768px] height-[384px]' data={data} options={options} /></div>;
}
