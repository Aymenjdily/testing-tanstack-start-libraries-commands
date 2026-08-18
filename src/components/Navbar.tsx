import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeaderUser from '#/integrations/clerk/header-user'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    isDark
      ? ['rgba(12,10,9,0)', 'rgba(12,10,9,0.95)']
      : ['rgba(250,250,249,0)', 'rgba(250,250,249,0.95)']
  )
  const navShadow = useTransform(scrollY, [0, 100], ['0 0px 0px rgba(0,0,0,0)', '0 4px 20px rgba(0,0,0,0.08)'])

  const links = [
    { href: '/blog', label: 'Blog' },
    { href: '/pricing', label: 'Pricing' },
  ]

  return (
    <motion.header
      style={{ backgroundColor: navBackground, boxShadow: navShadow }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-xl pointer-events-auto"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <motion.span
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </motion.span>
              <span className="text-lg font-bold tracking-tight">Skilled Library</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  whileHover={{ y: -1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {link.label}
                  <span className="absolute inset-x-1 -bottom-0.5 h-px bg-primary scale-x-0 transition-transform origin-left hover:scale-x-100" />
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <HeaderUser />
          </div>

          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground md:hidden pointer-events-auto"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden overflow-hidden pointer-events-auto"
        >
          <div className="mx-auto w-full max-w-7xl px-4 pb-4 pt-2">
            <nav className="flex flex-col gap-1">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-2 border-t border-border/40 pt-4">
              <HeaderUser />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar
