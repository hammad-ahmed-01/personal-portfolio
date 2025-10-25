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
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Me
          </motion.h1>
          
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
              >
                I am a <span className="text-white font-semibold">Computer Science graduate from NUST</span> and Full Stack Developer with 2+ years of experience building scalable web applications for international clients and startups. My expertise spans{' '}
                <span className="text-blue-400 font-semibold">Laravel, Next.js, Django, Golang and Spring Boot</span>, along with strong skills in databases, server optimization, and microservices architecture.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
              >
                I've led development of enterprise systems, optimized high-volume production databases, and delivered client-centric platforms in sectors like{' '}
                <span className="text-purple-400 font-semibold">property management, healthcare, and B2B solutions</span>. Beyond professional roles, I co-founded a startup incubated at Pakistan's top science & technology park,{' '}
                <span className="text-green-400 font-semibold">NSTP</span>, turning a research-driven idea into a real-world product.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
