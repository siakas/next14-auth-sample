'use client'

import { signOut } from 'next-auth/react'

export const LogoutButton = ({ children }: { children: React.ReactNode }) => {
  return <button onClick={() => signOut()}>{children}</button>
}
