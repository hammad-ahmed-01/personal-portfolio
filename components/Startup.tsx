'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheck, FaArrowRight, FaBrain, FaShieldAlt, FaChartLine, FaRobot } from 'react-icons/fa'

const Startup = () => {
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

  const features = [
    {
      icon: FaChartLine,
      title: "Real-time Mood Analysis",
      description: "Advanced AI algorithms analyze emotional patterns and provide instant insights"
    },
    {
      icon: FaBrain,
      title: "Personalized Well-being Insights",
      description: "Customized recommendations based on individual mental health patterns"
    },
    {
      icon: FaRobot,
      title: "AI-Powered Journal Assistant",
      description: "Intelligent companion that helps users reflect and track their mental journey"
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Private Platform",
      description: "End-to-end encryption ensuring complete privacy and data protection"
    }
  ]

  return (
    <section id="startup" className="section-padding bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-40 h-40 border border-pink-400/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-32 h-32 border border-blue-400/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Our Work In Action
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  RAISC Mental Health AI
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  Our flagship FYP project turned Startup, RAISC, is an AI-powered mental wellness platform that helps individuals track, understand, and improve their mental health through intelligent insights and personalized recommendations.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="flex items-start space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center"
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://raisc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-pink-500 text-white font-semibold rounded-full hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 gap-2"
              >
                Visit RAISC
                <FaArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Right Side - Technical Flow */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-pink-500/30 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Architecture</h3>
                
                {/* Tech Stack Flow */}
                <div className="space-y-6">
                  {/* Frontend Layer */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl p-4 border border-blue-500/30"
                  >
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                      Frontend Layer
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'React', 'TypeScript'].map((tech, index) => (
                        <span key={tech} className="px-3 py-1 bg-blue-500/30 text-blue-200 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* API Layer */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-xl p-4 border border-green-500/30"
                  >
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                      Core API & Data
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Django', 'FastAPI', 'PostgreSQL', 'Redis'].map((tech, index) => (
                        <span key={tech} className="px-3 py-1 bg-green-500/30 text-green-200 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* AI Layer */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/30"
                  >
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                      AI & ML Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Llama', 'GPT-OSS-20B', 'ChromaDB', 'LangChain', 'LangSmith'].map((tech, index) => (
                        <span key={tech} className="px-3 py-1 bg-purple-500/30 text-purple-200 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Infrastructure */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl p-4 border border-orange-500/30"
                  >
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                      Infrastructure & Services
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Firebase', 'Supabase', 'Groq API', 'LiveKit', 'Deepgram', 'Docker'].map((tech, index) => (
                        <span key={tech} className="px-3 py-1 bg-orange-500/30 text-orange-200 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                 {/* Visit Link */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 1.2 }}
                   className="mt-6 text-center"
                 >
                   <div className="mb-3">
                     <p className="text-gray-300 text-sm">See our current development progress on stage view</p>
                   </div>
                   <a
                     href="https://stage.raisc.org"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-blue-600 transition-all duration-300"
                   >
                     View Development Stage
                     <FaArrowRight className="w-4 h-4 ml-2" />
                   </a>
                 </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Startup
