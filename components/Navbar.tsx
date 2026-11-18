'use client'

import { useEffect, useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const items = [
    { name: 'Work', href: '#experience' },
    { name: 'RAISC', href: '#startup' },
    { name: 'Personal', href: '#personal' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0b0e13]/80 backdrop-blur-md">
      <div className="page-wrap flex h-16 items-center justify-between">
        <button
          onClick={() => go('#home')}
          className="text-sm font-normal tracking-tight text-bone"
        >
          Hammad Ahmed
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => go(item.href)}
              className="text-sm font-semibold uppercase tracking-nav text-ash hover:text-bone transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen((value) => !value)}
          className="md:hidden text-bone p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0e13]/95 px-5 pb-4">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => go(item.href)}
              className="block w-full py-3 text-left text-sm font-semibold uppercase tracking-nav text-ash hover:text-bone"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
