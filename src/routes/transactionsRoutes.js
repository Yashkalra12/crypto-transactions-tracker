const express = require('express');
const router = express.Router();
const { fetchTransactions } = require('../controller/transactionsController')

router.get('/transactions/:address', fetchTransactions);

module.exports = router;
