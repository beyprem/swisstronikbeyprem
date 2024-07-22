require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Import dotenv

const PRIVATE_KEY = process.env.PRIVATE_KEY; // Ambil private key dari .env

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x${PRIVATE_KEY}`], // Tambahkan '0x' di depan private key
    },
  },
};