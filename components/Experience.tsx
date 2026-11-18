type Link = { label: string; href: string }

type Role = {
  company: string
  role: string
  when: string
  summary: string
  points: string[]
  links?: Link[]
  stack: string[]
}

const roles: Role[] = [
  {
    company: 'VendorPot',
    role: 'Senior Software Engineer → Project Lead / FDE',
    when: 'Current',
    summary:
      'AI marketplace connecting technology vendors with GCC buyers, plus agent products owned as the company moves toward an FDE model.',
    points: [
      'Architected core marketplace services on Next.js, NestJS, and Supabase, with a microservices approach for catalog, procurement, and integrations.',
      'Shipped the main product as a senior engineer, then led v2 with a small team of developers.',
      'Designed multi-tenant access: Row-Level Security, tenant-aware queries, RBAC, and least-privilege sessions.',
      'Hardened the edge with Cloudflare WAF, DDoS protection, and rate limiting, and wrote the API, logging, and SLA standards behind it.',
      'Built Orin from the idea and business decisions through production. Early FDE work now: a lead-intelligence project and a customer-experience agent.',
    ],
    links: [
      { label: 'vendorpot.com', href: 'https://vendorpot.com/' },
      { label: 'beta.vendorpot.com', href: 'https://beta.vendorpot.com/' },
      { label: 'orin.vendorpot.com', href: 'https://orin.vendorpot.com/' },
    ],
    stack: ['Next.js', 'NestJS', 'Supabase', 'GCP', 'Cloudflare', 'RLS', 'RBAC', 'WAF'],
  },
  {
    company: 'Data Pulse Technologies',
    role: 'Senior Full Stack · independent client ownership',
    when: 'Previous',
    summary:
      'Ran client products as a one-person loop — contact, analysis, architecture, code, and production — for European and other remote clients.',
    points: [
      'Owned AG Property Manager end to end: client conversations, business decisions, Laravel modules, and live operations.',
      'Kept a production database of hundreds of thousands of records healthy, with Nginx, performance work, and hosting across the stack.',
      'Took LocumSmart (Django, cPanel) from ownership through new features, and contributed on Next.js, Django, and Spring Boot systems.',
      'Integrated payments and shipped additional client properties, including telecom and inspection sites, with the same production responsibility.',
    ],
    links: [{ label: 'agpropertymanager.com', href: 'https://agpropertymanager.com/' }],
    stack: ['Laravel', 'Django', 'Next.js', 'Spring Boot', 'Nginx', 'MySQL', 'Payments'],
  },
  {
    company: 'Zikra Infotech LLC',
    role: 'Junior Full Stack Developer',
    when: 'Previous',
    summary: 'B2B outreach product: email flows and a leads system built for real user testing.',
    points: [
      'Built user-defined email outreach flows and a leads management system in Laravel, React, and Inertia.',
      'Worked with QA to get the product ready for the first users, with an eye on scale and day-to-day performance.',
    ],
    stack: ['Laravel', 'React', 'Inertia', 'MySQL'],
  },
  {
    company: 'Al Raheem Technologies',
    role: 'MEAN Stack Intern',
    when: 'Internship',
    summary: 'CRM for a Saudi client. Angular on the interface, Node and Express behind it.',
    points: [
      'Built responsive Angular views and paired them with the backend team’s APIs and server-side flows.',
    ],
    stack: ['Angular', 'Node.js', 'Express', 'MongoDB'],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-pad band-open">
      <div className="page-wrap">
        <p className="kicker">Experience</p>
        <h2 className="display text-[36px] sm:text-[48px] leading-[1.1] mb-4 max-w-3xl">
          Client work, architecture, and production
        </h2>
        <p className="body-light max-w-2xl mb-14">
          Forward deployed on the engagements I owned. The engineering underneath — services, tenancy, security, and ops — stayed in the job.
        </p>

        <div className="space-y-16 sm:space-y-20">
          {roles.map((job) => (
            <article key={job.company} className="panel-quiet p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
              <div className="lg:col-span-4">
                <h3 className="display text-[28px] sm:text-[36px] leading-none">{job.company}</h3>
                <p className="text-iris text-sm font-normal mt-3">{job.role}</p>
                <p className="text-ash text-xs uppercase tracking-nav font-semibold mt-2">{job.when}</p>
              </div>
              <div className="lg:col-span-8">
                <p className="body-light mb-5">{job.summary}</p>
                <ul className="space-y-3 mb-6">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm sm:text-base font-extralight text-bone/90 leading-relaxed">
                      <span className="text-saffron" aria-hidden="true">·</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {job.links && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5">
                    {job.links.map((link) => (
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
                )}
                <p className="text-xs uppercase tracking-nav text-ash font-semibold">
                  {job.stack.join('  ·  ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
