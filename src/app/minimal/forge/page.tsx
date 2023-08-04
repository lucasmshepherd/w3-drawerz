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
import ClIcon from '@/assets/images/chainlink.svg';
import OpenAiIcon from '@/assets/images/openai-white.svg';
import LogoIcon from '@/assets/images/logo-sm.png';
import '@/assets/css/home.scss';
import '@/assets/css/forge.scss';
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useBodyClass from '@/components/use-body-class';

export default function NFT() {
  useBodyClass('forge');

  /*--------------------
  Vars
  --------------------*/
  let progress = 50
  let startX = 0
  let active = 0
  let isDown = false

  /*--------------------
  Contants
  --------------------*/
  const speedWheel = 0.02
  const speedDrag = -0.1

  /*--------------------
  Get Z
  --------------------*/
  const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

  /*--------------------
  Items
  --------------------*/
  const $items = document.querySelectorAll('.carousel-item')
  const $cursors = document.querySelectorAll('.cursor')

  const displayItems = (item, index, active) => {
    const zIndex = getZindex([...$items], active)[index]
    item.style.setProperty('--zIndex', zIndex)
    item.style.setProperty('--active', (index-active)/$items.length)
  }

  /*--------------------
  Animate
  --------------------*/
  const animate = () => {
    progress = Math.max(0, Math.min(progress, 100))
    active = Math.floor(progress/100*($items.length-1))
    
    $items.forEach((item, index) => displayItems(item, index, active))
  }
  animate()

  /*--------------------
  Click on Items
  --------------------*/
  $items.forEach((item, i) => {
    item.addEventListener('click', () => {
      progress = (i/$items.length) * 100 + 10
      animate()
    })
  })

  /*--------------------
  Handlers
  --------------------*/
  const handleWheel = e => {
    const wheelProgress = e.deltaY * speedWheel
    progress = progress + wheelProgress
    animate()
  }

  const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
      $cursors.forEach(($cursor) => {
        $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      })
    }
    if (!isDown) return
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
    const mouseProgress = (x - startX) * speedDrag
    progress = progress + mouseProgress
    startX = x
    animate()
  }

  const handleMouseDown = e => {
    isDown = true
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
  }

  const handleMouseUp = () => {
    isDown = false
  }

  /*--------------------
  Listeners
  --------------------*/
  document.addEventListener('mousewheel', handleWheel)
  document.addEventListener('mousedown', handleMouseDown)
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  document.addEventListener('touchstart', handleMouseDown)
  document.addEventListener('touchmove', handleMouseMove)
  document.addEventListener('touchend', handleMouseUp)

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
                  &nbsp; Arcane Forge
                </span>
               {/* <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span className="text-sm text-color4">Minting Now!</span>
              </span> */}
            </div>
            <h1 className="mt-6 text-4xl font-light tracking-tight text-white sm:text-6xl">
              Daily Quests
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Access for RAYN Token and Runtz NFT holders
            </p>
            
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href=""
                
                className="primary-button button-disabled text-md whitespace-nowrap px-12 py-3 text-center"
              >
                Coming Soon
              </Link>
            </div>
          </div>
          <div className="lg:mr-0 lg:max-w-none flex row grow justify-center order-first lg:order-2 items-center py-24">


            <div className="card-main">
          
              <div className="card-front">
                <div className="chip">
                  <svg role="img" viewBox="0 0 100 100" aria-label="Chip">
                    <use href="#chip-lines" />
                  </svg>
                </div>
                <svg className="contactless" role="img" viewBox="0 0 24 24" aria-label="Contactless">
                  <use href="#contactless" />
                </svg>
              </div>
              
            </div>

{/*             <Image
              src={RobotBanner.src}
              alt="Robot Banner"
              width={934}
              height={1080}
              className="robotman"
            /> */}
          </div>
        </div>
      </div>





<div className="carousel -mx-8 px-16 bg-color5 relative"> 
  <span className="absolute top-6 right-6 px-3 py-2">DEMO</span>
	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Paris</div>
			<div className="num">01</div>
			<img src="https://rewardz.network/images/1.jpg" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Warsaw</div>
			<div className="num">02</div>
			<img src="https://rewardz.network/images/2.jpg" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Madrid</div>
			<div className="num">03</div>
			<img
				src="https://rewardz.network/images/3.jpg"
			/>
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Sydney</div>
			<div className="num">04</div>
			<img src="https://rewardz.network/images/4.jpg" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Istanbul</div>
			<div className="num">05</div>
			<img src="https://rewardz.network/images/5.jpg" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Prague</div>
			<div className="num">06</div>
			<img src="https://rewardz.network/images/6.jpg" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Munich</div>
			<div className="num">07</div>
			<img src="https://rewardz.network/images/7.jpg" />
		</div>
	</div>

	<div className="carousel-item">
		<div className="carousel-box">
			<div className="title">Venice</div>
			<div className="num">08</div>
			<img src="https://rewardz.network/images/8.jpg" />
		</div>
	</div>
</div>

<div className="cursor"></div>
<div className="cursor cursor2"></div>



    </>
  );
}
