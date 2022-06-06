// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory('Transactions');
  const transactionContract = await transactionFactory.deploy();

  await transactionContract.deployed();
  console.log('Deployed @ ' + transactionContract.address);
}

  ; (async () => {
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  })();