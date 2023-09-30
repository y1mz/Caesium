"use client";

import Link from 'next/link';

import ServerBox from '@/components/serverbox';
import Cards from '@/components/card';

export default function Home() {
  return (
    <main className="flex flex-col gap-40 items-center">
      <div className='flex flex-wrap gap-10'>
        <div className='hidden md:flex'>
        <iframe 
          src="https://discord.com/widget?id=748845037042794566&theme=dark" 
          width="300" height="500" 
          allowtransparency="true" frameBorder="2" 
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="mr-10"
          >
        </iframe>
        </div>
        <ServerBox 
          ServerIP="tbnmc.xyz"
          ServerName="The Batuhan's Network SMP"
          ServerDescription="A cracked SMP server with some tweaks over Vanilla Minecraft."
          ServerVersion="1.20.1 + EasyAuth + TerraLith"
          DiscordInvıte="https://discord.gg/8dAHkxbKPf"
        />
      </div>
      <div className="flex flex-wrap gap-10 w-auto justify-center items-center">
        <Link href="/photos">
          <Cards 
            title="Gallery"
            photo="/cards/4.png"
          />
        </Link>
        <Link href="/blog">
          <Cards 
            title="Updates"
            photo="/cards/3.jpeg"
          />
        </Link>
      </div>
    </main>
  )
}
