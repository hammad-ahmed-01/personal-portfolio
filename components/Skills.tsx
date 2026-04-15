'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaReact, 
  FaNodeJs, 
  FaLaravel, 
  FaPhp, 
  FaPython,
  FaJava,
  FaAngular
} from 'react-icons/fa'
import { SiNextdotjs as NextIcon, SiTailwindcss as TailwindIcon, SiSpringboot as SpringIcon, SiNestjs as NestIcon, SiSupabase as SupabaseIcon, SiGooglecloud as GoogleCloudIcon, SiCloudflare as CloudflareIcon } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'Next.js', icon: NextIcon, color: '#000000' },
    { name: 'NestJS', icon: NestIcon, color: '#ea2845' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Java', icon: FaJava, color: '#f89820' },
    { name: 'Spring Boot', icon: SpringIcon, color: '#6db33f' },
    { name: 'Laravel', icon: FaLaravel, color: '#ff2d20' },
    { name: 'Django', icon: FaPython, color: '#092e20' },
    { name: 'React', icon: FaReact, color: '#61dafb' },
    { name: 'Angular', icon: FaAngular, color: '#dd0031' },
    { name: 'Supabase', icon: SupabaseIcon, color: '#3ecf8e' },
    { name: 'Google Cloud', icon: GoogleCloudIcon, color: '#4285F4' },
    { name: 'Cloudflare', icon: CloudflareIcon, color: '#f38020' },
    { name: 'PHP', icon: FaPhp, color: '#79d4f1' },
    { name: 'Tailwind CSS', icon: TailwindIcon, color: '#38BDF8' },
  ]
  
  const expertise = [
    {
      title: 'Product Engineering',
      details: 'Feature Ownership, Scalable Delivery, Cross-team Collaboration',
      color: 'text-orange-400',
      border: 'border-orange-500/30'
    },
    {
      title: 'SaaS Architecture',
      details: 'Multi-tenant Design, RBAC, API Security',
      color: 'text-green-400',
      border: 'border-green-500/30'
    },
    {
      title: 'Microservices & APIs',
      details: 'Service Design, API Documentation, Integrations',
      color: 'text-indigo-400',
      border: 'border-indigo-500/30'
    },
    {
      title: 'Security Engineering',
      details: 'RLS, WAF, Rate Limiting, IAM',
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      title: 'Cloud & Infrastructure',
      details: 'Google Cloud, Cloudflare, Nginx',
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    {
      title: 'Governance & Delivery',
      details: 'GRC Controls, SLA Docs, Secure SDLC',
      color: 'text-yellow-400',
      border: 'border-yellow-500/30'
    },
    {
      title: 'Version Control & Ops',
      details: 'Git, GitHub, CI/CD, Linux',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      title: 'Payment Integration',
      details: 'Stripe, PayPal, Razorpay',
      color: 'text-pink-400',
      border: 'border-pink-500/30'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="section-padding bg-gray-800">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5 sm:mb-6"
          >
            Skills & Technologies
          </motion.h1>
          
          <motion.div 
            variants={itemVariants} 
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 sm:mb-12"
          ></motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto px-2 sm:px-0"
          >
            Here are the core technologies and workflows I use to build scalable SaaS products, microservices, and secure cloud applications
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-5 md:gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
              >
                <div className="h-full bg-gray-700/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/20">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 flex justify-center"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </motion.div>
                    <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-14 sm:mt-20 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl p-5 sm:p-8 border border-gray-600/30"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Additional Expertise</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Cross-functional strengths I apply across SaaS delivery, platform engineering, and product execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-center justify-items-center">
              {expertise.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`h-full w-full max-w-xs rounded-xl border ${item.border} bg-gray-900/40 p-5 transition-all duration-300`}
                >
                  <div className={`font-semibold mb-2 ${item.color}`}>{item.title}</div>
                  <div className="text-sm text-gray-300 leading-relaxed">{item.details}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
