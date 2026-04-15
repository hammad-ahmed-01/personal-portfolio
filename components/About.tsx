'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5 sm:mb-6">
            About Me
          </motion.h1>
          
          <motion.div variants={itemVariants} className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-10 sm:mb-12"></motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-12 border border-gray-700/50">
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8"
              >
                I am a <span className="text-white font-semibold">Computer Science graduate from NUST</span> and Senior Software Engineer with 2+ years of experience building scalable web applications for international clients and startups. My core product engineering stack includes{' '}
                <span className="text-blue-400 font-semibold">Next.js, NestJS, Laravel, Django, and Spring Boot</span>, supported by strong expertise in microservices, multi-tenant architecture, database design, and cloud-native system development.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                I have led enterprise-grade platform development, optimized high-volume production databases, and delivered client-centric SaaS solutions across{' '}
                <span className="text-purple-400 font-semibold">property management, healthcare, and B2B domains</span> for GCC and European markets. Alongside application development, I work with infrastructure and platform tooling such as{' '}
                <span className="text-green-400 font-semibold">Supabase, Google Cloud, and Cloudflare</span>, and contribute to SaaS security through practical policy alignment, Row-Level Security (RLS), API hardening with WAF and rate limiting, IAM/RBAC controls, and compliance-facing documentation including SLA standards.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
