import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-40 md:opacity-50"
          style={{
            backgroundImage: 'radial-gradient(#e7e5e4 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-[5%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary/40 md:bg-primary/50 blur-[50px] md:blur-[70px] animate-blob" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full bg-primary/35 md:bg-primary/45 blur-[50px] md:blur-[70px] animate-blob animation-delay-2000 hidden md:block" />
        <div className="absolute top-[30%] left-[50%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full bg-primary/30 md:bg-primary/40 blur-[40px] md:blur-[60px] animate-blob animation-delay-4000 hidden md:block" />
        <div className="absolute bottom-[25%] left-[20%] w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-primary/25 md:bg-primary/35 blur-[40px] md:blur-[50px] animate-blob hidden md:block" />
        <div className="absolute top-[50%] right-[20%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full bg-primary/25 md:bg-primary/30 blur-[40px] md:blur-[50px] animate-blob animation-delay-2000 hidden md:block" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-foreground shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <span className="relative rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="tracking-tight">Now in public beta</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]"
          >
            Build intelligent apps
            <span className="block text-primary mt-3">without the complexity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-7 text-base sm:text-lg text-muted-foreground leading-[1.6] max-w-2xl"
          >
            Devour gives you the building blocks for agent-powered, route-driven applications.
            Type-safe, modular, and production-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href="/get-started"
              className="group inline-flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get started
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="/docs"
              className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-background px-6 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
            >
              View documentation
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Type-safe</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Open source</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
