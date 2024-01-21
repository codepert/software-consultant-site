'use client';
import { FaqSection } from '@/lib/content/Faq';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Wrapper } from '@/components';
import FaqCard from '@/components/faq/FaqCard';

import { getSectionAnimation } from '@/styles/animations';
import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Fragment } from 'react';

const Faq = () => {
  const [visible, setVisible] = useState<string>('');
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');

  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;
  return (
    <Wrapper
      id="faq"
      animate={false}
      {...getSectionAnimation}
      className="justify-center gap-6 mt-12 xs:gap-7 xs:mt-0 pt-32"
    >
      <motion.div
        variants={slideUp({ delay: getAnimationDelay(1) })}
        initial="hidden"
        animate="show"
        // {...getSectionAnimation}
      >
        <main className="">
          <div className="">
            <h1 className="mt-2 font-bold tracking-wide text-4xl text-white text-center">
              {FaqSection.title}
            </h1>
            <p className="text-center mt-3 text-primary">
              {FaqSection.description}
            </p>
            <div className="w-3/4 mx-auto mt-24">
              {FaqSection.items.map((accordionItem, id) => {
                return (
                  <Fragment key={id}>
                    <FaqCard
                      question={accordionItem.question}
                      answer={accordionItem.answer}
                      visible={visible}
                      setVisible={setVisible}
                    />
                  </Fragment>
                );
              })}
            </div>
          </div>
        </main>
      </motion.div>
    </Wrapper>
  );
};

export default Faq;
