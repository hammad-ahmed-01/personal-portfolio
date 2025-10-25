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
  title: 'Hammad Ahmed - Full Stack Developer',
  description: 'Experienced Full Stack Developer specializing in Laravel, React, Next.js, Django, and Spring Boot. Currently working at Data Pulse Technologies.',
  keywords: 'Full Stack Developer, Laravel, React, Next.js, Django, Spring Boot, Web Development',
  authors: [{ name: 'Hammad Ahmed' }],
  openGraph: {
    title: 'Hammad Ahmed - Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in modern web technologies',
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
