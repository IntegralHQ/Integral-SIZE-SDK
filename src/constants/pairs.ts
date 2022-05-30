import { Currency } from '../model'
import { WETH_CVX, WETH_SUSHI, WETH_USDC } from './addresses'
import { ChainId } from './chains'
import {
  Weth,
  Usdc,
  Cvx,
  Sushi,
  KovanWeth,
  KovanUSDCoin,
  KovanCvx,
  KovanSushi,
  GanacheWeth,
  GanacheUSDCoin,
} from './currencies'

export interface PairsItem {
  address: string
  tokens: Currency[]
}

export const MAINNET_PAIRS: PairsItem[] = [
  { address: WETH_USDC[ChainId.Mainnet], tokens: [Weth, Usdc] },
  { address: WETH_CVX[ChainId.Mainnet], tokens: [Weth, Cvx] },
  { address: WETH_SUSHI[ChainId.Mainnet], tokens: [Weth, Sushi] },
]

export const KOVAN_PAIRS: PairsItem[] = [
  { address: WETH_USDC[ChainId.Kovan], tokens: [KovanWeth, KovanUSDCoin] },
  { address: WETH_CVX[ChainId.Kovan], tokens: [KovanWeth, KovanCvx] },
  { address: WETH_SUSHI[ChainId.Kovan], tokens: [KovanWeth, KovanSushi] },
]

export const GANACHE_PAIRS: PairsItem[] = [
  { address: WETH_USDC[ChainId.Ganache], tokens: [GanacheWeth, GanacheUSDCoin] },
]

export const PAIRS: PairsItem[] = [
  // mainnet
  ...MAINNET_PAIRS,
  // kovan
  ...KOVAN_PAIRS,
  // ganache
  ...GANACHE_PAIRS,
]

export const PAIRS_BY_CHAIN = {
  [ChainId.Mainnet]: MAINNET_PAIRS,
  [ChainId.Kovan]: KOVAN_PAIRS,
  [ChainId.Ganache]: GANACHE_PAIRS,
}
