"use client";

import localFont from "next/font/local";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/libs/utils"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { RocketIcon } from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"

const myFont = localFont({
    src: "./Minecraft.woff2",
    display: 'swap',
});

function ServerBox({ ServerIP }) {
    const [status, setStatus] = useState('');
    const [alert, setAlert] = useState(false)
    
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

        // Toast comes there
        const toastPop = () => {
            navigator.clipboard.writeText(ServerIP)
            setAlert(true)
        }
        function DisplayAlert() {
            if (alert === true) {
                return (
                    <Badge className={cn(
                        "z-50 relative top-3 rounded-full text-md bg-lime-200",
                        status !== 'online' && "bg-orange-200"
                    )}>
                        Copied!
                    </Badge>
                )
            } else {
                return (
                    <div className="h-7"></div>
                )
            }
        }

        function ServerUP() {
            return (
                <div>
                    <div className="mt-3 relative">
                    <DisplayAlert />
                        <pre className="w-[400px] items-center text-center justify-center rounded bg-lime-700 p-4">
                            <code onClick={toastPop} className="text-gray-100 text-base px-3 py-3 sm:text-xl md:text-2xl font-mono overflow-hidden select-all">{ServerIP}</code>
                        </pre>
                    </div>
                </div>
            )
        }

        function ServerDown() {
            return (
                <div className="mt-3 relative">
                    <DisplayAlert />
                    <pre className="w-[400px] items-center text-center justify-center rounded bg-orange-900 p-4">
                        <code onClick={toastPop} className="text-gray-100 text-base px-3 py-3 sm:text-xl md:text-2xl font-mono overflow-hidden shadow-xl select-all">{ServerIP}</code>
                    </pre>
                </div>
            )
        }

        return (
            <div className="flex flex-col items-center justify-center text-center gap-10 w-96 z-40 static">
                <div className={`flex flex-col items-center justify-center gap-10 ${myFont.className}`}>
                    <h1 className="text-3xl text-center"> The Batuhan's Network SMP</h1>
                    <p className="text-xl text-center break-words">A cracked SMP server with some tweaks over Vanilla Minecraft.</p>
                    <p className="text-md text-center text-orange-600">1.20.1 + EasyAuth + TerraLith</p>
                </div>
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