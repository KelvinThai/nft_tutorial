const hre = require("hardhat");

async function main() {
  const QuanIT = await hre.ethers.getContractFactory("QuanIT");
  const quanIT = await QuanIT.deploy("QUANIT", "QIT");

  await quanIT.deployed();
  console.log("Successfully deployed smart contract to: ", quanIT.address);

  // await quanIT.mint("https://ipfs.io/ipfs/QmYGJpUV7xLJrYAJQyKxw6LXzCWU3LoP3QLfyJA55Pa9NL");
  // console.log("NFT successfully minted");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
