const mongoose = require('mongoose');

const ethPriceSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const EthPrice = mongoose.model('EthPrice', ethPriceSchema);

module.exports = EthPrice;
