
'use client'

import { useEffect } from 'react';
import Image from 'next/image';
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
gsap.registerPlugin(ScrollTrigger);

export default function IndexPageMinimal() {

  const features2 = [
    {
      name: 'Staking System',
      description: '',
      icon: Icon10,
    },
    {
      name: 'Photos and Grants',
      description: '',
      icon: Icon9,
    },
    {
      name: 'Event Access',
      description: '',
      icon: Icon7,
    },
    {
      name: 'VIP Whitelists',
      description: '',
      icon: Icon10,
    },
  ];

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".featurelist",
      start: "top 65%",
      toggleClass: "active",
    });
  }, []);

  return (
    <>
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

            </div>
          </div>
        </div>
      </div>
    </>
  )
}