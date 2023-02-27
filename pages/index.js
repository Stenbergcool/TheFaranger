import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image'

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
    <div className="w-full max-w-7xl">
      <div className="md:flex pt-2">
        {posts.map((post, index) => {
          return (
          <div className="" key={index}>
            <Link href={post.frontmatter.category + '/' + post.slug}>
                <Image src={post.frontmatter.image} width={300} height={100} loading="eager" alt="Article Image" className="pb-1 px-1 guide-image max-h-32" />
                <h3 className="text-l font-bold underline p-1">{post.frontmatter.title}</h3>
            </Link>
          </div>
          )
        })}
      </div>
      <div className="grid grid-cols-4">
      <div className="p-4 col-span-3">
      {articles.map((post, index) => {
          return (
          <div key={index} className="">
            <Link href={'/articles/' + post.slug}>
            <h3 className="text-2xl font-extrabold p-1 hover:underline">{post.frontmatter.title}</h3>
            </Link>
            <p className="text-sm p-1">{post.frontmatter.date}</p>
            <div className="flex" key={index}>
              <img src={post.frontmatter.image} alt="Article Image" className="p-1" height="200" width="200"/>
              <div className="h-24">
                <p className="line-clamp-3">{post.content}</p>
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
