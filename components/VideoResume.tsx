'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlay } from 'react-icons/fa'

const LOOM_EMBED_URL =
  'https://www.loom.com/embed/42793ca846334ae4abaa852139953262?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true'

const VideoResume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="video-resume"
      className="section-padding gradient-bg relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] border border-purple-400/10 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        {/* Film strip dots — left */}
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`left-${i}`} className="w-3 h-3 rounded-sm bg-white/40" />
          ))}
        </div>
        {/* Film strip dots — right */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`right-${i}`} className="w-3 h-3 rounded-sm bg-white/40" />
          ))}
        </div>

        {/* Floating play icons */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 left-[12%] hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <FaPlay className="w-4 h-4 text-blue-400/60 ml-0.5" />
        </motion.div>
        <motion.div
          animate={{ y: [8, -8, 8], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-28 right-[10%] hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <FaPlay className="w-3.5 h-3.5 text-purple-400/60 ml-0.5" />
        </motion.div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span className="text-sm font-medium text-gray-200 tracking-wide uppercase">
              Video Resume
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-5 sm:mb-6"
          >
            Meet Me in <span className="gradient-text">60 Seconds</span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 sm:mb-8"
          />

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-14 px-2 sm:px-0"
          >
            A quick intro to who I am, what I build, and why I love engineering great products.
          </motion.p>

          {/* Video player with glow ring */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto px-2 sm:px-0">
            <div className="relative">
              {/* Pulsing glow */}
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.98, 1.02, 0.98] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl"
                aria-hidden="true"
              />

              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg" aria-hidden="true" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg" aria-hidden="true" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg" aria-hidden="true" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg" aria-hidden="true" />

              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-purple-900/50 bg-gray-900/80 backdrop-blur-sm">
                <div className="relative w-full aspect-video">
                  <iframe
                    src={LOOM_EMBED_URL}
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    title="Hammad Ahmed - Video Resume"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoResume
