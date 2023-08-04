'use client';

import Image from 'next/image';
import useBodyClass from '../use-body-class';
//import Thumbs from '@/assets/images/main-bg.jpg';
import { useEffect } from 'react';
import Link from 'next/dist/client/link';
import { LongArrowRight } from '@/components/icons/long-arrow-right';
import '@/assets/css/splash.scss';

export default function Splash() {
  useBodyClass('welcome');



  /*--------------------
Vars
--------------------*/
/* let progress = 50
let startX = 0
let active = 0
let isDown = false */

/*--------------------
Contants
--------------------*/
/* const speedWheel = 0.02
const speedDrag = -0.1
 */
/*--------------------
Get Z
--------------------*/
/* const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))
 */
/*--------------------
Items
--------------------*/
/* const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
} */

/*--------------------
Animate
--------------------*/
/* const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate() */

/*--------------------
Click on Items
--------------------*/
/* $items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
}) */

/*--------------------
Handlers
--------------------*/
/* const handleWheel = e => {
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
} */

/*--------------------
Listeners
--------------------*/
/* document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp) */



  return (
    <>
	
		<div className="intro">
		<div className="glitch">
			<div className="glitch-1"></div>

			<div className="glitch-3"></div>
			<div className="glitch_img"></div>
			<div className="jm"> 雨来了</div>
		</div>
	</div>

	<div className="splashtitle">
		<div className="text-md tracking-tight font-light p-8 md:basis-3/4 text-center md:text-left">
			The Rewardz® Network uses cookies to track basic analytical data in order to maintain an optimized browsing experience for users
			<hr className="my-2 opacity-20"/>
			The media, content and links on this site should not be considered financial advice, always do proper research before investing
		</div>
		<div className="md:basis-1/4 basis-[100%] text-center">
			<Link
				type="button"
				href="/minimal"
				className="inline-flex items-center gap-x-2 rounded-md bg-color1 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Explore
				<LongArrowRight className="-mr-0.5 h-5 w-5" aria-hidden="true" />
			</Link>
		</div>
	</div>

{/*     <div className="carousel">
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
<div className="cursor cursor2"></div> */}

    </>
  );
}
