import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaPython,
  FaJava,
  FaAngular,
} from 'react-icons/fa'
import {
  SiNextdotjs as NextIcon,
  SiTailwindcss as TailwindIcon,
  SiSpringboot as SpringIcon,
  SiNestjs as NestIcon,
  SiSupabase as SupabaseIcon,
  SiGooglecloud as GoogleCloudIcon,
  SiCloudflare as CloudflareIcon,
} from 'react-icons/si'

const skills = [
  { name: 'Next.js', icon: NextIcon, color: '#ffffff' },
  { name: 'NestJS', icon: NestIcon, color: '#ea2845' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Java', icon: FaJava, color: '#f89820' },
  { name: 'Spring Boot', icon: SpringIcon, color: '#6db33f' },
  { name: 'Laravel', icon: FaLaravel, color: '#ff2d20' },
  { name: 'Django', icon: FaPython, color: '#44b78b' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Angular', icon: FaAngular, color: '#dd0031' },
  { name: 'Supabase', icon: SupabaseIcon, color: '#3ecf8e' },
  { name: 'Google Cloud', icon: GoogleCloudIcon, color: '#4285F4' },
  { name: 'Cloudflare', icon: CloudflareIcon, color: '#f38020' },
  { name: 'PHP', icon: FaPhp, color: '#79d4f1' },
  { name: 'Tailwind', icon: TailwindIcon, color: '#38BDF8' },
]

const capabilities = [
  { title: 'SaaS architecture', detail: 'Multi-tenant design, service boundaries, API contracts' },
  { title: 'Security engineering', detail: 'RLS, WAF, rate limiting, IAM and RBAC' },
  { title: 'Microservices', detail: 'Service design, integrations, and documented APIs' },
  { title: 'Cloud and edge', detail: 'Google Cloud, Cloudflare, Nginx, production hosting' },
  { title: 'Governance', detail: 'Secure SDLC, logging standards, SLA documentation' },
  { title: 'Payments', detail: 'Stripe, PayPal, and Razorpay on live products' },
  { title: 'Delivery', detail: 'Git, CI/CD, Linux, and the handover after launch' },
  { title: 'AI agents', detail: 'From the product decision through a system in production' },
]

const Skills = () => {
  return (
    <section id="skills" className="section-pad band-lift">
      <div className="page-wrap">
        <p className="kicker">Toolkit</p>
        <h2 className="display text-[36px] sm:text-[48px] leading-[1.1] mb-4">Skills for the field</h2>
        <p className="body-light max-w-2xl mb-12">
          The stack and the platform work behind an FDE engagement: architecture, security, and the tools that ship it.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 mb-16">
          {capabilities.map((item) => (
            <div key={item.title}>
              <h3 className="text-bone text-lg font-normal mb-2">{item.title}</h3>
              <p className="text-sm font-extralight text-silver leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-8 gap-x-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-2">
              <skill.icon className="text-3xl" style={{ color: skill.color }} />
              <span className="text-xs text-ash text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
