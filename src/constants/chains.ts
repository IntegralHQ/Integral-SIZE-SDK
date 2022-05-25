export enum ChainId {
  Mainnet = 1,
  Kovan = 42,
  Ganache = 1337,
}

export const CHAIN_ID_NAMES = {
  [ChainId.Mainnet]: 'Mainnet',
  [ChainId.Kovan]: 'Kovan',
  [ChainId.Ganache]: 'Ganache',
}
