import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Hammad Ahmed - Full Stack Developer',
  description: 'Experienced Full Stack Developer specializing in Laravel, React, Next.js, Django, and Spring Boot. Currently working at Data Pulse Technologies.',
  keywords: 'Full Stack Developer, Laravel, React, Next.js, Django, Spring Boot, Web Development',
  authors: [{ name: 'Hammad Ahmed' }],
  metadataBase: new URL('https://hammad-ahmed-portfolio.vercel.app'),
  openGraph: {
    title: 'Hammad Ahmed - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in modern web technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}
