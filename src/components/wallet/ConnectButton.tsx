'use client';

import { useConnect, useDisconnect, useAccount } from 'wagmi';
import { useState } from 'react';

export function ConnectButton() {
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected, connector } = useAccount();
  const [showConnectors, setShowConnectors] = useState(false);

  if (isConnected && address) {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-green-700">Connected</span>
            <code className="text-xs text-green-600">
              {address.slice(0, 6)}...{address.slice(-4)}
            </code>
            {connector && (
              <span className="text-xs text-green-500">via {connector.name}</span>
            )}
          </div>
          <button
            onClick={() => disconnect()}
            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            Disconnect
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {!showConnectors ? (
        <button
          onClick={() => setShowConnectors(true)}
          className="w-full px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Choose Wallet</span>
            <button
              onClick={() => setShowConnectors(false)}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                connect({ connector });
                setShowConnectors(false);
              }}
              className="w-full px-4 py-3 text-left font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors flex items-center justify-between"
            >
              <span>{connector.name}</span>
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
