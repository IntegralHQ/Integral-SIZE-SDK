import { expect } from "chai"
import { getProvider } from "../src/utils"
import { ChainId, KovanEther, KovanLink, KovanUSDCoin, KovanWrappedBitcoin, USDC, WETH, WETH_USDC } from "../src/constants"
import { TwapReader } from "../src/reader"

describe('TwapReader', () => {
  describe('TwapReader.getPair', () => {
    // Arrange
    const provider = getProvider(ChainId.Kovan, {})

    it('returns WETH-USDC pair', async () => {
      // Act
      const pair = await TwapReader.getPair(
        provider,
        ChainId.Kovan,
        KovanUSDCoin,
        KovanEther
      )

      // Assert
      expect(pair?.address).to.eq(WETH_USDC[ChainId.Kovan].toLowerCase())
      expect(pair?.getToken0Address().toLowerCase()).to.eq(USDC[ChainId.Kovan].toLowerCase())
      expect(pair?.getToken1Address().toLowerCase()).to.eq(WETH[ChainId.Kovan].toLowerCase())
    })

    it('returns undefined for not existing LINK-WBTC pair', async () => {
      // Act
      const pair = await TwapReader.getPair(
        provider,
        ChainId.Kovan,
        KovanLink,
        KovanWrappedBitcoin
      )

      // Assert
      expect(pair).to.eq(undefined)
    })
  })
})