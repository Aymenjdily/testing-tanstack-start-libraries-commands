import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ChevronLeft, ChevronRight, Terminal, Sparkles } from 'lucide-react'
import type { SkillRecord } from '#/data/libraries'
import { libraries } from '#/data/libraries'

const ITEMS_PER_PAGE = 6

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: { opacity: 0, y: -20, scale: 0.96, transition: { duration: 0.3 } },
}

const LibrariesSection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const totalPages = Math.ceil(libraries.length / ITEMS_PER_PAGE)
  const paginatedLibraries = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return libraries.slice(start, start + ITEMS_PER_PAGE)
  }, [currentPage])

  const copyToClipboard = (id: string, command: string) => {
    navigator.clipboard.writeText(command)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Libraries</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground"
          >
            Explore our libraries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Production-ready primitives for building modern web applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {paginatedLibraries.map((lib, index) => (
              <motion.div
                key={lib.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10">
                      <Terminal className="h-5 w-5" />
                      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground leading-tight">{lib.title}</h3>
                      <span className="text-xs text-muted-foreground font-medium mt-0.5 block">{lib.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {lib.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {lib.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-lg border border-border bg-muted/30 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-auto">
                  <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/30 px-3 py-2.5 group-hover:border-primary/10 transition-colors">
                    <code className="flex-1 text-xs text-muted-foreground truncate font-mono">
                      {lib.installCommand}
                    </code>
                    <button
                      onClick={() => copyToClipboard(lib.id, lib.installCommand)}
                      className="flex items-center justify-center w-7 h-7 rounded-lg hover:bg-accent transition-colors relative"
                    >
                      {copiedId === lib.id ? (
                        <Check className="h-3.5 w-3.5 text-primary" />
                      ) : (
                        <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 flex items-center justify-center gap-2"
          >
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-border bg-background text-foreground transition-all hover:bg-accent hover:text-accent-foreground disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`inline-flex items-center justify-center h-10 w-10 rounded-xl text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-border bg-background text-foreground transition-all hover:bg-accent hover:text-accent-foreground disabled:opacity-40 disabled:pointer-events-none"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default LibrariesSection
