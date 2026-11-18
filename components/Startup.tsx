import { FaGithub } from 'react-icons/fa'

const repos = [
  {
    name: 'RAISC Chatbot',
    href: 'https://github.com/hammad-ahmed-01/RAISC-Chatbot',
    note: 'FastAPI · intake and therapy chat · English and Roman Urdu · voice',
  },
  {
    name: 'raisc_frontend',
    href: 'https://github.com/hammad-ahmed-01/raisc_frontend',
    note: 'Next.js · public site, patient and clinician surfaces',
  },
  {
    name: 'RAISC_backend',
    href: 'https://github.com/hammad-ahmed-01/RAISC_backend',
    note: 'Django · accounts, sessions, clinics, profile sync',
  },
]

const Startup = () => {
  return (
    <section id="startup" className="section-pad band-verdant">
      <div className="page-wrap grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <p className="kicker">Built in public</p>
          <h2 className="display text-[42px] sm:text-[64px] leading-[1.05] mb-6">RAISC</h2>
          <p className="body-light max-w-xl mb-4">
            A team building a mental wellness platform in the open — an AI companion beside paths to licensed care — aimed at how hard support is to reach.
          </p>
          <p className="text-sm font-extralight text-ash max-w-xl mb-8">
            Not a crisis service. The product is at raisc.org. Chatbot, frontend, and patient API are public.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <a href="https://raisc.org" target="_blank" rel="noopener noreferrer" className="btn-pill">
              Visit raisc.org
            </a>
            <a
              href="https://stage.raisc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-nav text-ash hover:text-bone"
            >
              See stage build
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <p className="text-xs uppercase tracking-nav font-semibold text-saffron">Open source</p>
          {repos.map((repo) => (
            <a key={repo.href} href={repo.href} target="_blank" rel="noopener noreferrer" className="block group">
              <p className="flex items-center gap-2 text-lg font-normal text-bone group-hover:text-saffron transition-colors">
                <FaGithub className="w-4 h-4 text-ash" />
                {repo.name}
              </p>
              <p className="text-sm font-extralight text-silver mt-1">{repo.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Startup
