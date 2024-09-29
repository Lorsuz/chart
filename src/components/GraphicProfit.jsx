import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import styled from 'styled-components';
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GraphicProfit = ({ data }) => {
  const labels = data.map((_, index) => `Mês ${index + 1}`);
  const expenses = data.map(d => d.expense);
  const income = data.map(d => d.income);
  const profits = data.map((d, index) => income[index] - expenses[index]);
  const losses = profits.map(lucro => lucro < 0 ? lucro : null);

  const dataLines = {
    labels,
    datasets: [
      {
        label: 'Gastos',
        data: expenses,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Ganhos',
        data: income,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Lucros',
        data: profits,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Prejuízos',
        data: losses,
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
        borderWidth: 2,
        fill: false,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <StyledComponent>
      <Line data={dataLines} options={options} />
    </StyledComponent>
  );
};
const StyledComponent = styled.div`
  padding: 2rem;
`;

export default GraphicProfit;
