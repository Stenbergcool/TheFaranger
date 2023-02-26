import Link from 'next/link';
import { Menu } from '@headlessui/react'

export default function Navbar(){
  return (
    <div className="flex justify-center">
    <nav className="flex items-center justify-between flex-wrap w-full bg-white p-6 max-w-7xl border-b-2 border-slate-800">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
            <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 mr-4 text-xl font-medium">
                The Faranger
            </Link>
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 mr-4 text-xl"
                >
                Places
                </Menu.Button>
                <Menu.Items className=" absolute left-0 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                    <Menu.Item className="block">
                        <Link href="/city/bangkokArticle">
                        Bangkok
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block">
                        <Link href="/city/pattayaArticle">
                        Pattaya
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block">
                        <Link href="/city/huahinArticle">
                        Hua Hin
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block">
                        <Link href="/city/chiangmaiArticle">
                        Chiang mai
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block">
                        <Link href="/city/islandArticle">
                        Islands
                        </Link>
                    </Menu.Item>
                </div>
                </Menu.Items>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 mr-4 text-xl"
                >
                Travel tips
                </Menu.Button>
                <Menu.Items className=" absolute left-0 mt-2 w-56 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                    <Menu.Item className="block">
                        <Link href="/traveltips/visa">
                        Visa
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block">
                        <Link href="/traveltips/airport">
                        Airport guides
                        </Link>
                    </Menu.Item>
                    <Menu.Item className="block">
                        <Link href="/traveltips/currency">
                        Currency
                        </Link>
                    </Menu.Item>
                </div>
                </Menu.Items>
            </Menu>
            <Link href="/food/overview" className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 mr-4 text-xl">
                Food
            </Link>
            <Link href="/dating/overview" className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 mr-4 text-xl">
                Dating
            </Link>
            <Link href="/info/contact" className="block mt-4 lg:inline-block lg:mt-0 text-slate-800 mr-4 text-xl float-right">
                Contact
            </Link>
            </div>
        </div>
    </nav>
    </div>
  );
};