import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { featuredProjects } from '@/data/featuredProjects'
import { cn } from '@/lib/utils'

const PLACEHOLDER_IMAGE = 'https://placehold.co/640x360/1e3a5f/94a3b8?text=App+Screenshot'

function ProjectImage({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false)
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || ''
  const imageUrl = src ? (src.startsWith('http') ? src : `${base}${src.startsWith('/') ? src : '/' + src}`) : null
  const effectiveUrl = imageUrl && !failed ? imageUrl : PLACEHOLDER_IMAGE
  return (
    <img
      src={effectiveUrl}
      alt={name}
      className="w-full h-full object-contain"
      onError={() => setFailed(true)}
    />
  )
}

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my production applications across healthcare, fintech, telecommunications, and education industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-background rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Project image */}
                <div className="relative w-full h-44 sm:h-52 bg-muted overflow-hidden">
                  <ProjectImage src={project.image} name={project.name} />
                  <span className="absolute top-3 right-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {project.badge}
                  </span>
                </div>
                <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium',
                      'bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
                    )}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
