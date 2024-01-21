'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';
import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import svg from '~/line.svg';
const FV = () => {
  const { title, description } = heroSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');

  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return domLoaded ? (
    <Wrapper
      id="about"
      {...getSectionAnimation}
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
    >
      <div className="space-y-4 text-center gap-16 ">
        <div className="text-4xl font-bold tracking-tighter md:text-7xl">
          <motion.h1
            variants={slideUp({ delay: getAnimationDelay(3) })}
            initial="hidden"
            animate="show"
            className="text-slate-900 text-7xl dark:text-slate-200 capitalize mb-2 leading-[1.1]"
          >
            {title.map((item, i) => (
              <p key={i} className="mt-1 tracking-wide ">
                {item}
              </p>
            ))}
          </motion.h1>
        </div>
        <div className="text-2xl font-bold tracking-tighter md:text-2xl"></div>
        <motion.p
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-base md:text-xl text-primary"
        >
          {description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </motion.p>
      </div>
      <div className="text-center mt-7 relative">
        <div className="z-40 relative">
          <button className="bg-white py-2 px-6 text-black rounded-lg text-sm">
            View Plans
          </button>
          <button className="ml-3 py-2 px-6 text-white border border-zinc-800 bg-zinc-950 rounded-lg text-sm">
            Contact us
          </button>
        </div>
        <Image src={svg} alt="line" className="absolute top-5" />
      </div>
    </Wrapper>
  ) : (
    <></>
  );
};

export default FV;
