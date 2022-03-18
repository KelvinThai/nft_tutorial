require("@nomiclabs/hardhat-ethers");
const privateKey = "a6cbd4a2b2456874320862c08cac4b23d27d61da54bb17e497baf14b56f36c45";
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}