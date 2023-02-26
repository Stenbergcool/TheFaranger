import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import SideRelated from '../../components/sideRelated';
import { marked } from 'marked'

export default function article( {frontmatter, id, content, paths}) {

    return (
        <div className="w-full max-w-7xl flex justify-center">
        <article className="prose prose-stone pl-6 " dangerouslySetInnerHTML={{ __html: marked(content)}}>

        </article>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('content/info'))

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
    const markdownWithMeta = fs.readFileSync(path.join('content/info', id + '.md'), 'utf-8')
    const files = fs.readdirSync(path.join('content/info'))

    const {data: frontmatter, content} = matter(markdownWithMeta)
    return {
        props: {
          frontmatter,
          id,
          content
        }
      }
}