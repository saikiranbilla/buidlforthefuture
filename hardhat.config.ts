require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
const SHARDEUM_RPC = process.env.SHARDEUM_RPC;
const privateKey = process.env.PRIVATE_KEY;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.17",
  },
  networks: {
    shardeum: {
      url: SHARDEUM_RPC,
      accounts: [privateKey],
      chainId: 8081,
    }
  },
};

export default config;
