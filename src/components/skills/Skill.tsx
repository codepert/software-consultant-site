'use client';
import { SoftwareSkillType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';

import { ListItem, ShowLottie, SkillIcon } from '@/components';

import { motion, MotionProps } from 'framer-motion';

type Props = {
  lottie?: any;
  title: string;
  skills: SoftwareSkillType[];
  points: string[],
  className?: string;
} & MotionProps;

const Skill = ({
  lottie,
  title,
  skills,
  points,
  className = '',
  ...rest
}: Props) => {
  return (
    <motion.div
      className={` gap-8 sm:gap-10 items-left mb-10 ${className}`}
      {...rest}
    >
      {/* Left */}
      <div className="font-mono text-xs sm:text-sm justify-start ">
        <h3 className="mb-5 text-2xl text-left sm:text-3xl">
          {title}
        </h3>
      </div>
      <div key={getId()} className="p-1 flex flex-row gap-2">
        {skills.map(({ name, icon }) => (
          <SkillIcon key={getId()} src={icon} name={name} />
        ))}
        {/* <ul className="space-y-2 text-base">
          {points.map((point) => (
            <ListItem key={getId()}>{point}</ListItem>
          ))}
        </ul> */}
      </div>
    </motion.div>
  );
};

export default Skill;