import React from 'react'

import {
  Chart as ChartJS,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
  RadialLinearScale
} from "chart.js";

import { Radar} from "react-chartjs-2";

// Register required parts of Chart.js
ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

const SkillsRadarChart = ({ className }) => {

     const data = {
    labels: ["Vocabulary", "Grammar", "Listening", "Speaking", "Writing"],
    datasets: [
      {
        label: "skill level",
        data: [45, 65, 40, 60, 55],
        borderColor: "rgba(0, 240, 255, 1)",
        backgroundColor: "rgba(0, 238, 255, .1)",
        pointBackgroundColor: "rgba(0, 238, 255, 1)",
        tension: 0,
        fill: true
      },
      {
        label: "Next year's goal",
        data: [65, 70, 77, 73, 80],
        borderColor: "rgba(255, 0, 247, 1)",
        backgroundColor: "rgba(255, 0, 247, .2)",
        pointBackgroundColor: "rgba(255, 0, 247, 1)",
        tension: 0,
        fill: true
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r:
        { angleLines: { color: 'rgba(255, 255, 255, 0.3)' },
          grid: { color: 'rgba(255, 255, 255, 0.2)' },
          pointLabels: { color: '#EEE' },
          ticks: { stepSize: 5 },
          min: 0,
          max: 100
        }
    },
    plugins: {
      legend: { position: "top",labels: { color: "#EEE" } },
    },
  };

  return (
    <div className={className}><Radar className='rounded-2xl max-w-[768px] h-[384px]' data={data} options={options} /></div>
  )
}

export default SkillsRadarChart