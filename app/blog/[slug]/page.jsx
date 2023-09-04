import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";

const getPostContent = (slug) => {
    const folder = "public/posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
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
                <article className="items-center justify-center prose lg:prose-xl prose-invert prose-code:text-sm prose-code:px-3 prose-code:py-3 prose-pre:bg-neutral-600">
                    <Markdown>
                        {content.content}
                    </Markdown>
                </article>
            </div>
            <Link href="/blog" className="px-60 underline text-3xl">Go Back</Link>
        </div>
    )
}

export default PostPage;