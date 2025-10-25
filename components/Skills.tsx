'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaLaravel, 
  FaPhp, 
  FaPython,
  FaJava,
  FaAngular
} from 'react-icons/fa'
import { SiNextdotjs as NextIcon, SiTailwindcss as TailwindIcon, SiSpringboot as SpringIcon } from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: '#f16529' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#29a9df' },
    { name: 'JavaScript', icon: FaJs, color: '#f7e018' },
    { name: 'Tailwind CSS', icon: TailwindIcon, color: '#38BDF8' },
    { name: 'PHP', icon: FaPhp, color: '#79d4f1' },
    { name: 'Laravel', icon: FaLaravel, color: '#ff2d20' },
    { name: 'Python', icon: FaPython, color: '#3776ab' },
    { name: 'Django', icon: FaPython, color: '#092e20' },
    { name: 'React', icon: FaReact, color: '#61dafb' },
    { name: 'Next.js', icon: NextIcon, color: '#000000' },
    { name: 'Angular', icon: FaAngular, color: '#dd0031' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Java', icon: FaJava, color: '#f89820' },
    { name: 'Spring Boot', icon: SpringIcon, color: '#6db33f' },
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
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Skills & Technologies
          </motion.h1>
          
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"
          ></motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            Here are some of the technologies and frameworks I work with
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8"
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
                <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-gray-700/20">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl md:text-5xl mb-4 flex justify-center"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </motion.div>
                    <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
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
            className="mt-20 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-2xl p-8 border border-gray-600/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Additional Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-blue-400 font-semibold mb-2">Server Management</div>
                <div className="text-gray-400 text-sm">Nginx, cPanel, Linux</div>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-semibold mb-2">Database</div>
                <div className="text-gray-400 text-sm">PostgreSQL, MySQL, MongoDB</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-semibold mb-2">Payment Integration</div>
                <div className="text-gray-400 text-sm">Stripe, PayPal, Razorpay</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-semibold mb-2">Version Control</div>
                <div className="text-gray-400 text-sm">Git, GitHub</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
