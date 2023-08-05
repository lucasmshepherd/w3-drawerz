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
		<div className="text-md tracking-tight text-light p-8 md:basis-3/4 text-center md:text-left">
			The Rewardz® Network uses cookies to track basic analytical data in order to maintain an optimized browsing experience for users
			<hr className="my-2 opacity-20"/>
			The media, content and links on this site should not be considered financial advice, always do proper research before investing
		</div>
		<div className="md:basis-1/4 basis-[100%] text-center">
			<Link
				type="button"
				href="/home"
				className="inline-flex items-center gap-x-2 rounded-md bg-color1 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Explore
				<LongArrowRight className="-mr-0.5 h-5 w-5" aria-hidden="true" />
			</Link>
		</div>
	</div>

    </>
  );
}
