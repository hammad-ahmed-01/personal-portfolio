'use client'

import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('hammad_ahmed_123@outlook.com')
  }

  return (
    <section id="contact" className="section-pad band-verdant">
      <div className="page-wrap grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <p className="kicker">Contact</p>
          <h2 className="display text-[42px] sm:text-[64px] leading-[1.05] mb-6">
            Start a conversation
          </h2>
          <p className="body-light max-w-md mb-8">
            Open to FDE and product engineering roles where architecture, security, and production sit with the same person.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <button onClick={copyEmail} className="btn-pill">
              Copy email
            </button>
            <a
              href="https://www.linkedin.com/in/hammad-ahmed-4676a6225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-nav text-ash hover:text-bone"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 content-end">
          <a href="mailto:hammad_ahmed_123@outlook.com" className="group">
            <FaEnvelope className="w-4 h-4 text-iris mb-3" />
            <p className="text-xs uppercase tracking-nav text-ash font-semibold mb-1">Email</p>
            <p className="text-sm font-extralight text-bone break-all group-hover:text-saffron">
              hammad_ahmed_123@outlook.com
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/hammad-ahmed-4676a6225/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaLinkedin className="w-4 h-4 text-iris mb-3" />
            <p className="text-xs uppercase tracking-nav text-ash font-semibold mb-1">LinkedIn</p>
            <p className="text-sm font-extralight text-bone group-hover:text-saffron">Hammad Ahmed</p>
          </a>
          <a
            href="https://github.com/hammad-ahmed-01"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <FaGithub className="w-4 h-4 text-iris mb-3" />
            <p className="text-xs uppercase tracking-nav text-ash font-semibold mb-1">GitHub</p>
            <p className="text-sm font-extralight text-bone group-hover:text-saffron">hammad-ahmed-01</p>
          </a>
          <div>
            <p className="text-xs uppercase tracking-nav text-ash font-semibold mb-1">Location</p>
            <p className="text-sm font-extralight text-bone">Islamabad, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
