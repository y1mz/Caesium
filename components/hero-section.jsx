"use client"

import localFont from "next/font/local"

const MinecraftFont = localFont({ src: './serverbox/Minecraft.woff2' })

function HeroSection({ title }) {
    return (
        <div
            className="relative overflow-hidden bg-center h-[150px] sm:h-[200px] md:h-[250px] w-full z-0 rounded-2xl mb-10">
            <div className="w-full">

            </div>
            <div className={`absolute bottom-0 left-0 right-o top-0 h-full w-full 
                    overflow-hidden bg-fixed bg-black/40`}
            >
                <div className="flex flex-col h-full items-center justify-center">
                    <h1 className={`text-lg sm:text-xl md:text-2xl mb-4 ${MinecraftFont.className}`}>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection