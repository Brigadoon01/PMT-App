import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { useTheme } from '../context/ThemeContext'; // Adjust path as needed

// Mock data
const mockPortfolio = [
  { metal: 'Gold', quantity: 15 },
  { metal: 'Silver', quantity: 100 },
  { metal: 'Platinum', quantity: 8 },
  { metal: 'Palladium', quantity: 12 },
  { metal: 'Rhodium', quantity: 3 },
];

const mockPrices = {
  Gold: 1950,
  Silver: 25,
  Platinum: 1100,
  Palladium: 2300,
  Rhodium: 11000,
};

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#d0ed57', '#a4de6c'];

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [prices, setPrices] = useState({});
  const [chartData, setChartData] = useState([]);
  const [activeTab, setActiveTab] = useState('LineChart');
  const { theme, themeStyles } = useTheme(); // Use the theme context

  useEffect(() => {
    // Simulate fetching data
    setPortfolio(mockPortfolio);
    setPrices(mockPrices);

    const data = mockPortfolio.map(item => ({
      name: item.metal,
      value: prices[item.metal] * item.quantity,
      quantity: item.quantity,
      price: prices[item.metal]
    }));
    setChartData(data);
  }, [prices]);

  return (
    <div className={`${themeStyles.background} ${themeStyles.text} ${themeStyles.border} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
      <ul className="divide-y divide-gray-200 mb-6">
        {portfolio.map((item, index) => (
          <li key={index} className="py-3 flex justify-between items-center">
            <span className="font-medium">{item.metal}</span>
            <span>
              {item.quantity} oz
              <span className="block text-sm italic">
                - Current Value: ${prices[item.metal] ? (prices[item.metal] * item.quantity).toFixed(2) : 'Loading...'}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <div className="tabs flex justify-around mb-4">
        <button
          onClick={() => setActiveTab('LineChart')}
          className={`px-4 py-2 ${activeTab === 'LineChart' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
        >
          Line Chart
        </button>
        <button
          onClick={() => setActiveTab('BarChart')}
          className={`px-4 py-2 ${activeTab === 'BarChart' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
        >
          Bar Chart
        </button>
        <button
          onClick={() => setActiveTab('PieChart')}
          className={`px-4 py-2 ${activeTab === 'PieChart' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-md`}
        >
          Pie Chart
        </button>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:pr-4">
          <ResponsiveContainer width="100%" height={300}>
            {activeTab === 'LineChart' && (
              <LineChart data={chartData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
                <Tooltip />
                <Legend />
              </LineChart>
            )}
            {activeTab === 'BarChart' && (
              <BarChart data={chartData}>
                <Bar dataKey="value" fill="#82ca9d" />
                <Tooltip />
                <Legend />
              </BarChart>
            )}
            {activeTab === 'PieChart' && (
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Details</h2>
          <ul className="divide-y divide-gray-200">
            {portfolio.map((item, index) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <span className="font-medium">{item.metal}</span>
                <span>
                  {item.quantity} oz
                  <span className="block text-sm italic">
                    - Current Value: ${prices[item.metal] ? (prices[item.metal] * item.quantity).toFixed(2) : 'Loading...'}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
