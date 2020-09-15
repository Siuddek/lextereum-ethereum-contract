const SellAgreementNotary = artifacts.require("SellAgreementNotary.sol");

module.exports = function(deployer) {
  deployer.deploy(SellAgreementNotary);
};