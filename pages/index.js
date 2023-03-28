import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs';
import matter from 'gray-matter';

export async function getStaticProps(){
  const files = fs.readdirSync('posts');
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const readFiles = fs.readFileSync(`posts/${filename}`);
    const {data: frontMatter} = matter(readFiles);
    return {
      slug, 
      frontMatter
    } 
  });
  return {
    props: {
      posts
    }
  }
}

export default function Home({posts}) {
  return (
    <>
      <Head>
        <title>Samuel Khongthaw</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className='flex flex-col bg-black h-screen'>
      <div id='navbar' className='sticky top-0 z-10 backdrop-filter backdrop-blur-md border-b border-gray-200 bg-opacity-30 flex justify-end font-monserrat font-bold items-center bg-black h-14  pr-2 md:pr-4'>
        <div className='pr-4 md:pr-4 text-neutral-400 font-montserrat text-xs'>Blogs</div>
        <div className='text-neutral-400 text-xs'>Gallery</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='max-w-2xl'>
          <div className='text-4xl md:text-5xl font-extrabold font-mono pt-20 pb-10 pl-4 w-fit from-purple-700 to-pink-600 cursor-pointer text-transparent bg-clip-text bg-gradient-to-r hover:from-pink-600 hover:to-purple-700 duration-300'>Hey!</div>
          <div className='text-lg md:text-lg font-montserrat pl-4 container text-neutral-300'>I&#39;m Samuel Khongthaw a CS junior at <span className='font-bold'>NIT, Meghalaya</span>. I enjoy working with Flutter and NextJS. Check out my <Link className='text-blue-600 hover:text-red-900' href={'https://www.youtube.com/channel/UCtZdrKp44G37iG7Hbd_La1A'}>channel</Link> on YouTube 📺. You can also connect with me on <Link href='https://www.linkedin.com/in/samuel-khongthaw-1a03a8206/' className='text-blue-600 hover:text-red-900'>LinkedIn</Link>.</div>
          {/* <div className='pl-4 font-mono pt-10 text-neutral-100'>
            Recent Blogs
          </div> */}
          {/* <div id='blog-section font-mont' className='pt-6 pl-4'>
            {posts.map((post) => {
              return <Link href={`/blog/${post.slug}`} key={post.slug}>
                      <div className="font-bold text-xl">{post.frontMatter.title}</div>
                      <div className='text-gray-600'>{post.frontMatter.metaDesc}</div>
                     </Link>
            })}
          </div> */}
        </div>
      </div>
      </div>
    </>
  )
}
