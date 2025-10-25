'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode, FaRocket } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/hammad-ahmed-01",
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/hammad-ahmed-4676a6225/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:hammad_ahmed_123@outlook.com",
      label: "Email",
      color: "hover:text-yellow-400"
    }
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-8 h-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 w-6 h-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-sm"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-4"
              >
                <h3 className="text-2xl font-bold gradient-text">Hammad Ahmed</h3>
                <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
              </motion.div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building scalable web applications and turning ideas into reality through code.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    whileHover={{ x: 5, color: "#60a5fa" }}
                    className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">hammad_ahmed_123@outlook.com</p>
                <p className="text-gray-400 text-sm">Islamabad, Pakistan</p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-gray-400 ${social.color} transition-colors duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700/50 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FaCode className="w-4 h-4" />
              </motion.div>
              <span>© {currentYear} Hammad Ahmed. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>and</span>
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaRocket className="w-4 h-4 text-blue-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
