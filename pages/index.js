import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image'
import { useState } from "react";
import { useSpring, animated } from '@react-spring/web'
import { Waypoint } from "react-waypoint";

const FadeIn = ({ children }) => {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: 700,
    to: {
      x: !inView ? 24 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>
        {children}
      </animated.div>
    </Waypoint>
  );
};


export default function Home({posts, articles}) {

    function imageReducer(x) {
      let guideImage = document.getElementsByClassName("guide-image")
      if (x.matches) {
        for(let items of guideImage){
          items.classList.add("hidden")
        }
      } else {
        for(let items of guideImage){
          items.classList.remove("hidden")
        }
      }
    }
    if (typeof window !== "undefined") {
    let x = window.matchMedia("(max-width: 760px)")
    imageReducer(x)
    x.addListener(imageReducer)
    }

  return (
    <div className="w-full">
      <div className="mb-10 rounded-l">
        {posts.map((post, index) => {
          if(index % 2 == 0) {
          return (
          <div className="flex object-contain my-10 py-10 even:bg-slate-800 odd:text-left even:text-white rounded-md justify-center" key={index}>
              <Link href={post.frontmatter.category + '/' + post.slug}>
                <div className="grid grid-cols-2">
                  <h3 className="p-4 text-2xl font-extrabold">{post.frontmatter.title}</h3>
                  <FadeIn>
                  <Image src={post.frontmatter.image} width={600} height={400} loading="eager" alt="Article Image" className=" hover:scale-105 guide-image min-h-full rounded-md" />
                  </FadeIn>
                </div>
              </Link>
          </div>
          )}
          return (
            <div className="flex object-contain my-10 py-10 even:bg-slate-200 odd:justify-end odd:text-left rounded-md justify-center" key={index}>
                <Link href={post.frontmatter.category + '/' + post.slug}>
                  <div className="grid grid-cols-2">
                  <FadeIn>
                    <Image src={post.frontmatter.image} width={600} height={400} loading="eager" alt="Article Image" className=" hover:scale-105 guide-image min-h-full rounded-md" />
                  </FadeIn>
                    <h3 className="p-4 text-2xl font-extrabold">{post.frontmatter.title}</h3>
                  </div>
                </Link>
            </div>
            )
        })
      }
      </div>
      <div className="grid grid-cols-4">
      <div className="p-4 col-span-3">
      {articles.map((post, index) => {
          return (
          <div key={index} className="">
            <Link href={'/articles/' + post.slug}>
            <h3 className="text-2xl font-extrabold p-1 hover:underline">{post.frontmatter.title}</h3>
            </Link>
            <div className="flex" key={index}>
              <img src={post.frontmatter.image} alt="Article Image" className="p-1" height="200" width="200"/>
              <div className="h-24">
                <p className="line-clamp-3">{post.content}</p>
                <p className="text-sm p-1">Written: {post.frontmatter.date}</p>
              </div>
            </div>
          </div>
          )
        })}
      </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const files = fs.readdirSync(path.join('content/startpage'))
  const articleFiles = fs.readdirSync(path.join('content/articles'))

  const posts = files.map((filename) => {

    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('content/startpage', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })
  const articles = articleFiles.map((filename) => {

    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('content/articles', filename),
      'utf-8'
    )
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
      content
    }
  })
  return {
    props: {
      posts: posts,
      articles: articles
    }
  }
}
