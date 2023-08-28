"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go"

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
    
    return (
        <header className="sm:px-24 px-12 justify-between text-2xl">
            <div className="flex justify-between text-xl mt-10">
            <Link href="/" className="hover:underline flex gap-2">
                <Image 
                    src="/logo.png"
                    width={30}
                    height={30}
                    alt="Server Logo"
                    className="rounded"
                />
                {title}
            </Link>
            <nav className="flex">
                {status === 'online' ? <ServerUP /> : <ServerDown />}
            </nav>
            </div>
        </header>
    )
}

export default Header;