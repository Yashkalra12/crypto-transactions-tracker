const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const transactionsRoutes = require('./src/routes/transactionsRoutes');
const fetchAndSaveEthPrice = require('./src/controller/ethPriceController');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

  

app.use(express.json());
app.use('/api', transactionsRoutes);


setInterval(fetchAndSaveEthPrice, 600000);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./src/views', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
