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
    <motion.div {...rest} className="w-full max-w-[350px] mt-12">
      <div className="overflow-hidden "></div>
      <div className="p-4 py-5 space-y-1 bg-zinc-900 rounded-xl  h-[180px]">
        <div className="flex items-center justify-between"></div>
        <h4 className="font-medium capitalize duration-200 group-hover:text-accent">
          <p className="text-center font-bold text-white">{title}</p>
        </h4>
        <p className="text-base">{content}</p>
      </div>
    </motion.div>
  ) : (
    <></>
  );
};

export default ServiceCard;
