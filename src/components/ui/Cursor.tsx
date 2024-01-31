'use client';
import { useEffect, useState } from 'react';

type Props = {
  className?: string;
};
const cursorDot: HTMLElement | null = document.querySelector('[data-cursor]');
const cursorOutline: HTMLElement = document.createElement('div');

let outlineDelay: number | null;
cursorDot?.classList.add('cursor-dot');
cursorOutline.classList.add('cursor-outline');
// let cursorOutlineSize: number = 30;
cursorDot?.after(cursorOutline);

if (cursorDot && 'getAttribute' in cursorDot) {
  outlineDelay = Number(cursorDot.getAttribute('data-cursor-delay'));
}

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
    const posX: number = e.clientX;
    const posY: number = e.clientY;
    // eslint-disable-next-line no-debugger
    if (cursorDot && cursorOutline) {
      if ('style' in cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
      }

      if (outlineDelay) {
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: outlineDelay, fill: 'forwards' }
        );
      } else {
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 300, fill: 'forwards' }
        );
      }
    }
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        className={` fixed w-[100%] h-[140%] z-30 transition duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-torch ${className}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
      <div
        className="cursor-dot "
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
