import Link from 'next/link';
import { Menu } from '@headlessui/react'
import Image from 'next/image'

export default function Navbar(){
    function menuDropper() {
        let menu = document.getElementById("menu")
        if(menu.classList.contains("hidden")) {
            menu.classList.remove("hidden")
        } else {
            menu.classList.add("hidden")
        }
    }
  return (
    <div className="flex justify-center">
    <nav className="flex items-center justify-between flex-wrap w-full bg-white p-6 lg:max-w-7xl bg-slate-800">
        <div className="lg:w-full justify-between lg:flex-grow lg:items-center md:z-auto md:static text-white">
            <Link href="/" className=" mt-2 lg:inline-block lg:mt-0  mr-4 text-2xl font-bold lg:float-left">
                The Faranger
            </Link>
            <div className="text-sm mt-1 flex-grow" id="menu">
            <Menu as="div" className="relative lg:inline-block lg:text-left text-right">
                <Menu.Button className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl"
                >
                Places
                </Menu.Button>
                <Menu.Items className=" md:absolute left-20 md:left-0 mt-2 w-24 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                    <Menu.Item className="block hover:underline">
                        <Link href="/city/bangkokArticle">
                        Bangkok
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline">
                        <Link href="/city/pattayaArticle">
                        Pattaya
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline">
                        <Link href="/city/huahinArticle">
                        Hua Hin
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline">
                        <Link href="/city/chiangmaiArticle">
                        Chiang mai
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline">
                        <Link href="/city/islandArticle">
                        Islands
                        </Link>
                    </Menu.Item>
                </div>
                </Menu.Items>
            </Menu>
            <Menu as="div" className="relative lg:inline-block text-left">
                <Menu.Button className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl"
                >
                Travel tips
                </Menu.Button>
                <Menu.Items className=" md:absolute left-20 md:left-0 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                    <Menu.Item className="block hover:underline">
                        <Link href="/traveltips/visa">
                        Visa
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline">
                        <Link href="/traveltips/airport">
                        Airport guides
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline">
                        <Link href="/traveltips/currency">
                        Currency
                        </Link>
                    </Menu.Item>
                </div>
                </Menu.Items>
            </Menu>
            <Link href="/food/overview" className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl">
                Food
            </Link>
            <Link href="/info/contact" className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl lg:float-right font-bold">
                Contact
            </Link>
            </div>
        </div>
        <span className="inline-block cursor-pointer float-right lg:hidden right-4 absolute" onClick={(e) => {menuDropper()}}>
                <Image src="/menu.png" alt="hamburger menu" width="40" height="40" className="rounded-sm"/>
        </span>
    </nav>
    </div>
  );
};