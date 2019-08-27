var TimeLockedWalletFactory = artifacts.require("TimeLockedWalletFactory");
var PeterToken = artifacts.require("PeterToken");

module.exports = function(deployer) {
  deployer.deploy(TimeLockedWalletFactory);
  deployer.deploy(PeterToken);
};
