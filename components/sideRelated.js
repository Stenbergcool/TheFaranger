import Link from 'next/link';
import { Menu } from '@headlessui/react'
import Image from 'next/image'

export default function SideRelated(props){
  return (
    <div className="border border-slate-800 mt-14 ml-4">
        <div className="flex gap-4 m-2 underline">
            <p className="font-medium"> Related Articles</p>
        </div>
        { props.posts.map((post, index) => {
            return (
                <div key={index} className="block ml-2">

                    <Link href={'../articles/' + post.slug}>
                    <p className="mb-2 no-underline hover:underline">{post.frontmatter.title}</p>
                    </Link>
                </div>
            )
        }) }
    </div>
  );
};