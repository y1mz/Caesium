"use client";

import Link from 'next/link';

import WidgetBot from '@widgetbot/react-embed';
import ServerBox from '@/components/serverbox';
import Cards from '@/components/card';

export default function Home() {
  return (
    <main className="flex flex-col gap-40 items-center">
      <div className='flex flex-wrap gap-10'>
        <div>
          <WidgetBot
            className='sm:h-[700px] sm:w-[500px] h-[300px] sm:mr-20 rounded'
            server="748845037042794566"
            channel="1023127047343718430"
          />
        </div>
        <ServerBox />
      </div>
      <div className="flex flex-wrap gap-10 w-auto justify-center items-center">
        <Link href="/photos">
          <Cards 
            title="Gallery"
            photo="/cards/1.jpeg"
          />
        </Link>
        <Link href="/blog">
          <Cards 
            title="Updates"
            photo="/cards/3.jpeg"
          />
        </Link>
          <Cards
            title="Updates"
            photo="/cards/3.jpeg"
          />
      </div>
    </main>
  )
}
