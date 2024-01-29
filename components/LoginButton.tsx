'use client'

import { signIn } from 'next-auth/react'

export const LoginButton = ({ children }: { children: React.ReactNode }) => {
  return <button onClick={() => signIn()}>{children}</button>
}
