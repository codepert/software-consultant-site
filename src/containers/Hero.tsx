'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const Hero = () => {
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper
      id="about"
      {...getSectionAnimation}
      className="py-24 md:py-32 gap-6 mt-12 xs:gap-7 xs:mt-0"
    >
      <div className="bg-black-secondary w-full max-w-[925px] mx-auto h-[545px] leading-[545px] text-center mt-24">
        <h1 className="text-5xl leading-[545px] text-white animate-pulse">
          DESIGN HERE SOON
        </h1>
      </div>
    </Wrapper>
  ) : (
    <></>
  );
};

export default Hero;
