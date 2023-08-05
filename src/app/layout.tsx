import { Suspense, useState, useEffect } from 'react';
import { Space_Grotesk, UnifrakturMaguntia } from 'next/font/google';
import cn from 'classnames';
import { QueryClientProvider } from '@/app/shared/query-client-provider';
import { ThemeProvider } from '@/app/shared/theme-provider';
import WagmiConfig from '@/app/shared/wagmi-config';
import ModalsContainer from '@/components/modal-views/container';
import DrawersContainer from '@/components/drawer-views/container';
// theme styles
import 'overlayscrollbars/overlayscrollbars.css';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';
// custom styles
import '@/assets/css/custom.css';
// web3
import Thirdweb from '@/components/web3/thirdweb';

const space_grotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Rewardz® Automated Yield Network',
  description: 'AI Gaming Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" dir="ltr" className={cn('dark', space_grotesk.className)} style={{ scrollBehavior: 'smooth' }}>
      <head>
        {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1" 
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
      </head>
      <body>
        <div className="bodybg"></div>
        <QueryClientProvider>
          <ThemeProvider>
            <WagmiConfig>
              <Thirdweb>
                <Suspense fallback={null}>
                  <ModalsContainer />
                  <DrawersContainer />
                </Suspense>
                {children}
              </Thirdweb>
            </WagmiConfig>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
