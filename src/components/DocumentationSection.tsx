import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Code2, Zap, Shield } from 'lucide-react'

const docs = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Learn the basics of Devour and set up your first project in minutes.',
    href: '/docs/getting-started',
  },
  {
    icon: Code2,
    title: 'API Reference',
    description: 'Complete reference documentation for all Devour libraries and utilities.',
    href: '/docs/api',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimize your application with our performance best practices.',
    href: '/docs/performance',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Understand how Devour keeps your applications secure by default.',
    href: '/docs/security',
  },
]

const DocumentationSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/8 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground"
          >
            Documentation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to build, deploy, and scale with Devour.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {docs.map((doc, index) => (
            <motion.a
              key={doc.title}
              href={doc.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/5 text-primary ring-1 ring-primary/10 group-hover:bg-primary/10 transition-colors">
                  <doc.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{doc.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {doc.description}
              </p>
              <div className="mt-4 flex items-center text-xs font-medium text-primary">
                Read more
                <svg className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DocumentationSection
