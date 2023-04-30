import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.getContractFactory("simpleContract");
  const deployedContract = await contract.deploy();
  const recipt = await deployedContract.deployTransaction.wait(1);

  console.log(`Contract is deployed to ${deployedContract.address}`);

  let number = await deployedContract.retrieve();
  console.log(`The initial value is ${number}`);

  const trans_respose = await deployedContract.incremnt();
  await trans_respose.wait(1);
  number = await deployedContract.retrieve();
  console.log(`The initial value is ${number}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
