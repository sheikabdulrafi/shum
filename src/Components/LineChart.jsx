import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title
);

function getLastSevenDays() {
    const dates = [];
    const today = new Date();
  
    // Function to format date as DD.MM.YYYY
    function formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    }
  
    // Loop to get the last 6 days including today
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(formatDate(date));
    }
  
    return dates;
  }

const LineChart = () => {
  const options = {};
  const data = {
    labels: getLastSevenDays(),
    datasets: [
      {
        label: "Temperature",
        data: [28, 38, 45, 55, 60, 58, 52],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
