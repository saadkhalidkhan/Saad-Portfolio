import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          {personalInfo.professionalSummary && personalInfo.professionalSummary.length > 0 && (
            <motion.div variants={itemVariants} className="mb-12">
              <div className="space-y-4">
                {personalInfo.professionalSummary.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              {personalInfo.journeyTitle}
            </h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {personalInfo.journeyText}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Key Achievements
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {personalInfo.keyAchievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="p-4 bg-background rounded-xl border border-border"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
