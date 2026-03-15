import { motion } from 'framer-motion'
import { achievements } from '@/data/achievements'
import { cn } from '@/lib/utils'

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Leadership':
        return 'from-blue-500 to-blue-600'
      case 'Technical':
        return 'from-green-500 to-green-600'
      case 'Education':
        return 'from-purple-500 to-purple-600'
      case 'Social Impact':
        return 'from-orange-500 to-orange-600'
      case 'Security':
        return 'from-red-500 to-red-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones and recognitions that highlight my journey in technology and leadership
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300",
                  getCategoryColor(achievement.category)
                )} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <span className={cn(
                      "px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r text-white",
                      getCategoryColor(achievement.category)
                    )}>
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Year */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      {achievement.year}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={cn(
                  "absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  `border-transparent bg-gradient-to-r ${getCategoryColor(achievement.category)} bg-clip-border`
                )} />
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Years Experience", value: "8+" },
              { label: "Apps Delivered", value: "10+" },
              { label: "Team Members Led", value: "15+" },
              { label: "Users Impacted", value: "10M+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-background rounded-xl border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
