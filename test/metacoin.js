const MetaCoin = artifacts.require("MetaCoin");

contract('Metacoin tests', async (accounts) => {

  it("should put coins in an account", async () => {
     let instance = await MetaCoin.deployed();
     let balance = await instance.getBalance.call(0x0);
     assert.equal(balance.valueOf(), 10000);
  })

  it("should not send coins", async () => {
    let instance = await MetaCoin.deployed();
    await instance.sendCoin(accounts[1], 10001, {from: accounts[0]});
    let balance = await instance.getBalance.call(accounts[0]);
    assert.equal(balance.valueOf(), 10000);
  });
  
  it("should print some coins", async () => {
    let instance = await MetaCoin.deployed();
    await instance.printMeCoins(10000, {from: accounts[0]});
    let balance = await instance.getBalance.call(accounts[0]);
    assert.equal(balance.valueOf(), 20000);
  });
  
  it("should send coins", async () => {
    let instance = await MetaCoin.deployed();
    await instance.sendCoin(accounts[1], 15000, {from: accounts[0]});
    let balance = await instance.getBalance.call(accounts[0]);
    assert.equal(balance.valueOf(), 5000);
  });
});