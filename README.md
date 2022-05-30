# integralhq/size-sdk

# SDK Quick Start

The Integral SIZE SDK is created to help developers to interact with the Integral **SIZE** protocol. The SDK makes it convenient to instantiate an Integral `Pair` with on-chain data and calculate required data to perform a trade.\
The SDK is for the Integral **SIZE** only. The SDK for Integral **FIVE** will be released subsequently.

## Installation

The easiest way to install the Integral SIZE SDK is to run `yarn add @integralhq/size-sdk` or `npm install @integralhq/size-sdk`.
To use the SDK in your project, use `import` or `require`, depending on your environment.

```typescript
import { ChainId } from '@integralhq/size-sdk'
console.log(`Kovan chain id: ${ChainId.Kovan}`)
```

# Creating a Trade

The Integral SIZE SDK provides functions that allows you in an easy way to calculate and prepare data to safely interact with Integral SIZE. The SDK will not execute trades or send transactions on your behalf.

## Buy and Sell

Let's say you want to **sell** 1 WETH for USDC. The easies way to prepare data for such trade is to:

```typescript
import { BigNumber, utils } from 'ethers'
import { ChainId, TwapDelay, CurrencyValue, getCurrency, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const receiver = '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c4365'
const usdc = getCurrency(ChainId.Mainnet, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') // USDC address on Ethereum Mainnet
const weth = getCurrency(ChainId.Mainnet, '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on Ethereum Mainnet
const input = new CurrencyValue(weth, utils.parseEther('1.0')) // 1 WETH
const output = new CurrencyValue(usdc, utils.parseUnits('2000', usdc.decimals)) // 2000 USDC
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

```typescript
import { BigNumber, utils } from 'ethers'
import { ChainId, TwapDelay, CurrencyValue, getCurrency, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const receiver = '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c4365'
const usdc = getCurrency(ChainId.Mainnet, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') // USDC address on Ethereum Mainnet
const weth = getCurrency(ChainId.Mainnet, '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on Ethereum Mainnet
const input = new CurrencyValue(usdc, utils.parseUnits('2000', usdc.decimals)) // 2000 USDC
const output = new CurrencyValue(weth, utils.parseEther('1.0')) // 1 WETH
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

The SDK provides an easy way to get a `Pair` and a `Pair` address.

To get a `Pair` address, simply call `getPairAddress` function from `TwapFactory`. If the pair exists the function will return its address, otherwise `undefined`.
The order of currencies passed in the call does not matter. There is only one pair for specific 2 currencies.

```typescript
import { ChainId, TwapFactory, getCurrency, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const first = getCurrency(ChainId.Mainnet, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') // USDC address on Ethereum Mainnet
const second = getCurrency(ChainId.Mainnet, '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on Ethereum Mainnet

const pairAddress = await TwapFactory.getPairAddress(provider, ChainId.Mainnet, first, second)
```

To get a `Pair`, call `getPair` function from `TwapReader`. This method will make all necessary on-chain calls to properly initialize the local `Pair` object.
The order of currencies passed in the call does not matter. There is only one pair for specific 2 currencies.

```typescript
import { ChainId, TwapReader, getCurrency, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const first = getCurrency(ChainId.Mainnet, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48') // USDC address on Ethereum Mainnet
const second = getCurrency(ChainId.Mainnet, '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') // WETH address on Ethereum Mainnet

const pair = await TwapReader.getPair(provider, ChainId.Mainnet, first, second)
```

## Orders

To get order status, use `getOrderStatus` or `getOrderStatuses` function from `TwapDelay`.

```typescript
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

You can also get gas price using `getGasPrice` function from `TwapDelay`.

```typescript
import { ChainId, TwapDelay, getProvider } from '@integralhq/size-sdk'

const provider = getProvider(ChainId.Mainnet, {})
const gasPrice = await TwapDelay.getGasPrice(provider, ChainId.Mainnet)
```
