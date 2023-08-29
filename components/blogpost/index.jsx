import Image from "next/image";

function BlogPostCard({ title, content, photo, date }) {
    return (
        <div className="flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 hover:bg-teal-800 transition duration-200 md:max-w-4xl md:flex-row">
            <Image
                className="h-48 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg max-w-3xl min-w-[300px]"
                src={photo}
                width={300}
                height={300}
                alt="" />
            <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium text-neutral-50">
                    {title}
                </h5>
                <p className="mb-4 text-base text-neutral-200">
                    {content}
                </p>
                <p className="text-xs text-neutral-300">
                    {date}
                </p>
            </div>
        </div>
    )
}

export default BlogPostCard;