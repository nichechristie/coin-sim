/**
 * Application constants and configuration values for CoinSim.
 */

// --- App Configuration ---
export const APP_URL: string = process.env.NEXT_PUBLIC_URL || 'https://coin-sim-8a808328.base44.app';

export const APP_NAME: string = 'CoinSim';

export const APP_DESCRIPTION: string = 'Coin simulation app on Base network with Farcaster integration';

export const APP_PRIMARY_CATEGORY: string = 'simulation';

export const APP_TAGS: string[] = ['coins', 'simulation', 'base', 'crypto'];

// --- Asset URLs ---
export const APP_ICON_URL: string = `${APP_URL}/icon.png`;

export const APP_SPLASH_URL: string = `${APP_URL}/splash.png`;

// --- Feature Flags ---
export const USE_WALLET: boolean = true;

export const ANALYTICS_ENABLED: boolean = false;

// --- Farcaster Configuration ---
export const FARCASTER_MANIFEST_URL: string = 'https://api.farcaster.xyz/miniapps/hosted-manifest/019a6f7e-025c-0bbe-770a-ea7e5f714461';
