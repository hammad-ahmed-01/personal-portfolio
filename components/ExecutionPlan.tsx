'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { SiNotion } from 'react-icons/si'

const PLAN_URL =
  'https://www.notion.so/30-60-90-Day-Execution-Plan-2d7cd78fcee98077bb23f4ecb7a0b094'

const phases = [
  {
    days: '01–30',
    title: 'Foundation',
    detail: 'Service boundaries, stack choices, and a walking skeleton: auth, Postgres, Next.js, and CI/CD.',
  },
  {
    days: '31–60',
    title: 'Core build',
    detail: 'Vendor onboarding, catalog and search, orders, split payments, and automated tests.',
  },
  {
    days: '61–90',
    title: 'Production',
    detail: 'Kubernetes, observability, zero-downtime deploys, and a documented handover.',
  },
]

const ExecutionPlan = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  })

  return (
    <section id="execution-plan" className="section-padding bg-gray-950 relative">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div className="text-left">
              <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-blue-300/80 mb-3">
                Planning exercise
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                30–60–90 Day <span className="gradient-text">Execution Plan</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed">
                A proposed plan for taking a SaaS marketplace from architecture to a production-ready system.
              </p>
            </div>

            <a
              href={PLAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 shrink-0 px-4 py-2.5 rounded-full border border-white/15 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition-colors"
            >
              <SiNotion className="w-4 h-4" />
              Read the full plan
              <FaExternalLinkAlt className="w-3 h-3 text-gray-400" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {phases.map((phase) => (
              <div
                key={phase.days}
                className="rounded-xl border border-white/10 bg-gray-900/60 p-4 sm:p-5 text-left"
              >
                <p className="text-xs font-semibold tracking-wide text-blue-300 mb-2">
                  Days {phase.days}
                </p>
                <h3 className="text-base font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{phase.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExecutionPlan
