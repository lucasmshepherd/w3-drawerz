import cn from 'classnames';
import { NextSeo } from 'next-seo';
import CoinSlider from '@/components/ui/coin-card';
//import OverviewChart from '@/components/ui/chats/overview-chart';
//import LiquidityChart from '@/components/ui/chats/liquidity-chart';
//import VolumeChart from '@/components/ui/chats/volume-chart';
import TopPools from '@/components/ui/top-pools';
//import TransactionTable from '@/components/transaction/transaction-table';
//import TopCurrencyTable from '@/components/top-currency/currency-table';
import Image from 'next/image';
import { coinSlideData } from '@/data/static/coin-slide-data';
import Avatar from '@/components/ui/avatar';
import Stats from '@/components/ui/stats';
import TopupButton from '@/components/ui/topup-button';
// static data
//import { authorData } from '@/data/static/author';
//images
import Coin from '@/assets/images/coin-60x.png';
import RaynToken from '@/assets/images/icon-round.png';
//import AnchorLink from '../ui/links/anchor-link';
//import BitcoinImage from '@/assets/images/coin/bitcoin.svg';
//import TetherImage from '@/assets/images/coin/tether.svg';
import { useContract, useContractRead, useAddress } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import LogoIcon from '@/assets/images/dropz-blue.svg';
import Icon1 from '@/assets/images/icons/icons_ethereum.svg';
import Icon2 from '@/assets/images/icons/icons_users.svg';
import Icon3 from '@/assets/images/icons/icons_cheaper.svg';
import Icon4 from '@/assets/images/icons/icons_wallet.svg';
import Icon5 from '@/assets/images/icons/icons_opensource.svg';
import Icon6 from '@/assets/images/icons/icons_defi.svg';
import Base from '@/assets/images/business/logos_base.svg';
import Coinbase from '@/assets/images/business/logos_coinbase.svg';
import Next from '@/assets/images/business/logos_next.svg';
import Chainlink from '@/assets/images/business/logos_chainlink.svg';
import CoinGecko from '@/assets/images/business/logos_coingecko.svg';
import Vercel from '@/assets/images/business/logos_vercel.svg';
import Thirdweb from '@/assets/images/business/logos_thirdweb.svg';
import OpenAi from '@/assets/images/business/logos_openai.svg';
import Zealy from '@/assets/images/business/logos_zealy.svg';
import LogoIconBlue from '@/assets/images/dropz-blue.svg';
import BaseIcon from '@/assets/images/base-logo-in-blue.svg';
import CbIcon from '@/assets/images/cb-wallet.svg';
import ClIcon from '@/assets/images/chainlink.svg';
import OpenAiIcon from '@/assets/images/openai-white.svg';
import { useEffect } from 'react';
import RobotBanner from '@/assets/images/content/armor2.jpg';
import RobotBanner2 from '@/assets/images/content/robo1.png';
import RuntzBanner from '@/assets/images/scanner3.jpg';
import Persons from '@/assets/images/scanner3.jpg';
import Screen from '@/assets/images/portal.jpg';
import BaseGlobe from '@/assets/images/content/base-logo-in-blue.webp';
import useBodyClass from '../use-body-class';
import Link from 'next/link';

export default function Home() {
  //useBodyClass('home');

  const stats = [
    { id: 1, name: 'Daily Unique Wallets', value: '791,474' },
    { id: 2, name: 'Invested in P2E Projects', value: '$739M+' },
    { id: 3, name: 'Virtual World Trade', value: '$350M' },
    { id: 4, name: 'Virtual Land Purchases', value: '143,000' },
  ];

  const benefits = [
    'Experience',
    'Personality',
    'Back Story',
    'Achievements',
    'Badges',
    'In-game Learning',
  ];

  const navigation = {
    solutions: [
      {
        name: 'Buy on Uniswap',
        href: 'https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x562d8e607bed7fc183ca84c0362c853680b99638',
      },
      {
        name: 'Token Contract',
        href: 'https://etherscan.io/token/0x562d8e607bed7fc183ca84c0362c853680b99638',
      },
      {
        name: 'CoinGecko Chart',
        href: 'https://www.coingecko.com/en/coins/rewardz-network',
      },
      {
        name: 'Locked Liquidity Pool',
        href: 'https://www.team.finance/view-coin/0x562D8e607bed7Fc183Ca84C0362c853680b99638?name=Rewardz%20Automated%20Yield%20Network&symbol=RAYN&chainid=0x1',
      },
    ],
    support: [
      { name: 'Whitepaper', href: 'https://docs.rewardz.network/' },
      {
        name: 'Roadmap',
        href: 'https://docs.rewardz.network/whitepaper/roadmap',
      },
      {
        name: 'RAYN Token',
        href: 'https://docs.rewardz.network/whitepaper/rayn',
      },
      {
        name: 'Token Supply',
        href: 'https://docs.rewardz.network/whitepaper/rayn/supply',
      },
    ],
    company: [
      {
        name: 'About',
        href: 'https://docs.rewardz.network/rewardz/community/core-team',
      },
      { name: 'Email', href: 'support@rewardz.network' },
      { name: 'Founder', href: 'https://leoblack.com' },
    ],
    legal: [
      { name: 'Contact', href: '../../../contact' },
      { name: 'Privacy', href: '../../../privacy' },
      { name: 'Terms', href: '../../../terms' },
    ],
    social: [
      {
        name: 'Telegram',
        href: 'https://t.me/rewardz_network',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 496 512" {...props}>
            <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
          </svg>
        ),
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/rewardz',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 640 512" {...props}>
            <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/rewardz_network',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/rewardz_network/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: 'https://github.com/rewardz-network',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/@rewardz.network',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  const features2 = [
    {
      name: 'Simplified Onboarding Process',
      description: '',
      icon: Icon2,
    },
    {
      name: 'Gasless Options',
      description: '',
      icon: Icon4,
    },
    {
      name: 'Seamless Transactions',
      description: '',
      icon: Icon4,
    },
    {
      name: 'Mobile Version',
      description: '',
      icon: Icon5,
    },
    {
      name: 'Free-to-Play Features',
      description: '',
      icon: Icon3,
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

      <div className="banner-main flow-row relative isolate flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:px-8">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
            <div className="mb-12 flex inline-flex flex-row">
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
            <div>
              <a
                href="#based"
                title="Base Layer-2 for Ethereum from Coinbase"
                className="inline-flex space-x-6"
              >
                <span className="flex flex-row rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-indigo-500/20">
                  <Image
                    className="mr-1 inline"
                    src={BaseIcon.src}
                    alt="Base"
                    title="Base"
                    width={12}
                    height={12}
                  />
                  Building on Base
                </span>
                {/* <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Just shipped v1.0</span>
                 <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
              </span> */}
              </a>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Discover Your Superpower with AI and Web3 Gaming
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our platform will offer not only entertainment, but also the
              education and protective mechanisms required in the web3 era
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x562d8e607bed7fc183ca84c0362c853680b99638"
                target="_blank"
                className="main-button text-md whitespace-nowrap px-12 py-3 text-center"
              >
                Buy Tokens
              </Link>
              <a
                href="#based"
                className="text-md mx-2 font-semibold leading-6 text-white"
              >
                Explore <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto lg:mr-0 lg:max-w-none lg:flex-none lg:pt-40">
            <Image
              src={RobotBanner.src}
              alt="Diamond Armor"
              width={934}
              height={1080}
              className="robotman"
            />
          </div>
        </div>
      </div>

      <div className="relative -mt-24 mb-32 pt-24" id="based">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-md md:grid-cols-4">
            <div className="bg-white/5 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Base.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/5 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Coinbase.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/5 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={OpenAi.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/5 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Chainlink.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/5 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={CoinGecko.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/5 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Next.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/5 p-4 sm:p-6">
              <Image
                className="max-h-16 w-full object-contain"
                src={Zealy.src}
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="bg-white/5 p-4 sm:p-6">
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

      <div className="under-fold relative py-24 sm:py-20">
        <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-color4">
              Secured by Ethereum
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Building on Base
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              With access to millions of users and a suite of onboarding tools,
              Coinbase&apos;s new Layer-2 (L2) was the obvious location for us
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
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-color1">
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
                        className="text-md font-semibold leading-6 text-indigo-400"
                      >
                        {feature.link} <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="mx-auto -mr-8 w-full border-t border-indigo-900 pr-16" />
        </div>
      </div>

      <div className="-mr-8 bg-spartan pb-24 pr-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-row items-center">
            {/*           <div className="relative">
            <div className="base-radar mx-auto px-6 lg:px-8">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Image
                src={BaseGlobe.src}
                alt="Base Globe"
                className="mx-auto"
                width={212}
                height={212}
              />
            </div>
          </div> */}

            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="mt-24 text-3xl font-bold tracking-tight sm:text-4xl">
                Base has been meticulously designed to stand as a beacon of
                unity
              </h2>
              <p className="mt-6 text-base leading-7">
                Bringing together the vital elements of the Coinbase
                community—its revolutionary products, dynamic users, and
                significant assets with rich developer tools to integrate and
                deploy in a secure way
              </p>
            </div>
          </div>
          <div className="chartcol mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
            <div className="chartcol flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-md bg-color1 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
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
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
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
            <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-md bg-color2 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
              <p className="flex-none text-3xl font-bold tracking-tight text-white">
                0
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold tracking-tight text-white">
                  Dapps on Mainnet
                </p>
                <p className="text-white/8 mt-2 text-base leading-7">
                  We are pioneering with Base and are patiently waiting for
                  mainnet to <i>launch!</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
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
                  <dt className="text-sm font-semibold leading-6 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
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

      <div className="-ml-8 overflow-hidden py-16 pl-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-color4">
                  RAYN Platform
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Ultimate Web3 Gateway
                </p>
                <p className="mt-6 text-lg leading-8">
                  The current blockchain gaming landscape is plagued by poor
                  user experiences and confusing fiat onramps
                </p>
                <dl className="mt-10 max-w-xl space-y-6 text-base leading-7 lg:max-w-none">
                  {features2.map((feature) => (
                    <div key={feature.name} className="relative flex flex-row">
                      <div className="mr-3 flex h-10 w-10 basis-10 items-center justify-center rounded-md bg-color1">
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
            <div className="flex items-center justify-center lg:order-first">
              <Image
                src={Screen.src}
                alt="Product screenshot"
                className="mx-auto -mt-8 w-[44rem] min-w-[44rem] max-w-none sm:w-[44rem] lg:-mr-16"
                width={1024}
                height={928}
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="mx-auto max-w-7xl py-8 sm:px-6 sm:py-4 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#27395c] px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bring your NFTs to life with Artificial Intelligence
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We tapped into OpenAI API and decided to hook it up to NFT
                traits and see what kind of crazy fun we can have
              </p>

              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <svg
                      className="checksvg fill-color1"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/*             <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                className="max-w-100 absolute left-0 top-0 w-[42rem] rounded-md lg:max-w-none"
                src={Persons.src}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <Image
              className="h-8 w-8"
              src={LogoIcon.src}
              alt="Company name"
              width={24}
              height={24}
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="font-semibold leading-6 text-white">Token</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="font-semibold leading-6 text-white">
                    Mission
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="font-semibold leading-6 text-white">Team</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target="_blank"
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="font-semibold leading-6 text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              <b>&copy;2023</b> Rewardz® Automated Yield Network &nbsp;|&nbsp;
              Powered by{' '}
              <a
                href="https://www.coingecko.com/en/coins/rewardz-network"
                target="_blank"
              >
                CoinGecko
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}