'use client';
import { PricingType } from '@/lib/types';

import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

const PricingCard = ({
  title,
  discountPrice,
  price,
  plan,
  index,
  ...rest
}: PricingType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  let boxClassName = 'bg-zinc-900 mt-4';
  let buttonClassName = 'bg-blue-600 text-white';
  let textColorClassName = '';

  if (index == 1) {
    boxClassName = 'bg-blue-600';
    buttonClassName = 'bg-white text-blue-600';
    textColorClassName = 'text-white';
  }

  // eslint-disable-next-line no-console
  return domLoaded ? (
    <motion.div
      {...rest}
      className={`w-full max-w-[350px] h-[433px] border border-zinc-800 ${boxClassName} rounded-xl relative`}
    >
      <div className="px-6 py-6 space-y-1 ">
        <h4 className="font-bold capitalize duration-200 group-hover:text-accent text-white text-xl">
          {title}
        </h4>
        <p className="text-sm  line-through">{discountPrice}</p>
        <p className="text-4xl text-white">{price}</p>
        <div className="mt-6">
          <ul className="list-disc ml-4 text-sm text-primary">
            {plan.map((item, i) => (
              <li key={i} className={`leading-7 ${textColorClassName}`}>
                {' '}
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center absolute bottom-5 w-[calc(100%-47px)]">
          <button
            className={`${buttonClassName} py-3 px-5 rounded-lg w-full text-base`}
          >
            Get Stated
          </button>
        </div>
      </div>
    </motion.div>
  ) : (
    <></>
  );
};

export default PricingCard;
