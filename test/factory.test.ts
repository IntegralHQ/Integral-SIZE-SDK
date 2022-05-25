import { expect } from "chai"
import { getProvider } from "../src/utils"
import { ChainId, KovanEther, KovanLink, KovanUSDCoin, KovanWrappedBitcoin, WETH_USDC } from "../src/constants"
import { TwapFactory } from "../src/factory"

describe('TwapFactory', () => {
  describe('TwapFactory.getPairAddress', () => {
    // Arrange
    const provider = getProvider(ChainId.Kovan, {})

    it('returns WETH-USDC pair address', async () => {
      // Act
      const pairAddress = await TwapFactory.getPairAddress(
        provider,
        ChainId.Kovan,
        KovanUSDCoin,
        KovanEther,
      )

      // Assert
      expect(pairAddress).to.eq(WETH_USDC[ChainId.Kovan])
    })

    it('returns undefined for not existing LINK-WBTC pair', async () => {
      // Act
      const pairAddress = await TwapFactory.getPairAddress(
        provider,
        ChainId.Kovan,
        KovanLink,
        KovanWrappedBitcoin
      )

      // Assert
      expect(pairAddress).to.eq(undefined)
    })
  })
})