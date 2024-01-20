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

const Intro = () => {
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
      className="justify-center gap-6 xs:gap-7  mt-28"
    >
      <main className="">
        <div className="bg-black-secondary w-full h-[545px]">
          <h1>DESIGN HERE SOON</h1>
        </div>
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default Intro;
