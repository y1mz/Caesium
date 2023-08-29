import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        const preview = () => {
            const content = matterResult.content;
            const sentences = content.split(/[.!?]/);
            const firstSentence = sentences.slice(0,1).join("");
            return firstSentence;
        }

        return {
            title: matterResult.data.title,
            author: matterResult.data.author,
            date: matterResult.data.date,
            slug: filename.replace(".md", ""),
            preview: preview(),
            content: matterResult.content,
            image: matterResult.data.image,
        };
    });
    return posts;
}