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

import { Line, Doughnut } from "react-chartjs-2";

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

export default function CategoryDoughnutChart({className}) {
  const data = {
  };

  return <div className={className}><Doughnut className='p-6 card rounded-2xl max-w-[768px] height-[384px]' data={data} options={options} /></div>;
}
