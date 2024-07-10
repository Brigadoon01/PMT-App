const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const portfolioRoutes = require('./routes/portfolio');
const { mongoUri } = require('./config/config');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
