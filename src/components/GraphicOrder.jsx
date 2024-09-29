// src/pages/Dashboard.jsx
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styled from "styled-components";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraphicOrder = ({ order, data }) => {
  const itemsCount = order.reduce((acc, item) => {
    acc[item.name] = (acc[item.name] || 0) + 1;
    return acc;
  }, {});

  const totalPrices = order.reduce((acc, item) => acc + item.price, 0);

  const chartData = {
    labels: Object.keys(itemsCount),
    datasets: [
      {
        label: "Quantidade de Itens",
        data: Object.values(itemsCount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      }
    },
  };

  return (
    <StyledComponent>
      <Bar data={chartData} options={options} />
      <h2>Total Gasto: R${totalPrices}</h2>
    </StyledComponent>
  );
};

const StyledComponent = styled.div`
  padding: 2rem;
  h2 {
    color: #019192;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 1.5rem;
  }
`;

export default GraphicOrder;
