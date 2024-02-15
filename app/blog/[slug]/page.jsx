import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import { getPostMetadata } from "@/libs/getPostMetadata"
import { notFound } from "next/navigation"
import localFont from "next/font/local"
import config from "@/config/siteconfig.json"

const MinecraftFont = localFont({ src: './Minecraft.woff2' })

export const getPostContent = (slug) => {
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

export async function generateMetadata({ params }) {
    const slug = params.slug;
    const postContent = getPostContent(slug);

    return {
        title: postContent.data.title,
        description: postContent.data.description,
        openGraph: {
            title: postContent.data.title,
            description: postContent.data.description,
            url: `/posts/${slug}`,
            type: `article`,
            siteName: config.siteName,
            publishedTime: new Date(postContent.data.date).toISOString(),
            modifiedTime: new Date(postContent.data.date).toISOString(),
            authors: config.authorName,
            images: [
                {
                    url: `https://${config.siteUrl}/${postContent.data.image}`,
                    secureUrl: `https://${config.siteUrl}/${postContent.data.image}`,
                    width: 1200,
                    height: 630,
                    alt: `Preview image for ${postContent.data.title}`,
                }
            ],
        },
    }
}

export async function generateStaticParams() {
    const posts = await getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

function PostPage(props) {
    const slug = props.params.slug;
    const content = getPostContent(slug);

    return (
        <div className="justify-center">
            <div className="relative overflow-hidden bg-center h-[150px] sm:h-[200px] md:h-[250px] w-full z-0 rounded-2xl mb-10">
                <div className="w-full">
                <img 
                    src={content.data.image} alt={`Hero Image`} className={`block object-center object-cover inset-0 min-h-auto`}
                />
                </div>
                <div className={`absolute bottom-0 left-0 right-o top-0 h-full w-full 
                    overflow-hidden bg-fixed bg-black/60`}
                >
                    <div className="flex flex-col h-full items-center justify-center">
                        <h1 className={`text-lg sm:text-xl md:text-2xl mb-4 ${MinecraftFont.className}`}>{content.data.title}</h1>
                        <div className="flex px-10">
                            <h4 className="text-xs font-bold">{config.authorName}</h4>
                            <p className="text-xs font-bold ml-5">{new Date(content.data.date).toDateString()}</p>
                        </div>
                    </div>
                </div>
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