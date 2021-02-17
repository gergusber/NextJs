import React from "react";
import { getAllPosts, getPostBySlug, MDtoHTML } from "../../libs/post-fetcher";
import moment from "moment";

function BlogPostPage({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>
                {post.author} - {moment(post.date, "YYYY-MM-DD").format("DD MMM YYYY")}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "title",
        "content",
        "date",
        "author",
    ]);
    const content = MDtoHTML(post.content);
    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);
    return {
        paths: posts.map((post) => ({ params: post })),
        fallback: false,
    };
}

export default BlogPostPage;
