const { expect } = require("chai");

let calculator;
let owner;

beforeEach(async function () {
  // Get the ContractFactory and Signers here.
  const Calculator = await ethers.getContractFactory("Calculator");
  [owner] = await ethers.getSigners();

  // To deploy our contract, we just have to call Calculator.deploy() and await
  // for it to be deployed(), which happens onces its transaction has been
  // mined.
  calculator = await Calculator.deploy(owner.address);
  await calculator.deployed();
});

describe("Calculator deployement", function () {

  it("Should return the good owner address", async function () {
    expect(await calculator.owner()).to.equal(owner.address);
  });
});

describe("Calculator functions", function () {

  it("Should function add return the good result", async function () {
    expect(await calculator.add(10, 10)).to.equal(20);
  });

  it("Should function sub return the good result", async function () {
    expect(await calculator.sub(5, 6)).to.equal(-1);
  });

  it("Should function mul return the good result", async function () {
    expect(await calculator.mul(3, -6)).to.equal(-18);
  });

  it("Should function div return the good result", async function () {
    expect(await calculator.div(10, 2)).to.equal(5);
  });
  it("Should function div revert for 0 division", async function () {
    await expect(calculator.div(10, 0)).to.be.revertedWith('pureCalculator: Can not divide by 0');
  });

});
