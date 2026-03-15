import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { experience } from '@/data/experience'
import { cn } from '@/lib/utils'

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section id="experience" className="py-20">
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
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full development lifecycle from architecture and API integration to performance tuning and production troubleshooting
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className={cn(
                    "relative flex items-start gap-6",
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-2 md:-translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div className={cn(
                    "flex-1 bg-background rounded-xl p-6 border border-border shadow-sm",
                    "hover:shadow-lg transition-all duration-300",
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  )}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {job.position}
                        </h3>
                        <p className="text-primary font-semibold mb-2">
                          {job.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{job.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {job.duration}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-foreground">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
