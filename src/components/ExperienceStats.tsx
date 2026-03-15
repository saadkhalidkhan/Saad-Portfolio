import { motion } from 'framer-motion'

const stats = [
  { value: '30+', label: 'Production Apps' },
  { value: '10+', label: 'Industries' },
  { value: '30+', label: 'GitHub Repositories' },
]

export function ExperienceStats() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            I have extensive experience developing production-ready Android applications across various industries including healthcare, fintech, telecommunications, and education.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="p-6 bg-background rounded-xl border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
