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
import PersonsA from '@/assets/images/samurai.gif';
import Persons from '@/assets/images/samurai.png';
import BaseIcon from '@/assets/images/base-logo-in-blue.svg';
import CbIcon from '@/assets/images/cb-wallet.svg';
import Lab from '@/assets/images/scientist.jpg';
import OpenAiIcon from '@/assets/images/openai-white.svg';
import LogoIcon from '@/assets/images/logo-sm.png';
import '@/assets/css/home.scss';
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useBodyClass from '@/components/use-body-class';

export default function NFT() {
  useBodyClass('nft');
  const [copyButtonStatus, setCopyButtonStatus] = useState(false);
  const [_, copyToClipboard] = useCopyToClipboard();
  gsap.registerPlugin(ScrollTrigger);
  function handleCopyToClipboard() {
    copyToClipboard('0xC687488603BC90B344C7c8d64C5BCc151D7bDc95');
    setCopyButtonStatus(true);
    setTimeout(() => {
      setCopyButtonStatus(copyButtonStatus);
    }, 2500);
  }

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".samuraiana",
      start: "top top",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: ".featurelist",
      start: "top 65%",
      toggleClass: "active",
    });
  }, []);

  const features2 = [
    {
      name: 'Personalities',
      description: 'The staking system and staking pool will enable users to lock RAYN tokens for long-term storage while simultaneously accruing daily rewards',
      icon: Icon11,
    },
    {
      name: 'Training',
      description: 'The staking system and staking pool will enable users to lock RAYN tokens for long-term storage while simultaneously accruing daily rewards',
      icon: Icon11,
    },
    {
      name: 'Experience',
      description: ' ',
      icon: Icon11,
    },
    {
      name: 'Backstory',
      description: ' ',
      icon: Icon11,
    },
    {
      name: 'In-game Interactions',
      description: 'It is expected that RAYN will gradually evolve a Decentralized Autonomous Organization that will be overseen by the community',
      icon: Icon11,
    },
  ];



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



<div className="banner-main flow-row relative isolate flex items-center pb-24 -mx-4 lg:pt-[96px] lg:-mt-[96px] md:-mx-6 md:px-12 lg:-mx-8 lg:px-16">
        <div className="mx-auto max-w-7xl w-full px-6 column flex-col lg:flex-row flex items-center lg:px-8">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl grow relative z-20">

            <div className="inline-flex items-center space-x-6">
                <span className="flex flex-row items-center rounded-full bg-white px-3 py-1 text-sm font-semibold leading-6 text-dark ring-1 ring-inset ring-indigo-500/20">
                  <Image
                    className="pr-1 inline -m-[8px]"
                    src={LogoIcon.src}
                    alt="Base"
                    title="Base"
                    width={20}
                    height={20}
                  />
                  &nbsp; Runtz NFTs
                </span>
               {/* <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span className="text-sm text-color4">Minting Now!</span>
              </span> */}
            </div>
            <h1 className="mt-6 text-4xl font-light tracking-tight text-white sm:text-6xl">
              Attitude<br/>Unleashed
            </h1>
            <p className="mt-6 text-lg max-w-[25em] leading-8 text-gray-300">
              Not a lot is known about these crazy aliens except they like to absorb matter and morph into stuff
            </p>
            
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="https://app.rewardz.network/mint-nft"
                
                className="primary-button text-md whitespace-nowrap px-12 py-3 text-center"
              >
                Minting Now
              </Link>
              <a
                href="#down"
                className="text-md mx-2 font-semibold leading-6 text-color1"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="samuraiana relative py-16 w-full flex flex-col items-center justify-center -ml-16">
                <Image
                className="samtop max-w-100"
                src={PersonsA.src}
                alt="Samurai"
                width={858}
                height={865}
              />
                <Image
                className="sammid max-w-100"
                src={Persons.src}
                alt="Samurai"
                width={858}
                height={865}
              />
                <Image
                className="sambot max-w-100"
                src={Persons.src}
                alt="Samurai"
                width={858}
                height={865}
              />
            </div>
        </div>
      </div>







    <div className="scientist -mr-8 mt-16 overflow-hidden pr-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left flex flex-col items-start justify-center">
              <h2 className="hype-1 text-[2em] md:text-[3em] font-semibold leading-7 text-color4 w-full">
              <span className="hype-2">AI</span> Trai<span className="hype-2">t</span>s 2.0
              </h2>
              <p className="mt-2 text-3xl md:text-4xl font-normal tracking-tight w-full">
                Bring Your NFTs to Life
              </p>
              <p className="mt-6 mb-10 text-lg leading-8 text-gray-300">
                We tapped into OpenAI API and decided to hook it up to NFT
                traits and have some fun
              </p>
              <dl className="featurelist space-y-6 max-w-xl text-base leading-7 lg:max-w-none">
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
            <div className="masker masker3 flex items-center justify-center lg:-mr-32 lg:ml-16">

            </div>
          </div>
        </div>
      </div>



{/*     <div className="pt-24 sm:pt-32">
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
    </div> */}



  {/* Hero */}
  <div id="waterframe" className="nft-banner relative flex flex-row justify-start bg-black items-center -mx-8 px-16 py-24 mt-24">
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Announcement Banner */}
      <div className="text-center">
        <a
          href="https://etherscan.io/address/0xC687488603BC90B344C7c8d64C5BCc151D7bDc95"
          title="Runtz NFT Contract"
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
        <h1 className="block font-light text-4xl tracking-tight md:text-5xl lg:text-6xl">
          Runtz NFT Community
        </h1>
      </div>
      {/* End Title */}
      <div className="mt-5 max-w-xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Partnered with The Rewardz® Network
        </p>
      </div>
      {/* Buttons */}
      <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
        <a
          className="copypill relative group inline-flex justify-center items-center gap-x-3.5 text-center text-sm font-medium rounded-md transition p-2 pl-4 shadow-slate-700/[.7] text-white"
          href="javascript:;" 
          onClick={() => handleCopyToClipboard()}
        >
          <span className="caddress pr-3 text-sm md:text-base lg:text-lg">0xC687488603BC90B344C7c8d64C5BCc151D7bDc95</span>
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
          href="https://app.rewardz.network/mint-nft"
          target="_blank"          
          className="primary-button text-md whitespace-nowrap px-12 py-3 text-center"
        >
          Mint Now{/*  <span aria-hidden="true">↗</span> */}
        </Link>
        <Link
          href="https://opensea.io/collection/runtzcommunity"
          target="_blank"
          className="text-md mx-2 font-semibold leading-6 text-white"
        >
          View Collection ↗
        </Link>
      </div>
    </div>
  </div>
  {/* End Hero */}



    </>
  );
}
