const express = require('express');
const axios = require('axios');
const router = express.Router();
const { metalsApiKey } = require('../config/config');
const authMiddleware = require('../middleware/auth');

router.get('/prices', authMiddleware, async (req, res) => {
  try {
    const response = await axios.get('https://api.metals.dev/v1/latest', {
      headers: {
        'Authorization': `Bearer ${metalsApiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching metals prices:', error);
    res.status(500).send('Server error');
  }
});

router.get('/analytics', authMiddleware, async (req, res) => {
  // Placeholder data; will replace with actual portfolio analytics logic
  const portfolioAnalytics = {
    totalValue: 10000,
    totalGainLoss: 500,
    totalGainLossPercentage: 5,
    metalAnalytics: {
      gold: { totalValue: 6000, totalCost: 5500 },
      silver: { totalValue: 3000, totalCost: 2800 },
      platinum: { totalValue: 1000, totalCost: 900 },
    },
  };

  res.json(portfolioAnalytics);
});

module.exports = router;
