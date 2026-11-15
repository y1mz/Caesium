import Link from "next/link"
import localFont from "next/font/local"

const MinecraftFont = localFont({ src: './blog/[slug]/Minecraft.woff2' })

function NotFound() {
    return (
        <div className="justify-center">
            <div className="relative overflow-hidden bg-center h-[150px] sm:h-[200px] md:h-[250px] w-full z-0 rounded-2xl mb-10">
                <div className="w-full">
                </div>
                <div className={`absolute bottom-0 left-0 right-o top-0 h-full w-full 
                    overflow-hidden bg-fixed bg-black/60`}
                >
                    <div className="flex flex-col h-full items-center justify-center">
                        <h1 className={`text-lg sm:text-xl md:text-2xl mb-4 ${MinecraftFont.className}`}>404.</h1>
                    </div>
                </div>
            </div>
            <div className="items-center justify-center lg:px-60 md:px-10 px-auto">
                <div className="text-md mx-auto text-center">
                    <p>The content you're looking for doesn't exists.</p>
                    <Link href={`/`} className="hover:underline">Return home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound