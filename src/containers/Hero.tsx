'use client';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    // <Wrapper
    //   id="about"
    //   {...getSectionAnimation}
    //   className="py-24 md:py-32 gap-6 mt-12 xs:gap-7 xs:mt-0"
    // >
    <div className="flex flex-col justify-center h-full min-h-screen  w-full max-w-[1150px] mx-auto mt-24">
      {/* <p className="text-3xl leading-[545px]  text-white animate-pulse">
        DESIGN HERE SOON
      </p> */}
      <div className="lg:flex lg:space-x-3 ">
        <div className="lg:w-3/5 w-full h-[424px]  bg-black-secondary rounded-xl relative mt-2">
          <span className="inline-flex rounded-xl bg-black-primary px-4 py-2 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 mt-2 lg:ml-2">
            App design
          </span>
          <Image
            src="/svgs/phone.svg"
            alt="phone image"
            width={600}
            height={400}
            className="absolute left-0 top-1 w-[680px] h-[424px] "
          />
        </div>
        <div className="lg:shrink lg:w-2/5 w-full h-[424px]    bg-black-secondary rounded-xl relative mt-2">
          <span className="inline-flex rounded-xl bg-black-primary px-4 py-2 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 mt-2 lg:ml-2">
            Web design
          </span>
          <Image
            src="/svgs/laptop.svg"
            alt="phone image"
            width={600}
            height={400}
            className="absolute left-0 top-1 w-[680px] h-[424px]"
          />
        </div>
      </div>
      <div className="lg:flex  lg:space-x-3 mt-3">
        <div className="flex-none xl:w-1/4 w-full h-[400px]  bg-black-secondary rounded-xl relative">
          <span className="inline-flex rounded-xl bg-black-primary px-4 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 mt-2 lg:ml-2">
            App design
          </span>
        </div>
        <div className=" xl:w-1/2 w-full h-[400px]  bg-black-secondary rounded-xl">
          <span className="inline-flex rounded-xl bg-black-primary px-4 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 mt-2 lg:ml-2">
            Web design
          </span>
        </div>
        <div className=" xl:w-1/4 w-full h-[400px]  bg-black-secondary rounded-xl ">
          <span className="inline-flex rounded-xl bg-black-primary px-4 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 mt-2 lg:ml-2">
            Web design
          </span>
        </div>
      </div>
    </div>
  ) : (
    // </Wrapper>
    <></>
  );
};

export default Hero;
