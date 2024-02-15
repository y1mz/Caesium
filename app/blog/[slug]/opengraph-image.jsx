import { ImageResponse } from '@vercel/og'
import { getPostContent } from "./page"

import { Inter } from "next/font/google"

const websiteURL = process.env.NODE_ENV === 'production'
    ? `https://www.tbnmc.xyz/`
    : 'http://localhost:3000/'

const inter = Inter({
    weight: "400",
    subsets: ['latin']
})

export const contentType = 'image/png'
export const alt = 'Example automated Open Graph image'

export default function Image({ params }) {
    const slug = params.slug
    const postContent = getPostContent(slug)

    return new ImageResponse((
        <div
            className={inter.className}
            style={{
                fontSize: 150,
                background: 'white',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {postContent.data.title}
        </div>
    ), {
        width: 1200,
        height: 630
    })
}