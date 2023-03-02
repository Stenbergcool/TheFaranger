import Link from 'next/link';
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import { useSpring, animated } from '@react-spring/web'

export default function Hero(){
  const springs = useSpring({
    from: { x: -10000 },
    to: { x: 0 },
    config: {mass:4, tension:100, friction:40}
  })
  return (
    <div className="flex justify-center bg-amber-200">
    <div className="flex justify-center h-24 md:h-56 max-w-7xl w-full items-center bg-amber-200">
      <animated.div
        style={{
          ...springs,
        }}
      >
        <h1 className='text-9xl font-extrabold text-slate-800 translate-y-4'>THE FARANGER</h1>
        </animated.div>
    </div>
    </div>
  );
};