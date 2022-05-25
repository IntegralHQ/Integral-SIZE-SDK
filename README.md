# integral-sdk

# SDK Quick Start

The Integral SDK is created to help developers to interact with Integral SIZE protocol. This SDK makes it convinient to instantiate an Integral `Pair` with on-chain data and calculate required data to perform a trade.

## Instalation

The easiest way to install the Integral SDK is to run `yarn add @integralhq/size-sdk` or `npm install @integralhq/size-sdk`.
To use the SDK in your project, use `import` or `require`, depending on your environment.

```
import { ChainId } from '@integralhq/size-sdk'
console.log(`Kovan chain id: ${ChainId.Kovan}`)
```

# Creating a Trade

The Integral SDK provides functions that allows you in an easy way to calculate and prepare data to safety interact with Integral SIZE. The SDK will not execute trades or send transactions on your behalf.

## Buy and Sell

Let's say you want to **sell** 1 WETH for USDC. The easies way to prepare data for such trade is to:

```
import { BigNumber } from "ethers"
import { ChainId, TwapDelay, CurrencyValue, getCurrency, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const receiver = '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c4365'
const usdc = getCurrency('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') // USDC address on Ethereum Mainnet
const weth = getCurrency('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on Ethereum Mainnet
const input = new CurrencyValue(weth, BigNumber.from('1000000000000000000')) // 1 WETH
const output = new CurrencyValue(usdc, BigNumber.from(''))
const slippageTolerance = 20 // 2%

const sellParameters = await TwapDelay.getSellCallParameters(
  provider,
  ChainId.Mainnet,
  receiver,
  input,
  output,
  slippageTolerance
)
```

Let's say you want to **buy** 1 WETH for USDC. The easies way to prepare data for such trade is to:

```
import { BigNumber } from "ethers"
import { ChainId, TwapDelay, CurrencyValue, getCurrency, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const receiver = '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c4365'
const usdc = getCurrency('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') // USDC address on Ethereum Mainnet
const weth = getCurrency('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on Ethereum Mainnet
const input = new CurrencyValue(usdc, BigNumber.from(''))
const output = new CurrencyValue(weth, BigNumber.from('1000000000000000000')) // 1 WETH
const slippageTolerance = 5 // 0.5%

const buyParameters = await TwapDelay.getBuyCallParameters(
  provider,
  ChainId.Mainnet,
  receiver,
  input,
  output,
  slippageTolerance
)
```

## Pair and Pair Address

The SDK provides an easy way to get a Pair and a Pair address.

To get a Pair address simply call `getPairAddress` function from TwapFactory. If the pair exists the function will return its address, otherwise `undefined`.

```
import { ChainId, TwapFactory, getCurrency, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const first = getCurrency('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') // USDC address on Ethereum Mainnet
const second = getCurrency('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on Ethereum Mainnet

const pairAddress = await TwapFactory.getPairAddress(
  provider,
  ChainId.Mainnet,
  first,
  second
)
```

To get a `Pair` call `getPair` function from TwapReader. This method will make all neccesary on-chain calls to properly initialize a `Pair`.

```
import { ChainId, TwapReader, getCurrency, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const first = getCurrency('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') // USDC address on Ethereum Mainnet
const second = getCurrency('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on Ethereum Mainnet

const pair = await TwapReader.getPair(
  provider,
  ChainId.Mainnet,
  first,
  second
)
```

## Orders

In order to get order status use `getOrderStatus` or `getOrderStatuses` function from TwapDelay.

```
import { ChainId, TwapDelay, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const orderStatus = await TwapDelay.getOrderStatus(provider, ChainId.Mainnet, 12)
```

Meaning of returned order status:
|ID|Status|
|---|---|
|0|NonExistent|
|1|EnqueuedWaiting|
|2|EnqueuedReady|
|3|ExecutedSucceeded|
|4|ExecutedFailed|
|5|Canceled|

## Gas price

You can also get gas price using `getGasPrice` function from TwapDelay.

```
import { ChainId, TwapDelay, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const gasPrice = await TwapDelay.getGasPrice(provider, ChainId.Mainnet)
```
