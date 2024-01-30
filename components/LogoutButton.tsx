'use client'

import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { signOut } from 'next-auth/react'

interface Props {
  className?: string
  variant?:
    | 'ghost'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'link'
    | null
    | undefined
}

export const LogoutButton = ({ className, variant = 'ghost' }: Props) => {
  return (
    <Button
      variant={variant}
      className={cn(className)}
      onClick={() => signOut()}
    >
      <Icons.logout className="mr-2 size-4" aria-hidden="true" />
      ログアウト
    </Button>
  )
}
