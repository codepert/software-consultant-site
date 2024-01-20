'use client';
import { TabList, Wrapper } from '@/components';

import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <Wrapper id="experience" {...getSectionAnimation}>
      <motion.section className="max-w-3xl py-2" {...getSectionAnimation}>
        <h2 className="heading-secondary">{experienceSection.title}</h2>
        <TabList experiences={experienceSection.experiences} />
      </motion.section>
    </Wrapper>
  );
};

export default Experience;
