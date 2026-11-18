import TechCore from './TechCore'

const builds = [
  {
    title: 'Orchestrix',
    blurb: 'A workflow engine I am building in public: DAG validation, synchronous runs, and SQLite history, on the way to durable execution.',
    links: [{ label: 'GitHub', href: 'https://github.com/hammad-ahmed-01/orchestrix' }],
  },
  {
    title: 'MeterStack',
    blurb: 'API management and monetization. One product, two repos: the control-plane API and the Next.js frontend.',
    links: [
      { label: 'Backend', href: 'https://github.com/hammad-ahmed-01/MeterStack-Backend' },
      { label: 'Frontend', href: 'https://github.com/hammad-ahmed-01/MeterStack-Frontend' },
    ],
  },
  {
    title: 'Team SoulAI',
    blurb: 'Transcend AI Hackathon 2025. A team build around agentic product surfaces.',
    links: [{ label: 'GitHub', href: 'https://github.com/hammad-ahmed-01/Team_SoulAI' }],
  },
  {
    title: 'AI Game Master',
    blurb: 'A side experiment in an AI-run game session — rules, turns, and a model in the chair.',
    links: [{ label: 'GitHub', href: 'https://github.com/hammad-ahmed-01/AI-Game-Master' }],
  },
  {
    title: 'GDSC NUST',
    blurb: 'Web Development Lead for the campus chapter. Mentoring, training sessions, and seminars — separate from client work.',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/gdscnust/mycompany/' }],
  },
]

const Projects = () => {
  return (
    <section id="personal" className="section-pad band-iris relative overflow-hidden">
      <TechCore className="pointer-events-none absolute -right-24 top-10 hidden lg:block w-[420px] h-[420px] opacity-70" />

      <div className="page-wrap relative">
        <p className="kicker">Off the clock</p>
        <h2 className="display text-[36px] sm:text-[56px] leading-[1.05] max-w-3xl mb-4">
          Personal builds
        </h2>
        <p className="body-light max-w-xl mb-14">
          Hobby systems, a hackathon, and campus leadership. The client record lives above. This is the lab.
        </p>

        <div className="max-w-3xl">
          {builds.map((item, index) => (
            <article key={item.title} className="py-7 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6">
              <p className="sm:col-span-1 text-saffron text-sm font-semibold tabular-nums">
                0{index + 1}
              </p>
              <div className="sm:col-span-11">
                <h3 className="display text-[24px] sm:text-[32px] leading-none mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base font-extralight text-silver leading-relaxed mb-3 max-w-2xl">
                  {item.blurb}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-saffron hover:text-bone transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <a
          href="https://github.com/hammad-ahmed-01"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 display text-[28px] sm:text-[40px] leading-none name-link"
        >
          Find more on GitHub
        </a>
      </div>
    </section>
  )
}

export default Projects
