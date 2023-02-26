import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex justify-center">
        <footer className="p-4 max-w-7xl items-center bg-white rounded-lg shadow md:items-center md:justify-between md:p-6 bottom-0">
            <ul className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                <Link href="/info/privacypolicy" className="hover:underline">Privacy policy</Link>
                </li>
                <li>
                    <Link href="/info/contact" className="hover:underline">Contact</Link>
                </li>
            </ul>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.
            </span>
        </footer>
        </div>
    )
}