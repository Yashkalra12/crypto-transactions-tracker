const express = require('express');
const mongoose = require('mongoose');
const transactionsRoutes = require('./src/routes/transactionsRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  

app.use(express.json());
app.use('/api', transactionsRoutes);


app.get('/', (req, res) => {
    res.send(`
      <h1>Crypto Transaction Tracker API</h1>
    `);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
