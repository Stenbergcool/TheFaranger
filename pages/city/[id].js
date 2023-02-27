import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head'
import SideRelated from '../../components/sideRelated';
import { marked } from 'marked'

export default function article( {frontmatter, id, content, paths}) {

    return (
      <>
      <Head>
        <meta name="description" content={frontmatter.meta}></meta>
      </Head>
      <div className="md:grid md:grid-cols-4 w-full max-w-7xl">
        <article className="prose prose-stone col-span-3 min-w-full pl-6 pr-6 md:pr-0" dangerouslySetInnerHTML={{ __html: marked(content)}}>

        </article>
        <div>
        <SideRelated posts={paths}/>
        </div>
        </div>
      </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('content/startpage'))

    const paths = files.map(filename => ({
        params: {
            id: filename.replace('.md', '')
        }
    })
    )
    return {
        paths,
        fallback: false
    }

}


export async function getStaticProps({params: {id}}) {
    const city = id.replace('Article', '')
    const markdownWithMeta = fs.readFileSync(path.join('content/startpage', id + '.md'), 'utf-8')
    const files = fs.readdirSync(path.join('content/articles'))
    let paths = files.map(filename => {

        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(
          path.join('content/articles', filename),
          'utf-8'
        )
        const { data: frontmatter } = matter(markdownWithMeta)
        return {
          slug,
          frontmatter
        }
      })
    console.log(paths)
    const {data: frontmatter, content} = matter(markdownWithMeta)
    paths = paths.filter(e => {
      return e.frontmatter.city == frontmatter.city
  })
    return {
        props: {
          frontmatter,
          id,
          content,
          paths
        }
      }
}