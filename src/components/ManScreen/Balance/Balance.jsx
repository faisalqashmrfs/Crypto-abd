import "./Balance.css"
import { Line } from 'react-chartjs-2';


const Balance = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'My Dataset',
            data: [65, 59, 80, 81, 56, 55],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
      
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
    return (
        <div>
             <Line data={data} options={options} />

        </div>
    )
}

export default Balance