'use client'

import { signIn } from 'next-auth/react'

export const LoginButton = () => {
  return (
    <>
      <div>
        <button onClick={() => signIn('google')}>Googleでログイン</button>
      </div>
      <div>
        <button onClick={() => signIn('github')}>GitHubでログイン</button>
      </div>
    </>
  )
}
