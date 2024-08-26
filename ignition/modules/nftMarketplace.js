const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('NFTMarketplace', (m) => {
  const nftMarketplace = m.contract('NFTMarketplace');

  m.call(nftMarketplace);

  console.log('Market deployed to:', nftMarketplace.address);

  return { nftMarketplace };
});
