import { expect } from "chai";
import { ethers } from "hardhat";

describe("CollectiveCanvasSnapshot", function () {
  it("deploy", async function () {
    const Contract = await ethers.getContractFactory(
      "CollectiveCanvasSnapshot"
    );
    const contract = await Contract.deploy(
      "0x3a56AB63c7ef4f07fe353bEb132e0Fd5AD270Ca0"
    );
    await contract.deployed();
  });
});
