import { SiNotion } from 'react-icons/si'

const PLAN_URL =
  'https://www.notion.so/30-60-90-Day-Execution-Plan-2d7cd78fcee98077bb23f4ecb7a0b094'

const phases = [
  {
    days: '01–30',
    title: 'Embed',
    detail: 'Map the workflow, lock service and security boundaries, and stand up auth, data, and CI.',
  },
  {
    days: '31–60',
    title: 'Ship core',
    detail: 'Onboarding, catalog, orders, payments, and the tests that keep the core honest.',
  },
  {
    days: '61–90',
    title: 'Harden',
    detail: 'Production, observability, zero-downtime deploys, and a handover the team can run.',
  },
]

const ExecutionPlan = () => {
  return (
    <section id="execution-plan" className="section-pad band-lift">
      <div className="page-wrap">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="kicker">FDE planning</p>
            <h2 className="display text-[36px] sm:text-[48px] leading-[1.1] mb-3">30–60–90 day plan</h2>
            <p className="body-light max-w-xl">
              A written plan for taking a SaaS marketplace from architecture to a system that can run in production.
            </p>
          </div>
          <a
            href={PLAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-nav text-ash hover:text-bone"
          >
            <SiNotion className="w-4 h-4" />
            Read full plan
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {phases.map((phase) => (
            <div key={phase.days} className="panel-quiet p-5">
              <p className="text-xs uppercase tracking-nav font-semibold text-saffron mb-2">
                Days {phase.days}
              </p>
              <h3 className="text-bone text-2xl font-normal mb-2">{phase.title}</h3>
              <p className="text-sm font-extralight text-silver leading-relaxed">{phase.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExecutionPlan
