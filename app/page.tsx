'use client'

import { LoginButton } from '@/components/LoginButton'
import { LogoutButton } from '@/components/LogoutButton'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <main className="p-20">
      <div>
        <p>hogehoge</p>

        {session ? (
          <>
            <p>ログインしています</p>
            <LogoutButton>ログアウト</LogoutButton>
          </>
        ) : (
          <>
            <p>ログインしていません</p>
            <LoginButton>ログイン</LoginButton>
          </>
        )}
      </div>
    </main>
  )
}
