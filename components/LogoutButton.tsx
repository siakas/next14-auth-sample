'use client'

import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

export const LogoutButton = () => {
  return (
    <Button
      onClick={() =>
        signOut({
          callbackUrl: '/signin',
        })
      }
    >
      <Icons.logout className="mr-2 size-4" aria-hidden="true" />
      ログアウト
    </Button>
  )
}
