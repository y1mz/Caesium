import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetadata } from "@/libs/getPostMetadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const slug = params.slug;
    const postContent = getPostContent(slug);

    return {
        title: postContent.data.title,
        description: postContent.data.description,
    }
}

export async function generateStaticParams() {
    const posts = await getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

const getPostContent = (slug) => {
    try {
        const folder = "public/posts/";
        const file = `${folder}${slug}.md`;
        const content = fs.readFileSync(file, "utf8");
        const matterResult = matter(content);
        return matterResult;
    } catch (error) {
        notFound()
    }
    
}

function PostPage(props) {
    const slug = props.params.slug;
    const content = getPostContent(slug);

    return (
        <div className="justify-center">
            <div className="items-center py-10">
                <h1 className="text-3xl text-center items-center">{content.data.title}</h1>
            </div>
            <div className="items-center justify-center lg:px-60 md:px-10 px-auto">
                <article className="items-center md:mx-auto justify-center prose lg:prose-xl prose-invert prose-code:text-sm prose-code:px-3 prose-code:py-3 prose-pre:bg-neutral-600">
                    <Markdown>
                        {content.content}
                    </Markdown>
                </article>
            </div>
        </div>
    )
}

export default PostPage;