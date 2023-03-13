import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image'
import { useState } from "react";
import { useSpring, animated } from '@react-spring/web'
import { Waypoint } from "react-waypoint";
import { marked } from "marked";

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

  return (
    <div className="w-full">
      <div className="md:grid md:grid-cols-3 grid rounded-l max-w-7xl m-auto mb-20">
        {posts.map((post, index) => {
          return (
          <div className="object-contain m-2 justify-center p-2" key={index}>
              <Link href={post.frontmatter.category + '/' + post.slug}>
                  <div className="relative hover:scale-105 text-center">
                    <FadeIn>
                    <Image src={post.frontmatter.image} width={600} height={800} loading="eager" alt="Article Image" className=" guide-image min-h-full pb-2" />

                    <h3 className=" absolute top-2 p-4 text-2xl md:text-5xl font-extrabold text-amber-200 ">{post.frontmatter.title}</h3>
                    </FadeIn>
                  </div>
              </Link>
          </div>
        )})
      }
      </div>
      <div className="grid grid-cols-4 max-w-7xl m-auto">
      <div className="p-4 col-span-3">
        <h1 className="text-2xl font-extrabold underline"> Latest articles</h1>
      {articles.map((post, index) => {
          return (
          <div key={index} className="">
            <Link href={'/articles/' + post.slug}>
            <h3 className="text-2xl font-extrabold p-1 hover:underline">{post.frontmatter.title}</h3>
            </Link>
            <div className="md:flex" key={index}>
              <img src={post.frontmatter.image} alt="Article Image" className="p-1" height="200" width="200"/>
              <div className="h-24">
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
    const { data: frontmatter, content } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
      content
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
