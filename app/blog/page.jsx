import { getPostMetadata } from "@/libs/getPostMetadata";
import BlogPostCard from "@/components/blogpost";

function BlogPage() {
    return (
        <div className="justify-center">
            <div className="items-center py-10">
                <h1 className="text-4xl text-center items-center">Updates</h1>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center max-w-auto">
                <BlogPostCard />
                <BlogPostCard />
                <BlogPostCard />
                <BlogPostCard />
                <BlogPostCard />
                <BlogPostCard />
                <BlogPostCard />
                <BlogPostCard />
            </div>
        </div>
    )
}

export default BlogPage;