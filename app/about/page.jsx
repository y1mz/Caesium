import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import localFont from "next/font/local";

const myFont = localFont({
    src: "../photos/Minecraft.woff2",
    display: 'swap',
});

export const metadata = {
    title: "About The Batuhan's Network SMP",
    description: "Rules and much more."
}

function AboutPage() {
    const getPageContent = () => {
        const file = "public/pages/about.md"
        const content = fs.readFileSync(file, "utf-8")
        const MatterResult = matter(content)
        return MatterResult
    }
    const content = getPageContent()

    return (
        <div className="justify-center">
            <div className="items-center py-10">
                <h1 className={`text-4xl text-center items-center ${myFont.className}`}>About</h1>
            </div>
            <div className="items-center justify-center lg:px-60 md:px-10 px-auto">
                <article className="items-center justify-center prose lg:prose-xl prose-invert prose-code:text-sm prose-code:px-3 prose-code:py-3 prose-pre:bg-neutral-600">
                    <Markdown>
                        {content.content}
                    </Markdown>
                </article>
            </div>
        </div>
    )
}

export default AboutPage;


