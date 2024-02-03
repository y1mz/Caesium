import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import { getPageMetadata } from "@/libs/getPageMetadata"

import HeroSection from "@/components/hero-section"
const getPageContent = (page) => {
    const folder = "public/pages/"
    const file = `${folder}${page}.md`
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content)
    return matterResult
}

export async function generateStaticParams() {
    const pages = await getPageMetadata()
    return pages.map((page) => ({
        page: page.page
    }))
}

export function generateMetadata(props) {
    const page = props.params.page
    const content = getPageContent(page)

    return {
        title: content.data.title
    }
}

function MarkdownPages(props) {
    const page = props.params.page
    const content = getPageContent(page)

    return (
        <div className="justify-center">
            <div className="items-center">
                <HeroSection
                    title={content.data.title}
                />
            </div>
            <div className="items-center justify-center lg:px-60 md:px-10 px-auto">
                <article
                    className="items-center justify-center prose lg:prose-xl prose-invert prose-code:text-sm prose-code:px-3 prose-code:py-3 prose-pre:bg-neutral-600">
                    <Markdown>
                        {content.content}
                    </Markdown>
                </article>
            </div>
        </div>
    )
}

export default MarkdownPages