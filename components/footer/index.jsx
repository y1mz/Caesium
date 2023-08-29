"use client";

import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsFillRssFill } from "react-icons/bs";

function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center mb-10">
            <div className="flex gap-5 text-lg text-gray-500 mb-2">
                <Link href="https://github.com/B4tuhanY1lmaz/tbnmc-website"> <BsGithub /> </Link>
                <Link href="https://discord.gg/8dAHkxbKPf"> <BsDiscord /> </Link>
                <Link href="/feed.xml"> <BsFillRssFill /> </Link>
            </div>
            <div className="text-sm text-gray-600">
               <p>Made by Batuhan Y. Yilmaz  © 2023</p>  
            </div>
        </footer>
    )
}

export default Footer;