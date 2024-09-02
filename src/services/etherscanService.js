const axios = require('axios');

const getTransactions = async (address) => {
  const apiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;
  const response = await axios.get(url);
  return response.data.result;
};

module.exports = { getTransactions };
