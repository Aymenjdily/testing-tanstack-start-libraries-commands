import { ClerkProvider } from '@clerk/tanstack-react-start'

export default function AppClerkProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
    >
      {children}
    </ClerkProvider>
  )
}
