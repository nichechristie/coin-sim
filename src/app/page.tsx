'use client';

import { useMiniApp } from '@neynar/react';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isSDKLoaded } = useMiniApp();
  const { address, isConnected } = useAccount();

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CoinSim
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to CoinSim - A Farcaster mini-app on Base network
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-700">Farcaster SDK:</span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                isSDKLoaded ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {isSDKLoaded ? 'Loaded' : 'Loading...'}
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-700">Wallet:</span>
              <span className={`px-3 py-1 rounded-full text-sm ${
                isConnected ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {isConnected ? 'Connected' : 'Not Connected'}
              </span>
            </div>

            {isConnected && address && (
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-semibold text-gray-700">Address:</span>
                <code className="text-sm text-gray-600">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </code>
              </div>
            )}

            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
              <span className="font-semibold text-blue-700">Network:</span>
              <span className="text-blue-900">Base (Chain ID: 8453)</span>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-2">Ready to Build!</h2>
            <p className="text-blue-100">
              Your Farcaster mini-app is configured with Base network support.
              Start building your coin simulation features!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
