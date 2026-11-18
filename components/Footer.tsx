import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  const social = [
    { icon: FaGithub, href: 'https://github.com/hammad-ahmed-01', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hammad-ahmed-4676a6225/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:hammad_ahmed_123@outlook.com', label: 'Email' },
  ]

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0c1118] py-10">
      <div className="page-wrap flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="text-bone font-normal">Hammad Ahmed</p>
          <p className="text-sm font-extralight text-ash mt-1">Forward Deployed Engineer</p>
        </div>
        <div className="flex items-center gap-5">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ash hover:text-bone transition-colors"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="page-wrap text-xs text-ash mt-8">© {year} Hammad Ahmed</p>
    </footer>
  )
}

export default Footer
