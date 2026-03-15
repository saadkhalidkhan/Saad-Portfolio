import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ExternalLink, X } from 'lucide-react'
import { articles } from '@/data/articles'
import { cn, formatDate } from '@/lib/utils'

export function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))]
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

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
      case 'Tech':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Leadership':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'Strategy':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <section id="articles" className="py-20">
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
              Published <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights on technology, leadership, and business strategy from my experience in the field
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Article */}
          {selectedCategory === 'All' && (
            <motion.div variants={itemVariants} className="mb-12">
              {(() => {
                const featured = articles.find(article => article.featured)
                if (!featured) return null
                
                return (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                        Featured
                      </span>
                      <span className={cn("px-3 py-1 text-sm rounded-full font-medium", getCategoryColor(featured.category))}>
                        {featured.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{featured.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featured.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featured.readTime}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedArticle(featured)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                )
              })()}
            </motion.div>
          )}

          {/* Articles Grid */}
          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={cn("px-2 py-1 text-xs rounded-full font-medium", getCategoryColor(article.category))}>
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className={cn("px-3 py-1 text-sm rounded-full font-medium", getCategoryColor(selectedArticle.category))}>
                      {selectedArticle.category}
                    </span>
                    {selectedArticle.featured && (
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 hover:bg-accent rounded-lg transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedArticle.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                    {selectedArticle.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
