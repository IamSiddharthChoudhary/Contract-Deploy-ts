import { ethers } from "hardhat";
import { assert } from "chai";
import { SimpleContract, SimpleContract__factory } from "../typechain-types";

describe("simpleContract", function () {
  let simpleContract: SimpleContract__factory;
  let deployedContract: SimpleContract;
  beforeEach(async function () {
    simpleContract = (await ethers.getContractFactory(
      "simpleContract"
    )) as SimpleContract__factory;
    deployedContract = await simpleContract.deploy();
  });

  it("The initial value is zero", async function () {
    const number = await deployedContract.retrieve();
    const expectedNumber = "0";
    assert.equal(expectedNumber, number.toString());
  });

  it("The increment function working well", async function () {
    const transactionResponse = await deployedContract.incremnt();
    await transactionResponse.wait(1);
    const expectedNumber = "1";
    const number = await deployedContract.retrieve();
    assert.equal(expectedNumber, number.toString());
  });
});
