import { Show, UserButton, SignInButton as ClerkSignInButton } from '@clerk/tanstack-react-start'
import { motion } from 'framer-motion'

export default function HeaderUser() {
  return (
    <>
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <ClerkSignInButton mode="modal">
          <motion.button
            className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign in
          </motion.button>
        </ClerkSignInButton>
      </Show>
    </>
  )
}
