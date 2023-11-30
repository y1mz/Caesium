import './globals.css'
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

import config from "@/config/siteconfig.json"

export const metadata = {
  title: config.SiteName,
  description: config.SiteDescription,
  openGraph: {
    title: config.SiteName,
    description: config.SiteDescription,
    url: `https://${config.siteUrl}/`,
    siteName: config.siteName,
    type: `website`
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
