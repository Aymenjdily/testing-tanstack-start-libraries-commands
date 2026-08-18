import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: '1',
    title: 'Building intelligent apps with Devour',
    excerpt: 'Learn how to build agent-powered applications using our suite of libraries.',
    date: '2024-03-15',
    readTime: '5 min read',
    href: '/blog/building-intelligent-apps',
  },
  {
    id: '2',
    title: 'Type-safe routing in modern React',
    excerpt: 'Explore the power of type-safe routing and how it improves developer experience.',
    date: '2024-03-10',
    readTime: '8 min read',
    href: '/blog/type-safe-routing',
  },
  {
    id: '3',
    title: 'State management without the complexity',
    excerpt: 'Discover how Devour simplifies state management with minimal boilerplate.',
    date: '2024-03-05',
    readTime: '6 min read',
    href: '/blog/state-management',
  },
  {
    id: '4',
    title: 'Server functions made simple',
    excerpt: 'A deep dive into server functions and how they streamline full-stack development.',
    date: '2024-02-28',
    readTime: '7 min read',
    href: '/blog/server-functions',
  },
  {
    id: '5',
    title: 'Performance optimization strategies',
    excerpt: 'Best practices for keeping your Devour applications fast and responsive.',
    date: '2024-02-20',
    readTime: '10 min read',
    href: '/blog/performance-optimization',
  },
  {
    id: '6',
    title: 'Migrating from traditional frameworks',
    excerpt: 'Step-by-step guide to migrating your existing app to Devour.',
    date: '2024-02-15',
    readTime: '12 min read',
    href: '/blog/migrating-to-devour',
  },
]

const BlogSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/8 blur-[80px]" />
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
            Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Insights, tutorials, and updates from the Devour team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>

              <div className="mt-4 flex items-center text-sm font-medium text-primary">
                Read article
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
