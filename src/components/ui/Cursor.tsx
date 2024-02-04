'use client';
import { useEffect, useState } from 'react';

type Props = {
  className?: string;
};
const Cursor = ({ className = '' }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // window.addEventListener('load', () => {
  //   cursorOutlineSize = cursorOutline.offsetWidth;
  // });

  const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener('mousemove', onMouseMove);
  };

  const onMouseMove = (e: MouseEvent) => {
    // eslint-disable-next-line no-debugger
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={` fixed z-40 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch ${className} rounded-full bg-white`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: 10,
        height: 10,
      }}
    ></div>
  );
};

export default Cursor;
