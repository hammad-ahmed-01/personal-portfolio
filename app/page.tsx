import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Startup from '../components/Startup'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Hammad Ahmed - Software Engineer',
  description: 'Senior Software Engineer building AI-powered SaaS platforms and microservices with Next.js, NestJS, Supabase, Google Cloud, and Cloudflare, including secure multi-tenant workflows.',
  keywords: 'Senior Software Engineer, Full Stack, Microservices, Next.js, NestJS, Supabase, Google Cloud, Cloudflare, SaaS Security, Multi-Tenant Architecture, Web Development',
  authors: [{ name: 'Hammad Ahmed' }],
  openGraph: {
    title: 'Hammad Ahmed - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in multi-stack SaaS product development, microservices architecture, and secure cloud-native systems',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className={`${inter.className} ${poppins.variable}`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Startup />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
