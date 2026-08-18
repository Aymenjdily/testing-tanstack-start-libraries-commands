import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for side projects and experimentation.',
    features: ['Up to 3 projects', 'Community support', 'Basic analytics', '1GB storage'],
    cta: 'Get started',
    href: '/pricing/starter',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams that need more power and flexibility.',
    features: ['Unlimited projects', 'Priority support', 'Advanced analytics', '50GB storage', 'Custom domains', 'Team collaboration'],
    cta: 'Start free trial',
    href: '/pricing/pro',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations that need security, compliance, and scale.',
    features: ['Unlimited everything', 'Dedicated support', 'SSO & SAML', 'SLA guarantee', 'Custom integrations', 'Audit logs'],
    cta: 'Contact sales',
    href: '/pricing/enterprise',
    featured: false,
  },
]

const PricingSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/8 blur-[80px]" />
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
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Simple, transparent pricing that grows with you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 ${
                plan.featured
                  ? 'bg-card border-primary/20 shadow-xl shadow-primary/5'
                  : 'bg-card border-border hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={plan.href}
                className={`inline-flex h-10 items-center justify-center rounded-xl text-sm font-medium transition-all w-full ${
                  plan.featured
                    ? 'bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25'
                    : 'border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
