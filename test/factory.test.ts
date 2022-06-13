import { expect } from "chai"
import { getProvider } from "../src/utils"
import { ChainId, KovanEther, KovanLink, KovanUSDCoin, KovanWrappedBitcoin, WETH_USDC } from "../src/constants"
import { TwapFactory } from "../src/factory"

describe('TwapFactory', () => {
  // Arrange
  const provider = getProvider(ChainId.Kovan, {})

  describe('TwapFactory.getPairAddress', () => {
    it('returns WETH-USDC pair address', async () => {
      // Act
      const pairAddress = await TwapFactory.getPairAddress(
        provider,
        ChainId.Kovan,
        KovanUSDCoin,
        KovanEther,
      )

      // Assert
      expect(pairAddress).to.eq(WETH_USDC[ChainId.Kovan].toLowerCase())
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

  describe('TwapFactory.getPairsLength', () => {
    it('returns pairs length', async () => {
      // Act
      const pairsLength = await TwapFactory.getPairCount(provider, ChainId.Kovan)

      // Assert
      expect(typeof(pairsLength)).to.eq("number")
    })
  })

  describe('TwapFactory.getPairAddressById', () => {
    it('returns pair address', async () => {
      // Act
      const pairAddress = await TwapFactory.getPairAddressById(provider, ChainId.Kovan, 1)
      const expectedPairAddress = '0x1b1a7E186cf13Db3852f7f5bf19091061f323842'

      // Assert
      expect(pairAddress).to.eq(expectedPairAddress.toLowerCase())
    })
  })
})