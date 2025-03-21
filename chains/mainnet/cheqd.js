module.exports = {
  chainID: 'cheqd-mainnet-1',
  lcd: 'https://api.cheqd.net',
  gasAdjustment: 1.75,
  gasPrices: { ncheq: 50 },
  prefix: 'cheqd',
  coinType: '118',
  baseAsset: 'ncheq',
  name: 'cheqd',
  icon: 'https://station-assets.terra.money/img/chains/Cheqd.svg',
  ibc: {
    fromTerra: 'channel-89',
    toTerra: 'channel-9',
  },
  explorer: {
    address: 'https://explorer.cheqd.io/accounts/{}',
    tx: 'https://explorer.cheqd.io/transactions/{}',
    validator: 'https://explorer.cheqd.io/validators/{}',
    block: 'https://explorer.cheqd.io/blocks/{}',
  },
  tokens: [
    {
      token: 'ncheq',
      symbol: 'CHEQ',
      name: 'Cheq',
      icon: 'https://station-assets.terra.money/img/coins/Cheqd.svg',
      decimals: 9,
    },
  ],
}
