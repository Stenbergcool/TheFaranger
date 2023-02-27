import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SideRelated from '../../components/sideRelated';
import { marked } from 'marked'

export default function article( {frontmatter, id, content, paths}) {

    return (
      <div className="md:grid md:grid-cols-4 w-full max-w-7xl">
        <article className="prose prose-stone col-span-3 pl-6" dangerouslySetInnerHTML={{ __html: marked(content)}}>

        </article>
        <div>
        <SideRelated posts={paths}/>
        </div>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('content/traveltips'))

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
    const markdownWithMeta = fs.readFileSync(path.join('content/traveltips', id + '.md'), 'utf-8')
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
      return e.frontmatter.category == frontmatter.category
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