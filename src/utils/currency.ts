import { ChainId, TOKENS, NATIVE_CURRENCY, WRAPPED_ETHER } from '../constants'

export function getCurrency(chainId: ChainId, symbolOrAddress: string) {
  if (symbolOrAddress.toLowerCase() === NATIVE_CURRENCY[chainId].symbol.toLowerCase()) {
    return WRAPPED_ETHER[chainId]
  } else {
    return TOKENS[chainId].find((token) => symbolOrAddress.toLowerCase() === token.address.toLowerCase())
  }
}
