'use client';
import { ServiceType } from '@/lib/types';

import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

const ServiceCard = ({
  title,
  content,
  ...rest
}: ServiceType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div
      {...rest}
      className="w-full mt-1 bg-zinc-900 rounded-xl h-[200px] py-9 px-8 space-y-1  text-left border border-zinc-800"
    >
      <div className="flex items-center justify-between"></div>
      <h4 className="font-medium capitalize duration-200 group-hover:text-accent text-white text-2xl">
        {title}
      </h4>
      <p className="text-sm py-3 text-primary">{content}</p>
    </motion.div>
  ) : (
    <></>
  );
};

export default ServiceCard;
