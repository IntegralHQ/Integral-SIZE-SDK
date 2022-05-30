import { ChainId } from './chains'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const MULTICALL_ADDRESS = {
  [ChainId.Mainnet]: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
  [ChainId.Kovan]: '0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a',
  [ChainId.Ganache]: '0xBCa5c1cBc034C0AF31D976a4e3a36951A537eD77',
}

export const FACTORY_ADDRESS = {
  [ChainId.Mainnet]: '0xC480b33eE5229DE3FbDFAD1D2DCD3F3BAD0C56c6',
  [ChainId.Kovan]: '0x1c5cf8f73b1f544E01BA3F665fEE658e291329d9',
  [ChainId.Ganache]: '0xD756fb6A081CC11e7F513C39399DB296b1DE3036',
}

export const READER_ADDRESS = {
  [ChainId.Mainnet]: '0xB5C08263c1D2c9651Ea6d91A9908460e40095f7c',
  [ChainId.Kovan]: '0x1CD25C41Ff4BB6d3dcC147d8f9d1a64dde70b2e6',
  [ChainId.Ganache]: '0x0b156472D34e81765E0B2D440188f248bf2D0382',
}

export const DELAY_ADDRESS = {
  [ChainId.Mainnet]: '0x77B1E5D58247bC3300A8e646b018fceBfeE5a59c',
  [ChainId.Kovan]: '0x5236515d137eAC385F58C945Ec82371dcdb88c84',
  [ChainId.Ganache]: '0x84e924C5E04438D2c1Df1A981f7E7104952e6de1',
}

export const TIME_RELEASE_ADDRESS = {
  [ChainId.Mainnet]: '0xc8805CeBD927941a3B26e2EDCed20d666Fb118Ba',
  [ChainId.Kovan]: '0xF86a107c4025bD7D53544788A457E50fbfb6ebC4',
  [ChainId.Ganache]: '',
}

export const SIX_MONTHS_STAKING_ADDRESS = {
  [ChainId.Mainnet]: '0x36bD665392236b20bd42e161f02Bf0ae1d9441Ff',
  [ChainId.Kovan]: '0xd514094E40d9Abf634B7586e6F045b9046aCbc77',
  [ChainId.Ganache]: '',
}

export const THREE_YEARS_STAKING_ADDRESS = {
  [ChainId.Mainnet]: '0xFFc0EAC1a1aE79C697607229Aca43Ef422625a40',
  [ChainId.Kovan]: '0xA56989c1FA2a9041C45AA50af772f34f03796100',
  [ChainId.Ganache]: '',
}

export const DEPRECATED_SIX_MONTHS_STAKING_ADDRESS = {
  [ChainId.Mainnet]: '0x90477da311c24dB29e0f50D869E4AbE0820ECae8',
  [ChainId.Kovan]: '0xB78F5AF1598656Ac666F816d312Ae04203207076',
  [ChainId.Ganache]: '',
}

export const DEPRECATED_THREE_YEARS_STAKING_ADDRESS = {
  [ChainId.Mainnet]: '0xFDED703178Fac52799320BC0244aeD7dde0b330F',
  [ChainId.Kovan]: '0x15A6Aef205899C417D9f6B8ef38075D78A67cB76',
  [ChainId.Ganache]: '',
}

// TOKENS

export const INTEGRAL = {
  [ChainId.Mainnet]: '0xD502F487e1841Fdc805130e13eae80c61186Bc98',
  [ChainId.Kovan]: '0x597F10966E918d099Bfc30516ce2368DcCacf321',
  [ChainId.Ganache]: '',
}

export const WBTC = {
  [ChainId.Mainnet]: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  [ChainId.Kovan]: '0x5313e18163a2b66BF23B45d0a838219e1b236957',
  [ChainId.Ganache]: '0xA193E42526F1FEA8C99AF609dcEabf30C1c29fAA',
}

export const USDC = {
  [ChainId.Mainnet]: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  [ChainId.Kovan]: '0xb922e0b5C8fFA89Fe6195a581acC7D292B924142',
  [ChainId.Ganache]: '0xFDFEF9D10d929cB3905C71400ce6be1990EA0F34',
}

export const USDT = {
  [ChainId.Mainnet]: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  [ChainId.Kovan]: '0x9EB96a6a675D633D2754d4E6B039b6fCCfB82DC4',
  [ChainId.Ganache]: '0xaC8444e7d45c34110B34Ed269AD86248884E78C7',
}

export const DAI = {
  [ChainId.Mainnet]: '0x6b175474e89094c44da98b954eedeac495271d0f',
  [ChainId.Kovan]: '0xa0a8e1221AaF7f4220302C23943c1a60fB386447',
  [ChainId.Ganache]: '0x94BA4d5Ebb0e05A50e977FFbF6e1a1Ee3D89299c',
}

export const WETH = {
  [ChainId.Mainnet]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  [ChainId.Kovan]: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
  [ChainId.Ganache]: '0xD756fb6A081CC11e7F513C39399DB296b1DE3036',
}

export const LINK = {
  [ChainId.Mainnet]: '0x514910771af9ca656af840dff83e8264ecf986ca',
  [ChainId.Kovan]: '0xAE1f32bE79026EbfddEe398d8D7B2d9B7dF8891E',
  [ChainId.Ganache]: '0xFf807885934003A35b1284d7445fc83Fd23417e5',
}

export const CRV = {
  [ChainId.Mainnet]: '0xD533a949740bb3306d119CC777fa900bA034cd52',
  [ChainId.Kovan]: '0xbB94607042C237b9c9d2bB2Cd0fe0c04356993c0',
  [ChainId.Ganache]: '',
}

export const CVX = {
  [ChainId.Mainnet]: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
  [ChainId.Kovan]: '0x90F7095b5E2CE820C6e229481E1cE24Bb31d48D4',
  [ChainId.Ganache]: '',
}

export const SUSHI = {
  [ChainId.Mainnet]: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  [ChainId.Kovan]: '0xA410B701b4e102bb66465C705640b2aD53Ba41E7',
  [ChainId.Ganache]: '',
}

// PAIRS

export const WETH_USDC = {
  [ChainId.Mainnet]: '0x2fe16Dd18bba26e457B7dD2080d5674312b026a2',
  [ChainId.Kovan]: '0x1b1a7E186cf13Db3852f7f5bf19091061f323842',
  [ChainId.Ganache]: '0x069f0b1C9fC970a6B5dEe10C66059d84c934C1C9',
}

export const WETH_CVX = {
  [ChainId.Mainnet]: '0x43f0E5f2304F261DfA5359a0b74Ff030E498D904',
  [ChainId.Kovan]: '0xEA1c5a7246F41126879b5AAa4D855e751D6b90d1',
  [ChainId.Ganache]: '',
}

export const WETH_SUSHI = {
  [ChainId.Mainnet]: '0xD66f214fB49f81Ac5610e0339A351D7e1c67c35e',
  [ChainId.Kovan]: '0xf30246979bdf0f1Ce8E1337B4E3c951dD7C69Bb7',
  [ChainId.Ganache]: '',
}
