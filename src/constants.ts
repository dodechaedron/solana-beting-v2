import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'


// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://api.mainnet-beta.solana.com"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('AxBQnM9Txini7B8YZXpXAzhyF1z6pDgz5xVc6doJqZo5')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'v2-play.gamba.so'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  {
    mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
    symbol: 'JUP',
    name: 'Jupiter',
    image: "https://assets.coingecko.com/coins/images/34188/standard/jup.png?1704266489",
    decimals: 6,
    baseWager: 1 * 1e6,
  },
  {
    mint: new PublicKey("8CSTYs264XFrGym2WLy6QGgq6isxU8G4Und9q1gVbbbB"),
    symbol: 'GMCOCK',
    name: '$GMCOCK',
    image: "https://i.imgur.com/YRZpssx.png",
    decimals: 8,
    baseWager: 1,
  },
  {
    mint: new PublicKey("WLutG27BRFLhbpCosRNvJtj22qdEAA8aTBFzKKGfeEc"),
    symbol: 'WL THESUPERSOL',
    name: '$wlTSOS',
    image: "https://harlequin-payable-basilisk-127.mypinata.cloud/ipfs/QmUZLVfD1JStTADHshkQjrikR4UXAfWvkdyqZwz7j4peuj",
    decimals: 8,
    baseWager: 1,
  },
]
