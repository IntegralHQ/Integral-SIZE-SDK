import { ChainId, TOKENS, NATIVE_CURRENCY, WRAPPED_ETHER } from '../constants'

export function getCurrency(symbolOrAddress: string) {
  if (symbolOrAddress.toLowerCase() === NATIVE_CURRENCY[ChainId.Mainnet].symbol.toLowerCase()) {
    return WRAPPED_ETHER[ChainId.Mainnet]
  } else {
    return TOKENS[ChainId.Mainnet].find((token) => symbolOrAddress.toLowerCase() === token.address.toLowerCase())
  }
}
