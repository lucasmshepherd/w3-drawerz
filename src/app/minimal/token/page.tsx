'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCopyToClipboard } from 'react-use';
import { Check } from '@/components/icons/check';
import { Copy } from '@/components/icons/copy';
import Video from '@/components/video';
import WalletCard from '@/components/ui/wallet-card';
import Icon1 from '@/assets/images/icons/icons_ethereum.svg';
import Icon2 from '@/assets/images/icons/icons_users.svg';
import Icon3 from '@/assets/images/icons/icons_cheaper.svg';
import Icon4 from '@/assets/images/icons/icons_wallet.svg';
import Icon5 from '@/assets/images/icons/icons_opensource.svg';
import Icon6 from '@/assets/images/icons/icons_defi.svg';
import Icon7 from '@/assets/images/icons/icons_easy-tx.svg';
import Icon8 from '@/assets/images/icons/icons_gaming.svg';
import Icon9 from '@/assets/images/icons/icons_gasless.svg';
import Icon10 from '@/assets/images/icons/icons_mobile.svg';
import Icon11 from '@/assets/images/icons/icons_nft.svg';
import Icon12 from '@/assets/images/icons/icons_coins.svg';
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function TokenPage() {
  const [copyButtonStatus, setCopyButtonStatus] = useState(false);
  const [_, copyToClipboard] = useCopyToClipboard();
  gsap.registerPlugin(ScrollTrigger);
  function handleCopyToClipboard() {
    copyToClipboard('0x562d8e607bed7fc183ca84c0362c853680b99638');
    setCopyButtonStatus(true);
    setTimeout(() => {
      setCopyButtonStatus(copyButtonStatus);
    }, 2500);
  }

  const features2 = [
    {
      name: 'Staking System & Revenue Sharing',
      description: 'The staking system and staking pool will enable users to lock RAYN tokens for long-term storage while simultaneously accruing daily rewards',
      icon: Icon12,
    },
    {
      name: 'Gated Content & Early Access',
      description: ' ',
      icon: Icon8,
    },
    {
      name: 'Project & Grant Voting',
      description: 'It is expected that RAYN will gradually evolve a Decentralized Autonomous Organization that will be overseen by the community',
      icon: Icon1,
    },
    {
      name: 'Exclusive Memberships',
      description: 'Invitations to exclusive events, online and otherwise, which relate to the platform',
      icon: Icon11,
    },
    {
      name: 'VIP Whitelists',
      description: 'Early access to new brands launching on our platform including alpha and offerings',
      icon: Icon2,
    },
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".featurelist",
      start: "top 65%",
      toggleClass: "active",
    });
    gsap.fromTo('.fixedwhale', 
      {opacity: .25},
      {
       opacity: 0,
       scrollTrigger: {
           trigger: '.whalesea',
           start: 'top top',
           end: 'bottom -50%',
           scrub: true,
       },})
  }, []);

  const stats = [
    { id: 'first', name: 'Total Buy/Sell Tax', value: '5%' },
    { id: 1, name: 'Marketing & Operations', value: '2%' },
    { id: 2, name: 'Liquidity Pool', value: '1%' },
    { id: 3, name: 'Developers', value: '2%' },
  ]

  const features = [
    {
      name: 'Staking System',
      description: 'The staking system and staking pool will enable users to lock RAYN tokens for long-term storage while simultaneously accruing daily rewards'
    },
    {
      name: 'Projects and Grants',
      description: 'It is expected that RAYN will gradually evolve a Decentralized Autonomous Organization that will be overseen by the community'
    },
    {
      name: 'Event Access',
      description: 'Invitations to exclusive events, online and otherwise, which relate to the platform'
    },
    {
      name: 'VIP Whitelists',
      description: 'Early access to new brands launching on our platform including alpha and offerings'
    },
  ]


  return(
    <>

  {/* Hero */}
  <div className="token-banner relative z-10 flex flex-row justify-start items-center -mx-8 px-16">
    <Video />
    <div className="max-w-[1200px] mx-auto px-4 pb-10 sm:px-6 lg:px-8">
      {/* Announcement Banner */}
      <div className="text-center">
        <a
          href="https://etherscan.io/token/0x562d8e607bed7fc183ca84c0362c853680b99638"
          title="Base Layer-2 for Ethereum from Coinbase"
          className="inline-flex space-x-6 mx-auto"
          target="_blank"
        >
          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-indigo-500/20">
            Etherscan.io ↗
          </span>
        </a>
      </div>
      {/* End Announcement Banner */}
      {/* Title */}
      <div className="mt-5 text-center mx-auto">
        <h1 className="block font-bold text-4xl tracking-tight md:text-5xl lg:text-6xl">
          Your web3 superpower
        </h1>
      </div>
      {/* End Title */}
      <div className="mt-5 max-w-xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Rewardz® Automated Yield Network
        </p>
      </div>
      <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
        <span className="text-sm font-bold text-gray-600 dark:text-gray-400 pr-2">
          Fixed:  
        </span>
        <span className="text-sm text-gray-900 dark:text-white">
          100 Billion RAYN
        </span>
        <svg
          className="h-5 w-5 text-gray-300 dark:text-gray-600"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round" />
        </svg>
        <a
          className="inline-flex items-center gap-x-1.5 text-sm text-color1 decoration-2 hover:underline font-medium"
          href="https://www.team.finance/view-coin/0x562D8e607bed7Fc183Ca84C0362c853680b99638?name=Rewardz%20Automated%20Yield%20Network&symbol=RAYN&chainid=0x1"
          target="_blank"
        >
          Vesting + LP Lock ↗
        </a>
      </div>
      {/* Buttons */}
      <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
        <a
          className="copypill relative group inline-flex justify-center items-center gap-x-3.5 text-center text-sm font-medium rounded-md transition p-2 pl-4 shadow-slate-700/[.7] text-white"
          href="javascript:;" 
          onClick={() => handleCopyToClipboard()}
        >
          <span className="caddress pr-3 text-sm md:text-base lg:text-lg">0x562d8e607bed7fc183ca84c0362c853680b99638</span>
          <span className="flex justify-center items-center rounded-md w-7 h-7 bg-gray-700 text-gray-400">
            {copyButtonStatus ? (
              <Check className="h-auto w-3.5 text-green-500" />
            ) : (
              <Copy className="h-auto w-3.5" />
            )}
          </span>
        </a>
      </div>
      {/* End Buttons */}

      <div className="mt-10 mx-auto flex justify-center items-center gap-x-6">
        <Link
          href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x562d8e607bed7fc183ca84c0362c853680b99638"
          
          className="primary-button text-md whitespace-nowrap px-12 py-3 text-center"
        >
          Buy Tokens{/*  <span aria-hidden="true">↗</span> */}
        </Link>
        <Link
          href="https://app.rewardz.network/"
          className="text-md mx-2 font-semibold leading-6 text-white"
        >
          Launch App
        </Link>
      </div>
    </div>
  </div>
  {/* End Hero */}



  <div className="overflow-hidden pt-24 whalesea">
    <div className="fixedwhale"></div>
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="hype-1 text-[2em] md:text-[3em] font-semibold leading-7 text-color4 w-full">
                RAYN Fal<span className="hype-2">l</span>
              </h2>
              <p className="mt-2 text-4xl md:text-5xl font-light tracking-tight w-full mb-10">
                Token Distribution
              </p>
              <p className="mt-6 text-xl leading-8">
                RAYN is an ERC-20 token that serves as the primary currency within the platform
              </p>
              <p className="mt-4 text-base leading-7">
                The RAYN token functions as the ecosystem token and helps maintain economic stability within the system. Furthermore, $RAYN tokens will be tradable on various exchanges.
              </p>
              <p className="mt-4 text-base leading-7">
                Holders truly own them, with neither the game developers nor any other party able to confiscate them without user consent or knowledge. This essential feature is made possible by the blockchain technology employed in both the game and the project's economy.
              </p>
              <p className="mt-4 text-base leading-7">
                Playing Runtz and engaging with the community on social media platforms will allow users to earn RAYN, a scarce and valuable currency whose worth increases as the platform attracts more users.
              </p>
              <p className="mt-4 text-base leading-7">
                In addition, users who wish to be part of the project without directly engaging in gaming sessions or tournaments can also earn rewards through gamification mechanics that encourage daily activity even for non-gamers.
              </p>
              <p className="mt-4 text-base leading-7">
                
              </p>
{/*               <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-color4">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <WalletCard />
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="-mr-8 mt-16 overflow-hidden py-16 pr-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:mr-auto lg:pr-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="hype-1 text-[2em] md:text-[3em] leading-7 text-color4">
                  Inc<span className="hype-2">enti</span>ves
                </h2>
                <p className="mt-2 text-4xl md:text-5xl font-light tracking-tight w-full mb-10">
                  Power Up
                </p>
                <p className="mt-6 text-lg leading-8">
                  The Rewardz® Network is designed to be a community-driven project, and thus our objective is to strike a sensible balance between the supply and demand of tokens, while optimizing incentives for all participants
                </p>
                <dl className="featurelist mt-10 space-y-6 max-w-xl text-base leading-7 lg:max-w-none">
                  {features2.map((feature) => (
                    <>
                      <div key={feature.name} className="relative flex flex-row">
                        <div className="mr-3 flex h-10 w-10 basis-10 items-center justify-center rounded-md bg-color8">
                          {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                          <Image
                            alt="icon"
                            src={feature.icon}
                            width={48}
                            height={48}
                          />
                        </div>
                        <dt className="inline pt-[6px] text-lg font-medium">
                          {feature.name}
                        </dt>
                      </div>
{/*                       <p className="mb-6 p-3 mt-2 border border-indigo-900 rounded-lg text-base">
                        <span className="block">{feature.description}</span>
                      </p> */}
                    </>
                  ))}
                </dl>
              </div>
            </div>
            <div className="masker masker2 flex items-center justify-center lg:-mr-32 lg:ml-16">

            </div>
          </div>
        </div>
      </div>



    <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl w-full text-center">
        <h2 className="hype-1 text-[2em] md:text-[3em] font-semibold leading-7 text-color4 w-full">
          RAYN Flow
        </h2>
        <p className="mt-2 text-4xl md:text-5xl font-light tracking-tight w-full mb-10">
          Buy & Sell Taxes
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-2 py-8 rounded-lg gradbg">
        <dl className="grid grid-cols-4 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <>
              <div key={stat.id} id={stat.id} className="statcell mx-auto px-2 flex max-w-xs flex-col justify-center gap-y-4">
                <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
                <dd className="order-first text-2xl leading-tight tracking-tight text-white sm:text-3xl">{stat.value}</dd>
              </div>
            </>
          ))}
        </dl>
      </div>
    </div>



    </>
  );
}
