import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded',
          padding: 20,
          borderWidth: 0,
        }
    }
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', ''];

export const data = {
  labels,
  datasets: [
    {
      label: 'Scope 1',
      data: [17, 16, 4, 11, 8, 9,10],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Scope 2',
      data: [14, 2, 10, 6, 12, 16,8],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Scope 3',
      data: [2, 21, 13, 3, 24, 7,12],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};



export default function StackedChart() {
  return (
    <div style={{height:"400px", width:"800px",position:"relative", marginBottom:"1%", padding:"1%"}}>
        <Bar options={options} data={data}/>;
    </div>
  )
}
