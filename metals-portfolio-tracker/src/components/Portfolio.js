import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [prices, setPrices] = useState({});
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchPortfolio();
    fetchPrices();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get('/api/portfolio');
      setPortfolio(response.data);
    } catch (error) {
      console.error('Error fetching portfolio', error);
    }
  };

  const fetchPrices = async () => {
    try {
      const response = await axios.get('/api/portfolio/prices');
      setPrices(response.data);
      const chartData = {
        labels: Object.keys(response.data),
        datasets: [
          {
            label: 'Metal Prices',
            data: Object.values(response.data),
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
          },
        ],
      };
      setChartData(chartData);
    } catch (error) {
      console.error('Error fetching prices', error);
    }
  };

  return (
    <div>
      <h2>Portfolio</h2>
      <ul>
        {portfolio.map((item, index) => (
          <li key={index}>
            {item.metal}: {item.quantity} oz - Current Value: ${prices[item.metal] * item.quantity}
          </li>
        ))}
      </ul>
      <h2>Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Portfolio;
