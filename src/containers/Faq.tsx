'use client';
import { FaqSection } from '@/lib/content/Faq';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import FaqCard from '@/components/faq/FaqCard';

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
    <motion.div
      variants={slideUp({ delay: getAnimationDelay(3) })}
      initial="hidden"
      animate="show"
      className="py-32"
    >
      <main className="">
        <div className="=">
          <h1 className="mt-2 tracking-wide text-4xl text-white text-center">
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
  );
};

export default Faq;
