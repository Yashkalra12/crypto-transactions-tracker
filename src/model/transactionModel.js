const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  address: { type: String, required: true },
  transactions: { type: Array, required: true },
});

module.exports = mongoose.model('Transaction', transactionSchema);
