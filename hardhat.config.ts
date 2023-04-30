import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "./tasks/block-number";
import "hardhat-gas-reporter";
import "solidity-coverage";

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const SEP_RPC_URL = process.env.SEP_RPC_URL;
const COINMARKETCAP_API = process.env.COINMARKETCAP_API;

module.exports = {
  solidity: "0.8.18",

  networks: {
    sepolia: {
      chainId: 11155111,
      url: SEP_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },

  gasReporter: {
    enabled: true,
    // outputFile : "gas-reporter.txt",
    noColour: true,
    coinmarketcap: COINMARKETCAP_API,
    currency: "USD",
  },
};
