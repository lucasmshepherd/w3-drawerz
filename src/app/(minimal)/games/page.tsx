'use client';

import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Game1 from '@/assets/images/games1.jpg';
import Game2 from '@/assets/images/games2.jpg';
import Game3 from '@/assets/images/games3.jpg';
import Game4 from '@/assets/images/games4.jpg';
import Game5 from '@/assets/images/games5.jpg';
import '@/assets/css/home.scss';
import useBodyClass from '@/components/use-body-class';
//import Link from 'next/link';
// gsap
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Games() {
  useBodyClass('games');

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#cardroww",
      start: "top 60%",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: "#cardrowww",
      start: "top 60%",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: "#cardrowwww",
      start: "top 60%",
      toggleClass: "active",
    });
    ScrollTrigger.create({
      trigger: "#cardrowwwww",
      start: "top 60%",
      toggleClass: "active",
    });
  }, []);


  return (
    <>
      <NextSeo
        title="Games | Rewardz® Network"
        description="AI Gaming Platform"
        canonical="https://rewardz.network/"
        openGraph={{
          url: 'https://rewardz.network',
          title: 'Games | Rewardz® Network',
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



      <h2 className="hype-1 mt-24 text-[2em] md:text-[3em] font-semibold leading-7 text-color4 w-full text-center">
        play-to-earn
      </h2>
      <p className="mt-2 text-4xl md:text-5xl font-light tracking-tight w-full text-center">
        Game Development
      </p>
      <p className="text-center text-sm mb-12 mt-2 italic text-white/70">*All development details are subject to change</p>

      <div className="max-w-4xl mx-auto mb-12 rounded-lg w-full">
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
                <h2 className="text-xl md:text-xl font-light tracking-tight w-full mb-0 font-semibold text-light">
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

      <div id="cardroww" className="max-w-4xl mx-auto mb-12 rounded-lg w-full">
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
                <h2 className="text-xl md:text-xl font-light tracking-tight w-full mb-0 font-semibold text-light">
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
      </div>

      <div id="cardrowww" className="max-w-4xl mx-auto mb-12 rounded-lg w-full">
        <div className="relative mx-auto">
          <div className="relative ">
            <Image
              className="h-full w-full object-cover"
              src={Game2.src}
              alt=""
              width={1600}
              height={900}
            />
          </div>
          <div className="cardnote mx-auto max-w-4xl rounded-md bg-color6/90 absolute top-6 left-6 shadow-md">
            <div className="px-3 py-2 flex flex-row space-x-6 justify-start items-center">
              <div className="">
                <h2 className="text-xl md:text-xl font-light tracking-tight w-full mb-0 font-semibold text-light">
                  Gemz <i className="text-xs text-white/50 inline font-normal">Not Started</i>
                </h2>
                <p className="text-sm leading-7 text-gray-300">
                  Limited access treasure hunting
                </p>
              </div>
              <div className="text-xs bg-white/20 text-center py-1 px-2 leading-1 rounded-full border border-white/30 flex flex-row items-center">
                Definition <span className="w-[6px] h-[6px] ml-1 bg-red-400 rounded-full block"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cardrowwww" className="max-w-4xl mx-auto mb-12 rounded-lg w-full">
        <div className="relative mx-auto">
          <div className="relative ">
            <Image
              className="h-full w-full object-cover"
              src={Game3.src}
              alt=""
              width={1600}
              height={900}
            />
          </div>
          <div className="cardnote mx-auto max-w-4xl rounded-md bg-color6/90 absolute top-6 left-6 shadow-md">
            <div className="px-3 py-2 flex flex-row space-x-6 justify-start items-center">
              <div className="">
                <h2 className="text-xl md:text-xl font-light tracking-tight w-full mb-0 font-semibold text-light">
                  Hashishin <i className="text-xs text-white/50 inline font-normal"></i>
                </h2>
                <p className="text-sm leading-7 text-gray-300">
                  Get paid for being a ninja
                </p>
              </div>
              <div className="text-xs bg-white/20 text-center py-1 px-2 leading-1 rounded-full border border-white/30 flex flex-row items-center">
                Discovery <span className="w-[6px] h-[6px] ml-1 bg-red-400 rounded-full block"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cardrowwwww" className="max-w-4xl mx-auto mb-12 rounded-lg w-full">
        <div className="relative mx-auto">
          <div className="relative ">
            <Image
              className="h-full w-full object-cover"
              src={Game4.src}
              alt=""
              width={1600}
              height={900}
            />
          </div>
          <div className="cardnote mx-auto max-w-4xl rounded-md bg-color6/90 absolute top-6 left-6 shadow-md">
            <div className="px-3 py-2 flex flex-row space-x-6 justify-start items-center">
              <div className="">
                <h2 className="text-xl md:text-xl font-light tracking-tight w-full mb-0 font-semibold text-light">
                  After Party <i className="text-xs text-white/50 inline font-normal"></i>
                </h2>
                <p className="text-sm leading-7 text-gray-300">
                  A night club all to yourself
                </p>
              </div>
              <div className="text-xs bg-white/20 text-center py-1 px-2 leading-1 rounded-full border border-white/30 flex flex-row items-center">
                Discovery <span className="w-[6px] h-[6px] ml-1 bg-gray-600 rounded-full block"></span>
              </div>
            </div>
          </div>
        </div>
      </div>










    </>
  );
}
