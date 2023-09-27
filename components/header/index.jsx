"use client";

import Image from "next/image"
import Link from "next/link"
import localFont from "next/font/local";
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { GoDotFill } from "react-icons/go"
import { ChevronLeft } from "lucide-react"

const MCFont = localFont({
    src: "./Minecraft.woff2",
    display: 'swap',
});

function Header({ title }) {
    const [status, setStatus] = useState('');
    
        useEffect(() => {
            async function fetchServerStatus() {
                try {
                    const response = await fetch('/server');
                    const data = await response.json();
                    setStatus(data.status);
                } catch (error) {
                    console.error('error', error);
                }
            }
    
            fetchServerStatus();
        }, []);
    
    function ServerUP() {
        return (
            <div className="text-lime-500 flex"><GoDotFill className="text-2xl"/> <p>Server is UP!</p></div>
        )
    }

    function ServerDown() {
        return (
            <div className="text-rose-600 flex"> <GoDotFill className="text-2xl"/> <p>We're sorry server is down</p> </div>
        )
    }

    function BackButton() {
        const pathname = usePathname()
        if (pathname !== `/`) {
            return (
                <div className="flex hover:underline align-baseline transition">
                    <Link href="/" className="flex">
                        <ChevronLeft />
                        <p>Go Back</p>
                    </Link>
                </div>
            )
        } else {
            return null
        }
    }
    
    return (
        <header className="sm:px-24 px-12 flex justify-between mt-10 text-2xl">
            <div className="flex gap-4 text-xl mt-10">
            <Link href="/" className={`hover:underline flex gap-2 ${MCFont.className}`}>
                <Image 
                    src="/logo.png"
                    width={30}
                    height={30}
                    alt="Server Logo"
                    className="rounded"
                />
                {title}
            </Link>
            <BackButton />
            </div>
            <nav className="flex">
                {status === 'online' ? <ServerUP /> : <ServerDown />}
            </nav>
        </header>
    )
}

export default Header;