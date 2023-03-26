import fs, { readdirSync } from 'fs';
import md from 'markdown-it';
import matter from 'gray-matter';

export async function getStaticPaths(){
    const files = readdirSync('posts');
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', "")
        }
    }));
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {slug}}){
    const filename = fs.readFileSync(`posts/${slug}.md`);
    const {data: frontMatter, content} = matter(filename);
    return {
        props: {
            frontMatter,
            content
        }
    }
}

export default function BlogPage({frontMatter, content}){
    // console.log(frontMatter);
    // console.log(content);
    return <div className='p-10'>
        <h1 className='prose lg:prose-xl text-4xl font-extrabold prose-slate pb-5'>{frontMatter.title}</h1>
        <article className='prose lg:prose-xl flex flex-col ' dangerouslySetInnerHTML={{__html: md().render(content)}}></article>
    </div>
}