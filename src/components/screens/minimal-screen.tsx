'use client';

//import cn from 'classnames';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import LogoIcon from '@/assets/images/dropz-blue.svg';
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
//import Icon11 from '@/assets/images/icons/icons_nft.svg';
//import Icon12 from '@/assets/images/icons/icons_coins.svg';
import Base from '@/assets/images/business/logos_base.svg';
import Coinbase from '@/assets/images/business/logos_coinbase.svg';
import Next from '@/assets/images/business/logos_next.svg';
import Chainlink from '@/assets/images/business/logos_chainlink.svg';
import CoinGecko from '@/assets/images/business/logos_coingecko.svg';
//import Vercel from '@/assets/images/business/logos_vercel.svg';
import Thirdweb from '@/assets/images/business/logos_thirdweb.svg';
import OpenAi from '@/assets/images/business/logos_openai.svg';
import Zealy from '@/assets/images/business/logos_zealy.svg';
//import { ExternalLink } from '@/components/icons/external-link';
import BaseIcon from '@/assets/images/base-logo-in-blue.svg';
import CbIcon from '@/assets/images/cb-wallet.svg';
import ClIcon from '@/assets/images/chainlink.svg';
import OpenAiIcon from '@/assets/images/openai-white.svg';
import Video from '@/components/video';
import Game1 from '@/assets/images/games1.jpg';
import Game5 from '@/assets/images/games5.jpg';
import '@/assets/css/home.scss';

//import BaseGlobe from '@/assets/images/content/base-logo-in-blue.webp';
import useBodyClass from '../use-body-class';
import Link from 'next/link';
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  useBodyClass('home');
  gsap.registerPlugin(ScrollTrigger);
  const chartCols = gsap.utils.toArray(".chartcol");

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#grungerow",
      start: "top 65%",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: "#cardrow",
      start: "top 60%",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: "#cardroww",
      start: "top 60%",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: "#based",
      start: "top 25%",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: ".chartcolumns",
      start: "top center",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: ".featurelist",
      start: "top 65%",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: ".samuraiana",
      start: "top 33%",
      toggleClass: "active",
    });
  }, [chartCols]);

  const stats = [
    { id: 1, name: 'Daily Unique Wallets', value: '791,474' },
    { id: 2, name: 'Invested in P2E Projects', value: '$739M+' },
    { id: 3, name: 'Virtual World Trade', value: '$350M' },
    { id: 4, name: 'Virtual Land Purchases', value: '143,000' },
  ];
  
  const features2 = [
    {
      name: 'Simplified Onboarding Process',
      description: '',
      icon: Icon10,
    },
    {
      name: 'Gasless Options',
      description: '',
      icon: Icon9,
    },
    {
      name: 'Seamless Transactions',
      description: '',
      icon: Icon7,
    },
    {
      name: 'Mobile Version',
      description: '',
      icon: Icon10,
    },
    {
      name: 'Free-to-Play Features',
      description: '',
      icon: Icon8,
    },
  ];

  const features = [
    {
      name: '10x Cheaper than L1',
      description:
        'With tx bundler and innovative ERC standards we can drastically lower fees',
      icon: Icon3,
      href: 'https://base.org/',
      link: 'Base',
    },
    {
      name: 'Built on Top of Ethereum',
      description:
        'Base is secured by the most widely traded Proof-of-Stake cryptocurrency',
      icon: Icon1,
      href: 'https://ethereum.org/en/',
      link: 'Ethereum',
    },
    {
      name: 'Access to Millions of Users',
      description:
        'Base L2 is incubated by Coinbase, one of the biggest names in crypto',
      icon: Icon2,
      href: 'https://www.coinbase.com/learn',
      link: 'Coinbase',
    },
    {
      name: 'Wallet-as-a-Service',
      description:
        'Allows us to tap into wallet infrastructure APIs to offer web3 wallets natively',
      icon: Icon4,
      href: 'https://www.coinbase.com/cloud/products/waas',
      link: 'Coinbase WaaS',
    },
    {
      name: 'Open Source',
      description:
        "Base is built on Optimism's OP stack where Coinbase will be on the core dev team",
      icon: Icon5,
      href: 'https://www.optimism.io/',
      link: 'Optimism',
    },
    {
      name: 'Committed to DeFi',
      description:
        'Coinbase has been very vocal about their passion for a decentralized future',
      icon: Icon6,
      href: 'https://base.org/about',
      link: 'About Base',
    },
  ];

  return (
    <>
      <NextSeo
        title="AI Gaming Platform | Rewardz® Network"
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

      <div className="banner-main-home flow-row relative isolate flex items-center pb-24 -mx-4 lg:pt-[96px] lg:-mt-[96px] md:-mx-6 md:px-12 lg:-mx-8 lg:px-16">
        <div className="mx-auto max-w-7xl w-full px-6 column flex-col lg:flex-row flex items-center lg:px-8">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl grow relative z-20">

            <div className="inline-flex items-center space-x-6">
                <span className="flex flex-row rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-indigo-500/20">
                  <Image
                    className="mr-1 inline"
                    src={BaseIcon.src}
                    alt="Base"
                    title="Base"
                    width={12}
                    height={12}
                  />
                  Base L2
                </span>
               <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span className="text-sm text-color4">Mainnet August 9th!</span>
              </span>
            </div>
            <h1 className="mt-6 text-4xl tracking-tight text-white sm:text-6xl">
              Built Different
            </h1>
            <p className="mt-6 max-w-[25em] text-lg leading-8 text-gray-300">
              Base is a security-first layer 2 for Ethereum with easy access to Coinbase web3 APIs
            </p>
            
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x562d8e607bed7fc183ca84c0362c853680b99638"
                target="_blank"
                className="primary-button text-md whitespace-nowrap px-12 py-3 text-center"
              >
                Buy RAYN
              </Link>
              <a
                href="#based"
                className="text-md mx-2 text-color1 leading-6 "
              >
                Why Base?
              </a>
            </div>
            <div className="mt-12 flex inline-flex flex-row">
              <Image
                className="mr-4"
                src={LogoIcon.src}
                alt="Rewardz® Automated Yield Network"
                title="Rewardz® Automated Yield Network"
                width={32}
                height={32}
              />
              <Image
                className="mr-4"
                src={BaseIcon.src}
                alt="Base"
                title="Base"
                width={32}
                height={32}
              />
              <Image
                className="mr-4"
                src={CbIcon.src}
                alt="Coinbase Wallet"
                title="Coinbase Wallet"
                width={32}
                height={32}
              />
              <Image
                className="mr-4"
                src={ClIcon.src}
                alt="Chainlink"
                title="Chainlink"
                width={28}
                height={28}
              />
              <Image
                className="mr-4"
                src={OpenAiIcon.src}
                alt="OpenAI"
                title="OpenAI"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="lg:mr-0 lg:max-w-[50%] flex row grow justify-center order-first lg:order-2 items-center pb-12 lg:py-24">

            <div className="mainvid">
              <video autoPlay loop muted className="mix-blend-screen md:-my-32 md:max-h-[500px] lg:max-h-[none]">  
                <source src="/assets/videos/forged_1.mp4" type="video/mp4" />
                <source src="/assets/videos/forged_1.webm" type="video/webm" />
{/*                 <source src="https://rewardz.network/videos/rain_2.webm" type="video/webm" /> */}
              </video>
            </div>

             {/* <Image
              src={RobotBanner.src}
              alt="Robot Banner"
              width={512}
              height={512}
              className="robotman mix-blend-screen glich"
            /> */}
          </div>
        </div>
      </div>


      <div id="grungerow" className="-mx-8 px-16 py-8 -mt-24 mb-24 relative">
        <Video />

        <div className="relative pt-12 pb-6 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 sm:mx-0 sm:rounded-md md:grid-cols-4">
            <div className=" bg-opacity-80 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Base.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className=" bg-opacity-80 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Coinbase.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className=" bg-opacity-80 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={OpenAi.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className=" bg-opacity-80 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Chainlink.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className=" bg-opacity-80 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={CoinGecko.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className=" bg-opacity-80 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Next.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className=" bg-opacity-80 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Zealy.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className=" bg-opacity-80 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Thirdweb.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
      </div>


      <h2 className="hype-1 text-[2em] md:text-[3em] font-semibold leading-7 text-color4 w-full text-center">
        Web3 Gamin<span className="hype-3">g</span>
      </h2>
      <p className="mt-2 text-4xl md:text-5xl text-light tracking-tight w-full text-center mb-10">
        Gaming Development
      </p>


{/*       <div id="cardroww" className="max-w-2xl mx-auto mb-12 rounded-lg w-full">
        <div className="relative mx-auto">
          <div className="relative ">
            <Image
              className="h-full w-full object-cover"
              src={Game1.src}
              alt=""
              width={1600}
              height={900}
            />
          </div>
          <div className="cardnote mx-auto max-w-4xl rounded-md bg-color6/90 absolute top-6 left-6 shadow-md">
            <div className="px-3 py-2 flex flex-row space-x-6 justify-start items-center">
              <div className="">
                <h2 className="text-xl md:text-xl text-light tracking-tight w-full mb-0 font-semibold text-light">
                  Growbotz <i className="text-xs text-white/50 inline font-normal">In Progress</i>
                </h2>
                <p className="text-sm leading-7 text-gray-300">
                  Farming for the green thumbs
                </p>
              </div>
              <div className="text-xs bg-white/20 text-center py-1 px-2 leading-1 rounded-full border border-white/30 flex flex-row items-center">
                Development <span className="w-[6px] h-[6px] ml-1 bg-green-400 rounded-full block"></span>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div id="cardrow" className="max-w-2xl mx-auto mb-12 rounded-lg w-full">
        <div className="relative mx-auto">
          <div className="relative ">
            <Image
              className="h-full w-full object-cover"
              src={Game5.src}
              alt=""
              width={1600}
              height={900}
            />
          </div>
          <div className="cardnote mx-auto max-w-4xl rounded-md bg-color6/90 absolute top-6 left-6 shadow-md">
            <div className="px-3 py-2 flex flex-row space-x-6 justify-start items-center">
              <div className="">
                <h2 className="text-xl md:text-xl text-light tracking-tight w-full mb-0 font-semibold text-light">
                  High Orbit <i className="text-xs text-white/50 inline font-normal">Seeking Investors</i>
                </h2>
                <p className="text-sm leading-7 text-gray-300">
                  A worms-like artillery battler
                </p>
              </div>
              <div className="text-xs bg-white/20 text-center py-1 px-2 leading-1 rounded-full border border-white/30 flex flex-row items-center">
                Funding <span className="w-[6px] h-[6px] ml-1 bg-red-400 rounded-full block"></span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Link
        href="/games"
        className="primary-button button-outline text-md whitespace-nowrap px-12 py-3 text-center inline mx-auto"
      >
        View Games
      </Link>







      <div id="based" className="relative pb-24 pt-40">
        <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="hype-1 text-[2em] md:text-[3em] font-semibold leading-7 text-color4 w-full text-center">
              Eth<span className="hype-2">e</span>r<span className="hype-3">e</span>um L2
            </h2>
            <p className="mt-2 text-4xl md:text-5xl text-light tracking-tight w-full text-center mb-10">
              Building on Base
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              With access to millions of users and a suite of onboarding tools,
              Coinbase&apos;s new Layer 2 was the obvious location for us
              to launch our platform
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-lg font-semibold leading-7 text-white">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-color8">
                      {/* <feature.icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                      <Image
                        alt="icon"
                        src={feature.icon}
                        width={48}
                        height={48}
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        target="_blank"
                        className="text-md font-semibold leading-6 text-color1"
                      >
                        {feature.link} ↗
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

{/*       <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="mx-auto -ml-8 w-full border-t border-indigo-900 pl-16" />
        </div>
      </div> */}

      <div className="-mr-8 pb-24 pr-16 relative">
        <div className="bg-spartan"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-row items-center">

            <div className="mx-auto max-w-2xl lg:mx-0 pt-24 pl-4">
              <h2 className="hype-1 text-[2em] md:text-[3em] font-semibold leading-7 text-color4 w-full">
                Security
              </h2>
              <p className="mt-2 text-3xl md:text-4xl text-light tracking-tight">
                Base has been meticulously designed to stand as a beacon of
                unity
              </p>
              <p className="mt-6 text-base leading-7">
                Bringing together the vital elements of the Coinbase
                community—its revolutionary products, dynamic users, and
                significant assets with rich developer tools to integrate and
                deploy in a secure way
              </p>
            </div>
          </div>
          <div className="chartcolumns mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="chartcol flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-md bg-color1 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="hype-1 text-[4em] flex-none font-bold tracking-tight text-white">
                $130 billion
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Assets on Coinbase
                </p>
                <p className="mt-2 text-base leading-7 text-indigo-200">
                  Base is an open ecosystem where anyone can integrate easily
                  with Coinbase products, users and assets
                </p>
              </div>
            </div>
            <div className="chartcol flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-md bg-color4 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
              <p className="hype-1 text-[4em] flex-none text-3xl font-bold tracking-tight text-white">
                110+ million
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Users on Coinbase
                </p>
                <p className="text-white/85 mt-2 text-base leading-7">
                  We can leverage Coinbase’s developer tools to make building
                  easy and reach Coinbase users
                </p>
              </div>
            </div>
            <div className="chartcol flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-md bg-color2 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="hype-1 text-[4em] flex-none text-3xl font-bold tracking-tight text-white">
                10<span className="text-[.5em] pl-1 inline-block">x</span>
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Cheaper than Layer 1
                </p>
                <p className="text-white/8 mt-2 text-base leading-7">
                  By bundling transactions we lower fees and improve UX
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-8 mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-4xl text-light tracking-tight sm:text-5xl">
                Blockchain Gaming
              </h2>
              <p className="mt-4 text-lg leading-8">
                Entertainment is a mostly untapped sector of web3 with huge
                potential
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-md text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-normal leading-6">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-medium tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <span className="block w-full pt-3 text-center text-xs text-white/30">
              State of Blockchain Gaming in Q1 2023 |{' '}
              <a
                href="https://dappradar.com/blog/state-of-blockchain-gaming-in-q1-2023"
                target="_blank"
              >
                DappRadar.com
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="-ml-8 mt-16 overflow-hidden py-16 pl-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="hype-1 text-[2em] md:text-[3em] leading-7 text-color4">
                  Platform
                </h2>
                <p className="text-3xl md:text-4xl font-normal mt-2 tracking-tight">
                  Ultimate Web3 Gateway
                </p>
                <p className="mt-6 text-lg leading-8">
                  The current blockchain gaming landscape is plagued by poor
                  user experiences and confusing fiat onramps
                </p>
                <dl className="featurelist mt-10 max-w-xl space-y-6 text-base leading-7 lg:max-w-none">
                  {features2.map((feature) => (
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
                  ))}
                </dl>
              </div>
            </div>
            <div className="masker flex items-center justify-center lg:order-first lg:-ml-32 lg:mr-16">
{/*               <Image
                src={Screen.src}
                alt="Product screenshot"
                className="mx-auto -mt-8 w-[44rem] min-w-[44rem] max-w-none sm:w-[44rem] lg:-mr-16 blender"
                width={1024}
                height={928}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
