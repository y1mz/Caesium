"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function ServerBox() {

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
        
        const ServerIP = "tbnmc.xyz"

        function ServerUP() {
            return (
                <div className="mt-3">
                    <pre className="w-[400px] items-center text-center justify-center rounded bg-lime-700 p-4">
                        <code className="text-gray-100 text-base px-3 py-3 sm:text-xl md:text-2xl font-mono overflow-hidden shadow-xl select-all">{ServerIP}</code>
                    </pre>
                </div>
            )
        }

        function ServerDown() {
            return (
                <div className="mt-3">
                    <pre className="w-[400px] items-center text-center justify-center rounded bg-orange-900 p-4">
                        <code className="text-gray-100 text-base px-3 py-3 sm:text-xl md:text-2xl font-mono overflow-hidden shadow-xl select-all">{ServerIP}</code>
                    </pre>
                </div>
            )
        }

        return (
            <div className="flex flex-col items-center justify-center text-center gap-10">
                <h1 className="text-3xl text-center"> The Batuhan's Network SMP</h1>
                <p className="text-xl text-center">An cracked SMP server for everyone</p>
                <p className="text-md text-center underline decoration-orange-950 text-orange-600">1.20.1 + EasyAuth</p>
                {status === 'online' ? <ServerUP /> : <ServerDown />}
                <Link className="w-[400px]" href="/">
                    <button className="mb-2 bg-neutral-700 hover:bg-lime-900 text-gray-300 hover:text-gray py-3 px-4 text-lg rounded transition duration-200">
                        <span>Join our Discord</span>
                    </button>
                </Link>
            </div>
        )
}

export default ServerBox;