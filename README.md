# CoinSim - Farcaster Mini App on Base

A Farcaster mini-app built with Next.js 15, React 19, and Base network integration.

## Features

- ✅ Farcaster mini-app SDK integration
- ✅ Base network support via Wagmi
- ✅ Coinbase OnchainKit integration
- ✅ Wallet connection (Farcaster Frame, Coinbase Wallet, MetaMask)
- ✅ Farcaster manifest redirect configured
- ✅ TypeScript & Tailwind CSS

## Farcaster Manifest

The app is configured to redirect `/.well-known/farcaster.json` to:
```
https://api.farcaster.xyz/miniapps/hosted-manifest/019a6f7e-025c-0bbe-770a-ea7e5f714461
```

This is configured in `next.config.ts` as a 307 temporary redirect.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:
- `NEXT_PUBLIC_URL`: Your app URL (already set to your deployment URL)
- `NEYNAR_API_KEY` & `NEYNAR_CLIENT_ID`: Get these from https://neynar.com/

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Deployment

This app is configured for deployment on Vercel:

```bash
npm run build
```

The app will be available at: https://coin-sim-8a808328.base44.app

### Post-Deployment Steps

After deploying, make sure to:

1. **Verify the Farcaster manifest** is accessible at:
   ```
   https://coin-sim-8a808328.base44.app/.well-known/farcaster.json
   ```

2. **Test in Warpcast** or another Farcaster client to ensure the mini-app loads correctly.

## Project Structure

```
coin-sim/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Providers
│   │   ├── page.tsx            # Home page
│   │   ├── providers.tsx       # Provider composition
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   └── providers/
│   │       └── WagmiProvider.tsx  # Wagmi config with Base
│   └── lib/
│       └── constants.ts        # App configuration
├── next.config.ts              # Next.js config with Farcaster redirect
├── package.json
└── tsconfig.json
```

## Key Configuration Files

### next.config.ts
Contains the Farcaster manifest redirect and frame headers.

### src/lib/constants.ts
Central configuration for app metadata, URLs, and feature flags.

### src/components/providers/WagmiProvider.tsx
Wagmi configuration with Base network and wallet connectors.

## Base Network

The app is configured to use:
- **Base Mainnet** (Chain ID: 8453)
- **Base Sepolia** (Chain ID: 84532) for testing

## Support

For issues or questions:
- Farcaster docs: https://docs.farcaster.xyz/
- Base docs: https://docs.base.org/
- Neynar docs: https://docs.neynar.com/
