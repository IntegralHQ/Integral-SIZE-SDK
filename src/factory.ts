import { Interface } from '@ethersproject/abi'
import { BaseProvider } from '@ethersproject/providers'
import { multicall } from './utils'
import { ADDRESS_ZERO, ChainId, FACTORY_ABI, FACTORY_ADDRESS } from './constants'
import { Currency, toToken, Cache } from './model'

/**
 * Represents the Integral TwapFactory contract with a method for returning pair address.
 */
export abstract class TwapFactory {
  private static FACTORY_CODER: Interface = new Interface(FACTORY_ABI)

  /**
   * Returns the pair address for given tokens
   * @param provider
   * @param chainId Supported chains: Mainnet, Kovan
   * @param first The first token in pair
   * @param second The second token in pair
   * @param cache
   * @param ttlSeconds TTL in seconds that object is stored in caching system
   * @returns Pair address
   */
  public static async getPairAddress(
    provider: BaseProvider,
    chainId: ChainId,
    first: Currency,
    second: Currency,
    cache?: Cache,
    ttlSeconds?: number
  ): Promise<string | undefined> {
    const firstToken = toToken(first)
    const secondToken = toToken(second)
    if (firstToken === secondToken) {
      throw new Error('Pair for identical tokens')
    }

    const key = `getPairAddress/${first.symbol}/${second.symbol}`
    if (cache) {
      const pairAddress = await cache.get(key)
      if (pairAddress) {
        return pairAddress
      }
    }

    const results = await multicall(provider, chainId, [
      {
        target: FACTORY_ADDRESS[chainId],
        callData: this.FACTORY_CODER.encodeFunctionData('getPair', [firstToken.address, secondToken.address]),
      },
    ])

    const decodedPairAddress = this.FACTORY_CODER.decodeFunctionResult('getPair', results[0])[0]
    const pairAddress = decodedPairAddress !== ADDRESS_ZERO ? decodedPairAddress : undefined

    if (pairAddress && cache) {
      await cache.set(key, pairAddress, ttlSeconds)
    }
    return pairAddress
  }
}
