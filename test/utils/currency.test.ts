import { expect } from "chai"
import { ChainId, CVX, WETH } from "../../src/constants"
import { Token } from "../../src/model"
import { getToken, getProvider } from "../../src/utils"

describe('getToken', () => {
  // Arrange
  const provider = getProvider(ChainId.Kovan, {})

  it('returns Kovan WETH token', async () => {
    // Arrange
    const tokenSymbol = 'KETH'
    const expectedToken = new Token(ChainId.Kovan, WETH[ChainId.Kovan].toLowerCase(), 'Wrapped Ether', 'WETH', 18)

    // Act
    const currency = await getToken(provider, ChainId.Kovan, tokenSymbol)

    // Assert
    expect(currency).to.eql(expectedToken)
  })

  it('returns Kovan CVX token', async () => {
    // Arrange
    const tokenAddress = CVX[ChainId.Kovan]
    const expectedToken = new Token(ChainId.Kovan, CVX[ChainId.Kovan].toLowerCase(), 'Convex Token', 'CVX', 18)

    // Act
    const token = await getToken(provider, ChainId.Kovan, tokenAddress)

    // Assert
    expect(token).to.eql(expectedToken)
  })

  it('throws if cannot find token', async () => {
    // Arrange
    const tokenAddress = '0xd502f487e1841fdc805130e13eae80c61186bc98'
    let errorMessage = ''

    // Act
    try {
      await getToken(provider, ChainId.Kovan, tokenAddress)
    } catch (error) {
      if (error instanceof Error) {
        errorMessage = error.message
      }
    }

    // Assert
    expect(errorMessage).to.eq(`Cannot find token: ${tokenAddress} on ${ChainId[ChainId.Kovan]}`)
  })
})
