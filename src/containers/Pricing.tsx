import { PricingSection } from '@/lib/content/pricing';
// import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Wrapper } from '@/components';
import { ServiceCard } from '@/components';
import PricingCard from '@/components/Pricing/PricingCard';

import { getSectionAnimation } from '@/styles/animations';
import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';

const Pricing = () => {
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
      <div className="space-y-4 ">
        <div className="font-bold tracking-tighter md:text-xl flex flex-col">
          {/* <motion.h1
            variants={slideUp({ delay: getAnimationDelay(1) })}
            initial="hidden"
            animate="show"
            className="text-slate-900 text-[72px] dark:text-slate-200 capitalize mb-2 leading-[1.1]"
          > */}

          <p className="mt-2 tracking-wide text-4xl text-white text-center">
            {PricingSection.title}
          </p>
          <p className="text-center mt-5 text-primary">
            {PricingSection.description}
          </p>
          <div className="grid gap-5 grid-cols-auto-232 mt-14">
            {PricingSection.items.map((item, i) => (
              <PricingCard
                title={item.title}
                discountPrice={item.discountPrice}
                price={item.price}
                plan={item.plan}
                index={i}
                key={i}
              ></PricingCard>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
