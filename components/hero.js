import Link from 'next/link';
import { Menu } from '@headlessui/react'
import Image from 'next/image'

export default function Hero(){
  return (
    <div className="flex justify-center">
    <div className="flex justify-center h-72 max-w-7xl">
        <Image src="/thailandhero.jpg" alt="Hero image of thailand" width="1420" height="500" className="rounded-sm"/>
    </div>
    </div>
  );
};