import React, { useState } from 'react';
import { Line, Bar, Pie, Radar, Doughnut, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, BarElement, ArcElement, CategoryScale, LinearScale, PointElement, RadarController, ScatterController, RadialLinearScale } from 'chart.js';
import { useTheme } from '../context/ThemeContext'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  RadarController,
  ScatterController,
  RadialLinearScale
);

// Mock Data
export const mockData = {
  success: true,
  timestamp: 1644470400,
  base: "USD",
  rates: {
    gold: 1850.50,
    silver: 25.30,
    platinum: 1050.00,
    palladium: 2300.00,
    copper: 4.50,
    aluminum: 1.20,
    zinc: 2.80,
    nickel: 8.50,
  },
  historical: [
    { date: '2024-07-20', rates: { gold: 1540.00, silver: 24.50, platinum: 1030.00, palladium: 2250.00, copper: 4.40, aluminum: 1.15, zinc: 2.70, nickel: 8.30 } },
    { date: '2024-07-21', rates: { gold: 1850.00, silver: 22.00, platinum: 1040.00, palladium: 2270.00, copper: 4.45, aluminum: 1.18, zinc: 2.75, nickel: 8.40 } },
    { date: '2024-07-22', rates: { gold: 1960.00, silver: 29.50, platinum: 1050.00, palladium: 2300.00, copper: 4.50, aluminum: 1.20, zinc: 2.80, nickel: 8.50 } },
    { date: '2024-07-23', rates: { gold: 1870.00, silver: 34.00, platinum: 1060.00, palladium: 2320.00, copper: 4.55, aluminum: 1.22, zinc: 2.85, nickel: 8.60 } },
    { date: '2024-07-24', rates: { gold: 2880.00, silver: 47.50, platinum: 1070.00, palladium: 2350.00, copper: 4.60, aluminum: 1.25, zinc: 2.90, nickel: 8.70 } },
    { date: '2024-07-25', rates: { gold: 3890.00, silver: 32.00, platinum: 1080.00, palladium: 2370.00, copper: 4.65, aluminum: 1.28, zinc: 2.95, nickel: 8.80 } },
    { date: '2024-07-26', rates: { gold: 4900.00, silver: 38.50, platinum: 1190.00, palladium: 2400.00, copper: 4.70, aluminum: 1.30, zinc: 3.00, nickel: 8.90 } }
  ]
};

export const portfolioData = [
  { metal: 'gold', quantity: 10 },
  { metal: 'silver', quantity: 50 },
  { metal: 'platinum', quantity: 5 },
  { metal: 'palladium', quantity: 2 },
  { metal: 'copper', quantity: 100 },
  { metal: 'aluminum', quantity: 200 },
  { metal: 'zinc', quantity: 150 },
  { metal: 'nickel', quantity: 80 },
];

const Portfolio = () => {
  const [chartType, setChartType] = useState('line');
  const { theme } = useTheme();
  const { historical = [], rates = {} } = mockData; // Default empty array and object to prevent undefined errors

  // Prepare chart data
  const labels = historical.map(data => data.date);
  const datasets = {
    gold: { label: 'Gold', data: historical.map(data => data.rates.gold), borderColor: '#FFD700', backgroundColor: 'rgba(255, 215, 0, 0.2)' },
    silver: { label: 'Silver', data: historical.map(data => data.rates.silver), borderColor: '#C0C0C0', backgroundColor: 'rgba(192, 192, 192, 0.2)' },
    platinum: { label: 'Platinum', data: historical.map(data => data.rates.platinum), borderColor: '#E5E4E2', backgroundColor: 'rgba(229, 228, 226, 0.2)' },
    palladium: { label: 'Palladium', data: historical.map(data => data.rates.palladium), borderColor: '#E1BEE7', backgroundColor: 'rgba(225, 190, 231, 0.2)' },
  };

  const chartData = {
    labels,
    datasets: Object.values(datasets).map(dataset => ({
      ...dataset,
      fill: false,
      borderWidth: 2,
    })),
  };

  const radarData = {
    labels: Object.keys(rates),
    datasets: [{
      label: 'Metal Prices',
      data: Object.values(rates),
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1
    }]
  };

  const doughnutData = {
    labels: Object.keys(rates),
    datasets: [{
      data: Object.values(rates),
      backgroundColor: ['#FFD700', '#C0C0C0', '#E5E4E2', '#E1BEE7', '#FF6347', '#98FB98', '#4682B4', '#FF4500'],
    }]
  };

  const scatterData = {
    datasets: Object.values(datasets).map(dataset => ({
      ...dataset,
      type: 'scatter',
      data: historical.map(data => ({ x: new Date(data.date).getTime(), y: data.rates[dataset.label.toLowerCase()] })),
    }))
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw} USD`;
          }
        }
      }
    },
  };

  const handleChartChange = (type) => {
    setChartType(type);
  };

  return (
    <div className={`h-[100vh] md:h-[100vh] sm:h-[100%] pt-6 mx-auto p-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-4xl font-bold mb-6 text-center">Portfolio Overview</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Current Portfolio</h2>
          <ul className="list-disc pl-5 space-y-2">
            {portfolioData.map((item, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{item.metal.charAt(0).toUpperCase() + item.metal.slice(1)}</span>
                <span>{item.quantity} oz - ${rates[item.metal] * item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Price History</h2>
          <div className="relative">
            <div className="absolute top-0 right-0 flex gap-2 p-2 bg-opacity-75">
              <button onClick={() => handleChartChange('line')} className={`p-2 rounded-full ${chartType === 'line' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                <i className="fas fa-chart-line"></i>
              </button>
              <button onClick={() => handleChartChange('bar')} className={`p-2 rounded-full ${chartType === 'bar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              <i className="fas fa-chart-bar"></i>
              </button>
              <button onClick={() => handleChartChange('pie')} className={`p-2 rounded-full ${chartType === 'pie' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                <i className="fas fa-chart-pie"></i>
              </button>
              <button onClick={() => handleChartChange('radar')} className={`p-2 rounded-full ${chartType === 'radar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                <i className="fas fa-chart-radar"></i>
              </button>
              <button onClick={() => handleChartChange('doughnut')} className={`p-2 rounded-full ${chartType === 'doughnut' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                <i className="fas fa-chart-doughnut"></i>
              </button>
              <button onClick={() => handleChartChange('scatter')} className={`p-2 rounded-full ${chartType === 'scatter' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                <i className="fas fa-chart-scatter"></i>
              </button>
            </div>
            <div className="chart-container mt-10">
              {chartType === 'line' && <Line data={chartData} options={chartOptions} />}
              {chartType === 'bar' && <Bar data={chartData} options={chartOptions} />}
              {chartType === 'pie' && <Pie data={doughnutData} options={chartOptions} />}
              {chartType === 'radar' && <Radar data={radarData} options={chartOptions} />}
              {chartType === 'doughnut' && <Doughnut data={doughnutData} options={chartOptions} />}
              {chartType === 'scatter' && <Scatter data={scatterData} options={chartOptions} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
