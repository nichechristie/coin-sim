'use client';

import dynamic from 'next/dynamic';
import { MiniAppProvider } from '@neynar/react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { ANALYTICS_ENABLED } from '~/lib/constants';
import { base } from 'wagmi/chains';

const WagmiProvider = dynamic(
  () => import('~/components/providers/WagmiProvider'),
  {
    ssr: false,
  }
);

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider>
      <OnchainKitProvider chain={base}>
        <MiniAppProvider
          analyticsEnabled={ANALYTICS_ENABLED}
          backButtonEnabled={true}
        >
          {children}
        </MiniAppProvider>
      </OnchainKitProvider>
    </WagmiProvider>
  );
}
