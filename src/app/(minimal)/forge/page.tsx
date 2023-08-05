'use client';

import Link from 'next/link';
import Image from 'next/image';
import Gemz1 from '@/assets/images/loot/gemcard_amethyst.jpg';
import Gemz2 from '@/assets/images/loot/gemcard_bag.jpg';
import Gemz3 from '@/assets/images/loot/gemcard_peridot.jpg';
import Gemz4 from '@/assets/images/loot/gemcard_seed.jpg';
import Gemz5 from '@/assets/images/loot/gemcard_sludgegem.jpg';
import Gemz6 from '@/assets/images/loot/gemcard_pearl.jpg';
import Gemz7 from '@/assets/images/loot/gemcard_onyx.jpg';
import Gemz8 from '@/assets/images/loot/gemcard_box.jpg';
import LogoIcon from '@/assets/images/logo-sm.png';
import useBodyClass from '@/components/use-body-class';
import '@/assets/css/home.scss';
import '@/assets/css/forge.scss';

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
            <h1 className="mt-6 text-4xl tracking-tight text-light sm:text-6xl">
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








    </>
  );
}
