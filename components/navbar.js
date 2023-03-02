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
    <div className="sticky top-0 z-50 flex justify-center bg-red-500">
    <nav className="flex items-center justify-between flex-wrap w-full p-6 lg:max-w-7xl bg-red-500">
        <div className="lg:w-full justify-between lg:flex-grow lg:items-center md:z-auto md:static">
            <Link href="/" className=" mt-2 lg:inline-block lg:mt-0  mr-4 text-2xl font-bold lg:float-left text-slate-800">
                FARANGER
            </Link>
            <div className=" mt-1 flex-grow" id="menu">
            <Menu as="div" className="relative lg:inline-block lg:text-left text-right">
                <Menu.Button className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl text-slate-800"
                >
                Places
                </Menu.Button>
                <Menu.Items className=" md:absolute rounded-none left-20 md:left-0 mt-2 w-24 divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                    <Menu.Item className="block hover:underline text-slate-800">
                        <Link href="/city/bangkokArticle">
                        Bangkok
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline text-slate-800">
                        <Link href="/city/pattayaArticle">
                        Pattaya
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline text-slate-800">
                        <Link href="/city/huahinArticle">
                        Hua Hin
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline text-slate-800">
                        <Link href="/city/chiangmaiArticle">
                        Chiang mai
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline text-slate-800">
                        <Link href="/city/islandArticle">
                        Islands
                        </Link>
                    </Menu.Item>
                </div>
                </Menu.Items>
            </Menu>
            <Menu as="div" className="relative lg:inline-block text-left">
                <Menu.Button className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl text-slate-800"
                >
                Travel tips
                </Menu.Button>
                <Menu.Items className=" md:absolute left-20 md:left-0 mt-2 w-56 divide-y divide-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                    <Menu.Item className="block hover:underline text-slate-800">
                        <Link href="/traveltips/visa">
                        Visa
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline text-slate-800">
                        <Link href="/traveltips/airport">
                        Airport guides
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block hover:underline text-slate-800">
                        <Link href="/traveltips/currency">
                        Currency
                        </Link>
                    </Menu.Item>
                </div>
                </Menu.Items>
            </Menu>
            <Link href="/food/overview" className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl text-slate-800">
                Food
            </Link>
            <Link href="/info/contact" className="block mt-4 lg:inline-block lg:mt-0  mr-4 text-xl lg:float-right font-bold text-slate-800">
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