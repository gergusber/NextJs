import React from 'react';
import Link from 'next/link';
// import { getClientBuildManifest } from 'next/dist/client/route-loader';
import { getAllPosts } from '../../libs/post-fetcher';

function BlogIndexPage({ posts }) {
    console.log(posts)
    return (
        <ul>
            {posts.map(post => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} >
                        <a>mi entrada</a>
                    </Link>
                </li>
            ))}

        </ul>);
}

export async function getStaticProps() {
    const posts = getAllPosts(['slug', 'title']);
    return {
        props: {
            posts,
        }
    }
}



export default BlogIndexPage;