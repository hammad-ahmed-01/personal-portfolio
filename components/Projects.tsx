'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Psychology Management App",
      description: "A simple Laravel-based application I built to practice CRUD operations and learn more about PHP frameworks.",
      image: "/proj5.jpg",
      demo: null,
      github: "https://github.com/hammad-ahmed-01/Laravel-Stack-Psychology-Application",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      type: "code"
    },
    {
      title: "Social Posts App",
      description: "A MERN stack project where I experimented with React and MongoDB to create a basic social media interface.",
      image: "/proj3.jpg",
      demo: null,
      github: "https://github.com/hammad-ahmed-01/Full-MERN-Stack-CRUD-application",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      type: "code"
    },
    {
      title: "Library Management System",
      description: "A straightforward PHP project I created to practice database operations and basic web development concepts.",
      image: "/proj4.jpeg",
      demo: null,
      github: "https://github.com/hammad-ahmed-01/PHP-website-with-mySQL-DB",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      type: "code"
    }
  ]

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
    <section id="projects" className="section-padding bg-gray-800">
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
            Personal Projects
          </motion.h1>
          
          <motion.div 
            variants={itemVariants} 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"
          ></motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            Some hobby projects I've worked on in my spare time to explore different technologies and have fun coding
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 border border-gray-600/30 rounded-2xl overflow-hidden hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-800/20">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-300"
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Type Badge */}
                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.type === 'live' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : project.type === 'video'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                        {project.type === 'live' ? 'Live Demo' : project.type === 'video' ? 'Video Demo' : 'Code Only'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
