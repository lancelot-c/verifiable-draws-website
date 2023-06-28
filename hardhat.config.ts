/** @type import('hardhat/config').HardhatUserConfig */
// require("dotenv").config();
// import "@nomiclabs/hardhat-ethers";
// import "@nomiclabs/hardhat-waffle";
// import "hardhat-contract-sizer";
// import "hardhat-gas-reporter";


module.exports = {
    defaultNetwork: process.env.HARDHAT_DEFAULT_NETWORK,
    networks: {
        testnet: {
            url      : process.env.TESTNET_API_URL,
            accounts : [`${process.env.WALLET_PRIVATE_KEY}`]
        },
        mainnet: {
            url      : process.env.MAINNET_API_URL,
            accounts : [`${process.env.WALLET_PRIVATE_KEY}`]
        }
    },
    solidity: {
        version: "0.8.19",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
      }  
    },
    contractSizer: {
        runOnCompile: false,
        strict: false,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        coinmarketcap: process.env.COIN_MARKETCAP_API_KEY || "",
        token: "ETH"
    }
}
