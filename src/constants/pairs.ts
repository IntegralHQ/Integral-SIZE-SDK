import { Currency } from '../model'
import { WETH_DAI, WETH_LINK, WETH_USDC, WETH_USDT, WETH_WBTC, DAI_USDC, DAI_USDT, USDC_USDT } from './addresses'
import { ChainId } from './chains'
import {
  Wbtc,
  Usdc,
  Usdt,
  Dai,
  Weth,
  Link,
  KovanWeth,
  KovanWrappedBitcoin,
  KovanUSDCoin,
  KovanTetherUSD,
  KovanDai,
  KovanLink,
  GanacheWeth,
  GanacheWrappedBitcoin,
  GanacheUSDCoin,
  GanacheTetherUSD,
  GanacheDai,
  GanacheLink,
} from './currencies'

export interface PairsItem {
  address: string
  tokens: Currency[]
}

export const MAINNET_PAIRS: PairsItem[] = [
  { address: WETH_WBTC[ChainId.Mainnet], tokens: [Weth, Wbtc] },
  { address: WETH_USDC[ChainId.Mainnet], tokens: [Weth, Usdc] },
  { address: WETH_USDT[ChainId.Mainnet], tokens: [Weth, Usdt] },
  { address: WETH_DAI[ChainId.Mainnet], tokens: [Weth, Dai] },
  { address: WETH_LINK[ChainId.Mainnet], tokens: [Weth, Link] },
  { address: DAI_USDC[ChainId.Mainnet], tokens: [Dai, Usdc] },
  { address: DAI_USDT[ChainId.Mainnet], tokens: [Dai, Usdt] },
  { address: USDC_USDT[ChainId.Mainnet], tokens: [Usdc, Usdt] },
]

export const KOVAN_PAIRS: PairsItem[] = [
  { address: WETH_WBTC[ChainId.Kovan], tokens: [KovanWeth, KovanWrappedBitcoin] },
  { address: WETH_USDC[ChainId.Kovan], tokens: [KovanWeth, KovanUSDCoin] },
  { address: WETH_USDT[ChainId.Kovan], tokens: [KovanWeth, KovanTetherUSD] },
  { address: WETH_DAI[ChainId.Kovan], tokens: [KovanWeth, KovanDai] },
  { address: WETH_LINK[ChainId.Kovan], tokens: [KovanWeth, KovanLink] },
  { address: DAI_USDC[ChainId.Kovan], tokens: [KovanDai, KovanUSDCoin] },
  { address: DAI_USDT[ChainId.Kovan], tokens: [KovanDai, KovanTetherUSD] },
  { address: USDC_USDT[ChainId.Kovan], tokens: [KovanUSDCoin, KovanTetherUSD] },
]

export const GANACHE_PAIRS: PairsItem[] = [
  { address: WETH_WBTC[ChainId.Ganache], tokens: [GanacheWeth, GanacheWrappedBitcoin] },
  { address: WETH_USDC[ChainId.Ganache], tokens: [GanacheWeth, GanacheUSDCoin] },
  { address: WETH_USDT[ChainId.Ganache], tokens: [GanacheWeth, GanacheTetherUSD] },
  { address: WETH_DAI[ChainId.Ganache], tokens: [GanacheWeth, GanacheDai] },
  { address: WETH_LINK[ChainId.Ganache], tokens: [GanacheWeth, GanacheLink] },
  { address: DAI_USDC[ChainId.Ganache], tokens: [GanacheDai, GanacheUSDCoin] },
  { address: DAI_USDT[ChainId.Ganache], tokens: [GanacheDai, GanacheTetherUSD] },
  { address: USDC_USDT[ChainId.Ganache], tokens: [GanacheUSDCoin, GanacheTetherUSD] },
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
