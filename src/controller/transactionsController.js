const Transaction = require('../model/transactionModel');
const { getTransactions } = require('../services/etherscanService');

const fetchTransactions = async (req, res) => {
  try {
    const { address } = req.params;
    const transactions = await getTransactions(address);

    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ error: 'No transactions found from Etherscan' });
    }

    
    const existingTransaction = await Transaction.findOne({ address });

    if (existingTransaction) {
      existingTransaction.transactions = transactions;
      await existingTransaction.save();
    } else {
      const newTransaction = new Transaction({ address, transactions });
      await newTransaction.save();
    }

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchTransactions };
