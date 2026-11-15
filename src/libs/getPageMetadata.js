import fs from "fs";
import matter from "gray-matter";

export const getPageMetadata = () => {
    const folder = "public/pages/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const pages = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${folder}${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            page: filename.replace(".md", ""),
        };
    });
    return pages;
}