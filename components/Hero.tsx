'use client'

import TechCore from './TechCore'

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Hammad_Ahmed_Resume.pdf'
    link.download = 'Hammad_Ahmed_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-10">
      <div className="page-wrap grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-center w-full">
        <div className="relative z-10 max-w-xl">
          <p className="kicker">Forward Deployed Engineer</p>
          <h1 className="display text-[42px] sm:text-[64px] lg:text-[78px] leading-[1.05] mb-6">
            Hammad Ahmed
          </h1>
          <p className="body-light max-w-md mb-3">
            I take a client problem through architecture, security, and code, then stay on it in production.
          </p>
          <p className="text-sm sm:text-base font-extralight text-ash mb-8">
            2+ years shipping multi-tenant SaaS and AI products for GCC and European teams.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <button onClick={scrollToContact} className="btn-pill">
              Send email
            </button>
            <button onClick={downloadResume} className="link-ghost text-sm font-normal uppercase tracking-nav text-left">
              Get resume
            </button>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[420px] lg:h-[520px] overflow-hidden">
          <TechCore interactive className="absolute inset-0" />
        </div>
      </div>
    </section>
  )
}

export default Hero
