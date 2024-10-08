# Crypto Transaction Tracker

A server-side application built with Node.js and MongoDB to fetch and track cryptocurrency transactions for a user. The application uses the Etherscan API to retrieve transaction details and the CoinGecko API to fetch current Ethereum prices.

## Features

- **Fetch Transactions**: 
Retrieves and stores normal transactions of an Ethereum address using the Etherscan API.
- **Track Ethereum Prices**: 
Fetches and stores the latest Ethereum prices every 10 minutes using the CoinGecko API.
- **Calculate Expenses**:
 Calculates total expenses based on gas used and gas price for each transaction and fetches the current Ethereum price.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js to create APIs.
- **MongoDB**: NoSQL database to store transaction and price data.
- **Mongoose**: ODM library to interact with MongoDB.
- **Etherscan API**: To fetch Ethereum transactions.
- **CoinGecko API**: To fetch current Ethereum prices.
- **Axios**: Promise-based HTTP client for making API requests.


## API Endpoints

### 1. Fetch Transactions

- **Endpoint**: `/api/transactions/:address`
- **Method**: `GET`
- **Description**: Fetches and stores transactions of a given Ethereum address.
- **Example**: `GET /api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d`

### 2. Calculate Total Expenses and Fetch Current Ethereum Price

- **Endpoint**: `/api/expenses/:address`
- **Method**: `GET`
- **Description**: Calculates total expenses for all transactions of a given address and returns the current price of Ethereum.
- **Example**: `GET /api/expenses/0xce94e5621a5f7068253c42558c147480f38b5e0d`

## Environment Variables

Create a `.env` file in the root of your project and add the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
ETHERSCAN_API_KEY=your_etherscan_api_key
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_etherscan_api_key` with the Etherscan API key.


## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/crypto-transaction-tracker.git
   cd crypto-transaction-tracker
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file and add your configuration.

4. **Start the server**:

   ```bash
   npm start
   ```

5. **Access the landing page**: Open your browser and go to `http://localhost:3000`.


## Deployment

The Crypto Transaction Tracker application is deployed on Vercel, making it accessible and scalable. You can interact with the live version of the app at [Crypto Transaction Tracker](https://crypto-transaction-tracker-ecto0gl5u-yashkalra12s-projects.vercel.app/). The deployment leverages Vercel’s seamless integration with Node.js to provide a reliable and responsive server environment for fetching and displaying Ethereum transaction data and prices in real time.

## Example Usage

1. **Fetch Transactions**:

   ```bash
   http://localhost:3000/api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d
   ```

2. **Get Total Expenses and Ethereum Price**:

   ```bash
   http://localhost:3000/api/expenses/0xce94e5621a5f7068253c42558c147480f38b5e0d
   ```

## Future Enhancements

- Add a frontend to visualize the transaction data and Ethereum prices.
- Add more detailed analytics on transaction history.
- Enhance error handling and validation.

