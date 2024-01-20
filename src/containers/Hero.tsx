'use client';
import { heroSection } from '@/lib/content/hero';
import ReactTyped from 'react-typed';

import { AuthorImage, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';
import { author } from '@/lib/content/portfolio';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText, img } =
    heroSection;
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
      className="justify-center  gap-6 mt-12 xs:gap-7 xs:mt-0 pt-32"
    >
      <main className="">
        <div className="space-y-4 text-center">
          <div className="text-4xl font-bold tracking-tighter md:text-7xl">
            <motion.h1
              variants={slideUp({ delay: getAnimationDelay(1) })}
              initial="hidden"
              animate="show"
              className="text-slate-900 text-[72px] dark:text-slate-200 capitalize mb-2 leading-[1.1]"
            >
              {title.map((item, i) => (
                <p key={i} className="mt-2 tracking-wide">
                  {item}
                </p>
              ))}
            </motion.h1>
          </div>
          <div className="text-2xl font-bold tracking-tighter md:text-2xl"></div>
          <motion.p
            variants={slideUp({ delay: getAnimationDelay(3) })}
            initial="hidden"
            animate="show"
            className="text-base md:text-lg"
          >
            {description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.p>
        </div>
        <div className="text-center mt-7">
          <button className="bg-white py-2 px-5 text-black border-2 rounded-lg">
            View Plans
          </button>
          <button className="ml-3 py-2 px-5 text-white border-white border-2 rounded-lg">
            Contact us
          </button>
        </div>
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default Hero;
