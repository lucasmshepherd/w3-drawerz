'use client';

import cn from 'classnames';
import Image from 'next/image';
import CoinSlider from '@/components/ui/coin-card';
import TopPools from '@/components/ui/top-pools';
import { coinSlideData } from '@/data/static/coin-slide-data';
import Avatar from '@/components/ui/avatar';
import TopupButton from '@/components/ui/topup-button';
import { NextSeo } from 'next-seo';
//web3
import { useContract, useContractRead, useAddress } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
//images
import Coin from '@/assets/images/coin-60x.png';
import RaynToken from '@/assets/images/icon-round.png';

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ModernScreen() {
  let raynBalance;
  let raynDecimals;
  let raynSplit;
  const address = useAddress();
  const { contract } = useContract(
    '0x562D8e607bed7Fc183Ca84C0362c853680b99638'
  );
  const { data, isLoading } = useContractRead(contract, 'balanceOf', [address]);

  if (data) {
    const remainder = data.mod(1e14);
    raynBalance = ethers.utils.formatEther(data.sub(remainder));
    raynBalance = formatter.format(raynBalance);
    raynSplit = raynBalance.split('.');
    raynDecimals = '.' + raynSplit[1];
    raynBalance = raynSplit[0];
  } else {
    raynBalance = '...';
  }

  return (
    <>
      <NextSeo
        title="Dashboard | Rewardz® Network"
        description="AI Gaming Platform"
        canonical="https://rewardz.network/"
        openGraph={{
          url: 'https://rewardz.network',
          title: 'Dashboard | Rewardz® Network',
          description: 'AI Gaming Platform',
          images: [
            {
              url: 'https://rewardz.network/images/seoad.jpg',
              width: 1280,
              height: 640,
              alt: 'Rewardz® Network',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Rewardz® Network',
        }}
        twitter={{
          handle: '@rewardz_network',
          site: '@rewardz_network',
          cardType: 'summary_large_image',
        }}
      />
      <div className="flex flex-wrap">
        <div className="mb-8 w-full sm:mb-0 sm:w-1/2 sm:ltr:pr-6 sm:rtl:pl-6 md:w-[calc(100%-256px)] lg:w-[calc(100%-288px)] 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]">
          <CoinSlider coins={coinSlideData} />
        </div>
        <div className="w-full sm:w-1/2 md:w-64 lg:w-72 2xl:w-80 3xl:w-[358px]">
          <div className="balance-card flex h-full flex-col justify-center rounded-lg p-6 shadow-card xl:p-8">
            <Avatar
              image={RaynToken}
              alt="Author"
              className="mx-auto mb-1"
              size="xl"
            />
            <h3 className="mb-0 text-center text-sm text-gray-500 dark:text-gray-400">
              RAYN Balance
            </h3>
            <div className="balance mb-4 flex items-center justify-center text-center font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl 3xl:mb-8 3xl:text-[32px]">
              <Image
                src={Coin}
                className="coinimg"
                alt="Γ"
                title="RAYN Token"
                width="28"
                height="28"
              />
              <span className="amount">
                <b>
                  {raynBalance}
                  <span className="decimals">{raynDecimals}</span>
                </b>
              </span>
            </div>
            <TopupButton />
          </div>
        </div>
      </div>

     {/*<div className="mt-8 grid gap-6 sm:my-10 md:grid-cols-2">
        <LiquidityChart />
        <VolumeChart />
      </div>*/}

      {/*<div className="flex flex-wrap">
        <div
          className={cn(
            'w-full lg:w-[100%] pt-6 2xl:w-[100%] 3xl:w-[100%]'
          )}
        >
          <TransactionTable />
        </div>
          </div>*/}

      <div className="flex flex-wrap">
        <div
          className={cn('w-full pt-6 lg:w-[100%] 2xl:w-[100%] 3xl:w-[100%]')}
        >
          <TopPools />
        </div>
      </div>
    </>
  );
}
