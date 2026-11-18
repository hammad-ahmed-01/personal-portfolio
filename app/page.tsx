import Atmosphere from '../components/Atmosphere'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import VideoResume from '../components/VideoResume'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import ExecutionPlan from '../components/ExecutionPlan'
import Startup from '../components/Startup'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="relative z-10">
      <Atmosphere />
      <Navbar />
      <Hero />
      <About />
      <ExecutionPlan />
      <Experience />
      <Startup />
      <Projects />
      <Skills />
      <VideoResume />
      <Contact />
      <Footer />
    </main>
  )
}
