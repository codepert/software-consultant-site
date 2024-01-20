'use client';
import { skillsSection } from '@/lib/content/skills';
import { useTheme } from '@/lib/hooks/use-theme';

import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';
import { slideUp } from '@/styles/animations';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { motion } from 'framer-motion';
const Skills = () => {
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();
  
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');

  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
  DEFAULT_ANIMATION_DELAY + increment * i;
  
  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <div className='max-w-5xl text-4xl md:text-7xl'>
        <h1 className="text-left text-4xl heading-secondary text-white font-bold">{title}</h1>
      </div>
      <div className="space-y-32">
      
        <div {...getSectionAnimation}>
            {skills.map(({ id, title, lottie, softwareSkills, points}) => (
              <Skill
                key={id}
                lottie={lottie[isDarkMode ? 'dark' : 'light']}
                skills={softwareSkills}
                title={title}
                points = {points}
                {...getSectionAnimation}
              />
            ))} 
        </div>
      </div>
    </Wrapper>
  );
};

export default Skills;
