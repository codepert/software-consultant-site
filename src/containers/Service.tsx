import { heroSection } from '@/lib/content/hero';
import { ServiceSection } from '@/lib/content/service';
// import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Wrapper } from '@/components';
import { ServiceCard } from '@/components';

import { getSectionAnimation } from '@/styles/animations';
import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';

const Service = () => {
  const { title } = heroSection;
  // const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  // const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;
  // const getAnimationDelay = (i: number, increment = 0.15) =>
  // DEFAULT_ANIMATION_DELAY + increment * i;
  return (
    <Wrapper
      id="about"
      {...getSectionAnimation}
      className="justify-center  gap-6 mt-12 xs:gap-7 xs:mt-0 pt-32"
    >
      <div className="space-y-4 text-center">
        <div className="font-bold tracking-tighter md:text-xl flex flex-col">
          {/* <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="text-slate-900 text-[72px] dark:text-slate-200 capitalize mb-2 leading-[1.1]"
          > */}

          <p className="mt-2 tracking-wide text-4xl text-white">
            {ServiceSection.title[0]}&nbsp;&nbsp;
            <span className="text-blue-500">{ServiceSection.title[1]}</span>
          </p>
          {ServiceSection.description.map((item, i) => (
            <div key={i} className="mt-2 tracking-wide text-xl">
              {item}
            </div>
          ))}
          <div className="grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center">
            {ServiceSection.items.map((item, i) => (
              <div key={i} className="mt-2 tracking-wide text-xl">
                <ServiceCard title={item.title} content={item.content} />
              </div>
            ))}
          </div>
          <div className="text-center py-2 mt-10">
            <button className="py-2 px-5 bg-white text-black text-sm rounded-full">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Service;
