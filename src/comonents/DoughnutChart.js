import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Scope 1', 'Scope 2', 'Scope 3'],
  datasets: [
    {
      label: '# of Votes',
      data: [32, 23, 45],
      backgroundColor: [
        'rgba(94, 92, 182, 1)',
        'rgba(255, 147, 87, 1)',
        'rgba(59, 169, 116, 1)',
      ],
      borderColor: [
        'rgba(94, 92, 182, 1)',
        'rgba(255, 147, 87, 1)',
        'rgba(59, 169, 116, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const slicethickness = {
    id: "slicethickness",
    beforeDraw(chart, plugin){
        chart.getDatasetMeta(0).data[0].innerRadius = 100;
        chart.getDatasetMeta(0).data[0].outerRadius = 110;
        chart.getDatasetMeta(0).data[1].innerRadius = 98;
        chart.getDatasetMeta(0).data[1].outerRadius = 112;
        chart.getDatasetMeta(0).data[2].innerRadius = 96;
        chart.getDatasetMeta(0).data[2].outerRadius = 114;
    }
}

const textlabel = {
    id: "textlabel",
    beforeDraw(chart, plugin){
        const {ctx, data} = chart;
        const xcor = chart.getDatasetMeta(0).data[0].x;
        const ycor = chart.getDatasetMeta(0).data[0].y;
        ctx.save();
        ctx.font = "900 30px Satoshi";
        ctx.fillStyle = 'rgba(42, 42, 47, 1)';
        ctx.textAlign = "center";
        ctx.textBaseLine = "middle";  
        ctx.fillText("283,324", xcor, ycor-10);
        ctx.font = "500 16px Satoshi";
        ctx.fillStyle = 'rgba(98, 98, 102, 1)';
        ctx.fillText("Mt CO2e", xcor, ycor+25);
    }
}

const plugins = [slicethickness, textlabel]

const options = {
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
}


export default function DoughnutChart() {

    return( 
        <div style={{height:"350px", width:"350px",position:"relative", marginBottom:"1%", padding:"1%"}}>
            <Doughnut data={data} options={options} plugins={plugins}/>
        </div>
  )
}