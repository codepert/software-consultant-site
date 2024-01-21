// import  from ''
// import Image from 'next/image';
interface AccordionProps {
  question: string;
  answer: string;
  visible: string;
  setVisible: (name: string) => void;
}
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';
const Accordion = ({
  question,
  answer,
  visible,
  setVisible,
}: AccordionProps) => {
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');

  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;
  const handleClick = (question: string) => {
    if (visible === question) {
      setVisible('');
    } else {
      setVisible(question);
    }
  };

  return (
    <div className="mt-5 bg-zinc-900 py-7 px-12 rounded-lg">
      <div
        onClick={() => handleClick(question)}
        className="flex flex-row items-center gap-x-8 cursor-pointer justify-between "
      >
        <h2 className="text-white text-lg">{question}</h2>

        {visible === question ? (
          <span>
            {/* <Image src={Arrow} alt="" className="rotate-180 duration-500" /> */}
            +
          </span>
        ) : (
          <span>{/* <Image src={Arrow} alt="" /> */}-</span>
        )}
      </div>
      {visible === question ? (
        <p className="text-sm duration-700 delay-150 mt-3">{answer}</p>
      ) : null}
    </div>
  );
};

export default Accordion;
