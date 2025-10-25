'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '50px 0px',
  })

  const experiences = [
    {
      company: "RAISC AI",
      position: "Cofounder - Tech",
      duration: "Current",
      location: "NSTP, Islamabad, Pakistan",
      description: "Co-founding and leading technical development of an AI-powered mental wellness platform",
      achievements: [
        "Co-founded RAISC, an innovative AI-powered mental health platform focused on personalized wellness solutions",
        "Led technical architecture and development of the flagship mental wellness application",
        "Implemented real-time mood analysis using advanced AI algorithms and machine learning models",
        "Developed personalized well-being insights system with intelligent recommendation engine",
        "Created AI-powered journal assistant with natural language processing capabilities",
        "Built secure and private platform with end-to-end encryption ensuring complete data protection",
        "Designed user-friendly interface with modern UX/UI principles for mental health accessibility",
        "Integrated advanced analytics for tracking mental health patterns and progress over time"
      ],
      technologies: ["AI/ML", "React", "Node.js", "Python", "TensorFlow", "NLP", "Encryption", "Analytics"],
      linkedin: "https://www.linkedin.com/company/raiscai/",
      color: "from-pink-500 to-purple-600"
    },
    {
      company: "Data Pulse Technologies",
      position: "Senior Full Stack Developer",
      duration: "Current",
      location: "Remote",
      description: "Leading development for large-scale systems and managing production environments",
      achievements: [
        "Spearheaded development on the large-scale property management project, AG Property Manager, using Core Laravel for a European client",
        "Independently implemented new modules and functionalities, while managing server-side tasks using Nginx",
        "Handled production database with hundreds of thousands of records ensuring optimal performance",
        "Took ownership of the LocumSmart project, built on Django, with its deployment on cPanel and introduced new features",
        "Contributed to multiple projects built with Next.js, Django, and Spring Boot, focusing on full-stack development",
        "Successfully integrated various payment methods across multiple projects, enhancing their transactional capabilities",
        "Developed and customized multiple WordPress sites including Unique Pioneer (telecommunication) and Qualitydxb (inspection, certification, and testing)",
        "Optimized web performance and security using Nginx and database-level improvements",
        "Managed hosting on platforms like GoDaddy, Namecheap, and SiteGround"
      ],
      technologies: ["Laravel", "Django", "Next.js", "Spring Boot", "Nginx", "WordPress", "MySQL", "Payment Gateways"],
      linkedin: "https://www.linkedin.com/company/datapulsetechnologies/",
      color: "from-blue-500 to-blue-600"
    },
    {
      company: "Zikra Infotech LLC",
      position: "Junior Full Stack Developer",
      duration: "Previous",
      location: "Remote",
      description: "Developed B2B solutions and collaborated with cross-functional teams",
      achievements: [
        "Developed a B2B Outreach business management tool containing an Email Outreach Module with User built email flows",
        "Built a Leads Management System to handle multiple leads in a user and business friendly way",
        "Utilized Laravel, React, and Inertia in building a product quality project",
        "Worked with the QA team to finalize the product for initial user testing",
        "Collaborated with cross-functional teams to implement robust solutions",
        "Ensured scalability and performance optimization for seamless user experience"
      ],
      technologies: ["Laravel", "React", "Inertia", "MySQL", "JavaScript"],
      linkedin: "https://www.linkedin.com/company/zikra-infotech-llc/",
      color: "from-purple-500 to-purple-600"
    },
    {
      company: "Al Raheem Technologies",
      position: "MEAN Stack Intern",
      duration: "Internship",
      location: "NSTP, Islamabad, Pakistan",
      description: "Contributed to CRM development for Saudi client using MEAN Stack",
      achievements: [
        "Contributed to the development of a CRM for a Saudi client using MEAN Stack",
        "Specialized in Angular for creating a responsive and user-friendly interface",
        "Worked closely with the backend team to understand API integrations and server-side functionalities"
      ],
      technologies: ["Angular", "Node.js", "Express", "MongoDB", "TypeScript"],
      linkedin: "https://www.linkedin.com/company/al-raheem-technologies/",
      color: "from-green-500 to-green-600"
    },
    {
      company: "GDSC NUST",
      position: "Web Development Lead",
      duration: "Leadership",
      location: "NUST, Islamabad, Pakistan",
      description: "Leading web development team and conducting training sessions",
      achievements: [
        "Spearheading the Web Development team at GDSC, NUST, with a focus on mentoring team members in web development technologies",
        "Conducting training sessions to equip team members with skills necessary to actively contribute to Google solutions",
        "Leading seminars where I represent the Web Team, sharing insights into innovative web development practices"
      ],
      technologies: ["Leadership", "Training", "Mentoring", "Web Technologies"],
      linkedin: "https://www.linkedin.com/company/gdscnust/mycompany/",
      color: "from-yellow-500 to-yellow-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Floating Background Elements */}
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
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
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
          className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-lg"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "visible"}
          className="text-center"
          style={{ minHeight: '200px', opacity: 1 }}
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Professional Experience
          </motion.h1>
          
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"
          ></motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            My journey in software development and the companies that have shaped my career
          </motion.p>

          {/* Career Progress Timeline */}
          <motion.div 
            variants={itemVariants}
            className="mb-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Experience Highlights</h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center text-center flex-1"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 0 0px rgba(59, 130, 246, 0)",
                          "0 0 20px rgba(59, 130, 246, 0.5)",
                          "0 0 0px rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center mb-3 shadow-lg`}
                    >
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </motion.div>
                    <h4 className="text-sm font-semibold text-white mb-1">{exp.company}</h4>
                    <p className="text-xs text-gray-400">{exp.position}</p>
                    <p className="text-xs text-blue-400 font-medium">{exp.duration}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-700/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-800/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1 text-left">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center mb-6"
                    >
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full mr-4 shadow-lg`}
                      ></motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        <p className="text-gray-400">{exp.position}</p>
                      </div>
                    </motion.div>
                    
                    <div className="space-y-3 mb-6">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-blue-400">Type:</span> {exp.duration}
                        </p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <p className="text-sm text-gray-300">
                          <span className="font-semibold text-green-400">Location:</span> {exp.location}
                        </p>
                      </motion.div>
                    </div>
                    
                    <motion.p 
                      whileHover={{ scale: 1.02 }}
                      className="text-gray-300 mb-6 leading-relaxed"
                    >
                      {exp.description}
                    </motion.p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"
                        ></motion.div>
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.1, 
                              rotate: 2,
                              backgroundColor: "rgba(59, 130, 246, 0.2)"
                            }}
                            className="px-3 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full border border-gray-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* LinkedIn Link */}
                    <motion.a
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={exp.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaLinkedin className="w-4 h-4 mr-2" />
                      </motion.div>
                      View Company
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaExternalLinkAlt className="w-3 h-3 ml-1" />
                      </motion.div>
                    </motion.a>
                  </div>

                  {/* Achievements */}
                  <div className="lg:col-span-2 text-left">
                    <motion.h4 
                      whileHover={{ scale: 1.05 }}
                      className="text-lg font-semibold text-white mb-6 text-left"
                    >
                      Key Achievements:
                    </motion.h4>
                    <div className="space-y-4 text-left">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: achIndex * 0.1 }}
                          whileHover={{ 
                            x: 10, 
                            scale: 1.02,
                            backgroundColor: "rgba(55, 65, 81, 0.3)"
                          }}
                          className="p-3 rounded-lg transition-all duration-300"
                        >
                          <motion.span 
                            whileHover={{ color: "#ffffff" }}
                            className="text-gray-300 leading-relaxed transition-colors duration-300"
                          >
                            • {achievement}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Statistics Widget */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Career Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 <motion.div
                   whileHover={{ scale: 1.05, rotate: 2 }}
                   className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
                 >
                   <motion.div
                     animate={{ 
                       scale: [1, 1.1, 1],
                       color: ["#60a5fa", "#8b5cf6", "#60a5fa"]
                     }}
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                     className="text-4xl font-bold text-blue-400 mb-2"
                   >
                     2+
                   </motion.div>
                   <div className="text-gray-300 font-semibold">Years Experience</div>
                   <div className="text-gray-400 text-sm">Professional Development</div>
                 </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="text-center p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl font-bold text-green-400 mb-2"
                  >
                    15+
                  </motion.div>
                  <div className="text-gray-300 font-semibold">Projects</div>
                  <div className="text-gray-400 text-sm">Delivered</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                >
                  <motion.div
                    animate={{ 
                      color: "#ec4899"
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
                  >
                    10+
                  </motion.div>
                  <div className="text-gray-300 font-semibold">Technologies</div>
                  <div className="text-gray-400 text-sm">Mastered</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="text-center p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30"
                >
                  <motion.div
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(251, 191, 36, 0)",
                        "0 0 20px rgba(251, 191, 36, 0.8)",
                        "0 0 0px rgba(251, 191, 36, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-4xl font-bold text-yellow-400 mb-2"
                  >
                    100%
                  </motion.div>
                  <div className="text-gray-300 font-semibold">Dedication</div>
                  <div className="text-gray-400 text-sm">To Excellence</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
