module.exports = {
  chainID: 'stride-1',
  lcd: 'https://stride-fleet.main.stridenet.co/api',
  gasAdjustment: 1.75,
  gasPrices: { ustrd: 0 },
  prefix: 'stride',
  coinType: '118',
  baseAsset: 'ustrd',
  name: 'Stride',
  icon: 'https://station-assets.terra.money/img/chains/Stride.png',
  ibc: {
    fromTerra: 'channel-46',
    toTerra: 'channel-52',
  },
  explorer: {
    address: 'https://www.mintscan.io/stride/account/{}',
    tx: 'https://www.mintscan.io/stride/txs/{}',
    validator: 'https://www.mintscan.io/stride/validators/{}',
    block: 'https://www.mintscan.io/stride/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ustrd',
      symbol: 'STRD',
      name: 'Stride',
      icon: 'https://station-assets.terra.money/img/coins/Stride.png',
      decimals: 6,
    },
    {
      token: 'stuluna',
      symbol: 'stLUNA',
      name: 'Stride LUNA',
      icon: 'https://station-assets.terra.money/img/coins/stLUNA.svg',
      decimals: 6,
      lsd: 'uluna',
    },
  ],
}
