import './globals.css'
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

import config from "&/config/siteconfig.json"

const websiteURL = process.env.NODE_ENV === 'production'
    ? config.SiteUrl
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
        url: config.SiteOGImage,
        secureUrl: config.SiteOGImage,
        width: 1200,
        height: 630,
        alt: config.SiteAltDescription
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-white ${inter.className}`}>
        <Header
        title={config.ServerName}
        />
        <div className='min-h-screen justify-center items-center sm:p-24 p-12'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
