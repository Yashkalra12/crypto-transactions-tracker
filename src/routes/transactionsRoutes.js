// const express = require('express');
// const router = express.Router();
// const { fetchTransactions } = require('../controller/transactionsController')

// router.get('/transactions/:address', fetchTransactions);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { fetchTransactions } = require('../controller/transactionsController')

const Transaction = require('../model/transactionModel'); // Assuming you have a model for transactions
const EthPrice = require('../model/ethPriceModel'); // Ethereum price model

// GET API to calculate total expenses and current Ethereum price
router.get('/expenses/:address', async (req, res) => {
  try {
    const address = req.params.address;

    // Fetch transactions from the database for the given address
    const transactions = await Transaction.find({ from: address });

    // Calculate total expenses
    let totalExpenses = 0;
    transactions.forEach((tx) => {
      const expense = (parseInt(tx.gasUsed) * parseInt(tx.gasPrice)) / 1e18;
      totalExpenses += expense;
    });

    // Fetch the latest Ethereum price from the database
    const latestPrice = await EthPrice.findOne().sort({ timestamp: -1 }); // Get the most recent price

    if (!latestPrice) {
      return res.status(404).json({ error: 'Ethereum price data not available' });
    }

    // Send the response with total expenses and current Ethereum price
    res.json({
      address,
      totalExpenses,
      currentEthPrice: latestPrice.price,
    });
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/transactions/:address', fetchTransactions);

module.exports = router;
