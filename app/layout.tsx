import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Hammad Ahmed — Forward Deployed Engineer',
  description:
    'Forward Deployed Engineer owning client products from discovery and architecture through security, delivery, and production. SaaS, AI agents, and multi-tenant platforms.',
  keywords:
    'Forward Deployed Engineer, FDE, SaaS Architecture, Multi-Tenant, RLS, WAF, Next.js, NestJS, Laravel, Django, AI Agents',
  authors: [{ name: 'Hammad Ahmed' }],
  metadataBase: new URL('https://hammad-ahmed-portfolio.vercel.app'),
  openGraph: {
    title: 'Hammad Ahmed — Forward Deployed Engineer',
    description:
      'Client problem to production: architecture, security, and the systems that stay up.',
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
      <body className={`${sans.variable} font-sans bg-void text-bone`}>{children}</body>
    </html>
  )
}
