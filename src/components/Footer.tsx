import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Libraries', href: '/libraries' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Changelog', href: '/changelog' },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/docs/api' },
    { label: 'Examples', href: '/examples' },
    { label: 'Community', href: '/community' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy' },
  ],
}

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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
              </span>
              <span className="text-lg font-bold tracking-tight">Skilled Library</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
              Build intelligent apps with our suite of production-ready libraries.
              Type-safe, modular, and open source.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="relative inline-block px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <span className="absolute inset-x-1 -bottom-0.5 h-px bg-primary scale-x-0 transition-transform origin-left hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Skilled Library. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
