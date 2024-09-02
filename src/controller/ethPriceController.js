const axios = require('axios');
const EthPrice = require('../model/ethPriceModel');

const fetchAndSaveEthPrice = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr'
    );

    const ethPrice = response.data.ethereum.inr;

    const newPrice = new EthPrice({ price: ethPrice });
    await newPrice.save();

    console.log(`Ethereum price saved: ₹${ethPrice}`);
  } catch (error) {
    console.error('Error fetching Ethereum price:', error);
  }
};

module.exports = fetchAndSaveEthPrice;
