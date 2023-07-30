'use client';

import { ThirdwebProvider, ThirdwebSDK } from '@thirdweb-dev/react';
import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from '@thirdweb-dev/react';
import { Ethereum, BaseGoerli, Goerli } from '@thirdweb-dev/chains';


export default function Thirdweb({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeChain = 'ethereum';
  const sdk = new ThirdwebSDK(activeChain, {
    secretKey: process.env.THIRDSKEY
  });

  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedChains={[Ethereum, BaseGoerli, Goerli]}
      supportedWallets={[coinbaseWallet(), metamaskWallet(), walletConnect()]}
      dAppMeta={{
        name: 'Rewardz® Automated Yield Network',
        description: 'AI Gaming Platform',
        logoUrl: 'https://rewardz.network/images/logodex.png',
        url: 'https://rewardz.network',
        isDarkMode: true,
      }}
    >
      {children}
    </ThirdwebProvider>
  )
};