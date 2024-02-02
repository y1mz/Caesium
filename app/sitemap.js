import { getPostMetadata } from "@/libs/getPostMetadata"
import config from "@/config/siteconfig.json"

export default async function sitemap() {
    const allPosts = getPostMetadata()

    const home = {
        url: `https://${config.siteUrl}`,
        lastModified: new Date().toString()
    }

    if (!allPosts) return [home]

    const posts = allPosts.map((post) => ({
        url: `${home.url}/blog/${post.slug}`,
        lastModified: post.date
    }))

    return [
        home,
        ...posts
    ]
}