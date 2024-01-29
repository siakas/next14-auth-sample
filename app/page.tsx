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
            <p>セッションの有効期限：{session.expires}</p>
            <p>ようこそ、{session.user?.name}さん</p>
            <p>{session.user?.email}</p>
            {session.user?.image !== null && (
              <p>
                <img
                  src={session.user?.image}
                  alt=""
                  className="size-12 rounded-full"
                />
              </p>
            )}
            <LogoutButton>ログアウト</LogoutButton>
          </>
        ) : (
          <>
            <p>ログインしていません</p>
            <LoginButton />
          </>
        )}
      </div>
    </main>
  )
}
