const express = require('express');
const router = express.Router();
const { fetchTransactions } = require('../controller/transactionsController');
const Transaction = require('../model/transactionModel'); 
const EthPrice = require('../model/ethPriceModel'); 

router.get('/transactions/:address', fetchTransactions);

router.get('/expenses/:address', async (req, res) => {
    try {
      const address = req.params.address.toLowerCase(); 
  
      const transactionsData = await Transaction.findOne({ address });
  
      if (!transactionsData || !transactionsData.transactions || transactionsData.transactions.length === 0) {
        return res.status(404).json({ error: 'No transactions found for this address' });
      }
  
      const transactions = transactionsData.transactions;
  
      
      let totalExpenses = 0;
      transactions.forEach((tx) => {
        const expense = (parseInt(tx.gasUsed) * parseInt(tx.gasPrice)) / 1e18; 
        totalExpenses += expense;
      });
  
      e
      const latestPrice = await EthPrice.findOne().sort({ timestamp: -1 });
  
      if (!latestPrice) {
        return res.status(404).json({ error: 'Ethereum price data not available' });
      }
  
      
      res.json({
        address,
        totalExpenses,
        currentEthPrice: latestPrice.price,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
