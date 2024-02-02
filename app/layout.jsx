import './globals.css'
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

import config from "@/config/siteconfig.json"

const websiteURL = process.env.NODE_ENV === 'production'
    ? `https://${config.siteUrl}/`
    : 'http://localhost:3000/'

export const metadata = {
  title: config.SiteName,
  description: config.SiteDescription,
  metadataBase: new URL(websiteURL),
  openGraph: {
    title: config.SiteName,
    description: config.SiteDescription,
    url: websiteURL,
    siteName: config.siteName,
    type: `website`,
    images: [
      {
        url: "https://raw.githubusercontent.com/B4tuhanY1lmaz/Caesium/main/public/photos/9.png",
        secureUrl: "https://raw.githubusercontent.com/B4tuhanY1lmaz/Caesium/main/public/photos/9.png",
        width: 1200,
        height: 630,
        alt: "Preview image for TbnMC Website"
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white ${inter.className}`}>
        <Header 
          title="TBN Smp"
        />
        <div className='min-h-screen justify-center items-center sm:p-24 p-12'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
