import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const data = {
  labels: ["Red", "Orange", "Blue", "green"],
  datasets: [
    {
      label: "Popularity of Colours",
      data: [55, 23, 96, 80],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(54, 162, 2, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
};
