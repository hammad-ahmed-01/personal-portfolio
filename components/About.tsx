const loops = [
  {
    title: 'Discover',
    detail: 'Sit with the client, map the workflow, and decide what is actually worth building.',
  },
  {
    title: 'Architect',
    detail: 'Multi-tenant services, API boundaries, RLS, RBAC, and the controls that keep a SaaS safe.',
  },
  {
    title: 'Operate',
    detail: 'Ship it, harden the edge, watch production, and stay accountable after launch.',
  },
]

const About = () => {
  return (
    <section id="about" className="section-pad band-iris">
      <div className="page-wrap grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="kicker">How I work</p>
          <h2 className="display text-[36px] sm:text-[42px] leading-[1.15]">
            The whole loop, including the hard parts
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="body-light mb-6">
            Computer Science from NUST. I work as a Forward Deployed Engineer: embed with the problem,
            make the product calls, and own the system after it is live. Architecture and security
            are part of that job, not a separate slide.
          </p>
          <p className="body-light mb-10">
            That means service design, tenant isolation, Row-Level Security, identity and access,
            edge hardening with WAF and rate limits, and the docs and SLAs a production platform needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {loops.map((item) => (
              <div key={item.title} className="panel-quiet p-5">
                <h3 className="text-bone text-lg font-normal mb-2">{item.title}</h3>
                <p className="text-sm font-extralight text-silver leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
