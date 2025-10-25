'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaEnvelope, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
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

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "hammad_ahmed_123@outlook.com",
      link: "mailto:hammad_ahmed_123@outlook.com",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/hammad-ahmed-4676a6225/",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "View my projects",
      link: "https://github.com/hammad-ahmed-01",
      color: "from-gray-500 to-gray-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Islamabad, Pakistan",
      link: null,
      color: "from-green-500 to-green-600"
    }
  ]

  const copyEmail = () => {
    navigator.clipboard.writeText('hammad_ahmed_123@outlook.com')
    alert('Email copied to clipboard!')
  }

  return (
    <section id="contact" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rounded-full"
        />
      </div>

      <div className="container-max relative z-10">
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
            Get In Touch
          </motion.h1>
          
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"
          ></motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            Drop by & say Hello. I'm always excited to work on new projects and collaborate with amazing people.
          </motion.p>

          {/* Contact Methods */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-800/20 min-h-[280px] flex flex-col justify-center">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <method.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className={`text-gray-400 mb-4 leading-relaxed ${method.title === 'Email' ? 'break-all text-xs md:text-sm' : 'text-sm'}`}>
                      {method.value}
                    </p>
                    {method.link ? (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-600/50 transition-colors duration-300"
                      >
                        {method.title === 'Email' ? 'Copy Email' : 'Visit'}
                      </motion.a>
                    ) : (
                      <span className="inline-block px-4 py-2 bg-gray-700/50 text-gray-400 rounded-full">
                        Location
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to work together?</h3>
            <p className="text-gray-300 mb-6">
              I'm currently available for freelance projects and full-time opportunities. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyEmail}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaEnvelope className="w-5 h-5" />
                Send Email
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/hammad-ahmed-4676a6225/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaLinkedin className="w-5 h-5" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
