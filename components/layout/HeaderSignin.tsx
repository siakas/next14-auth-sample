'use client'

import { LogoutButton } from '@/components/LogoutButton'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export const HeaderSignin = () => {
  const { data: session } = useSession()

  return (
    <nav className="ml-2">
      {session?.user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger>
              {session.user.image !== null && (
                <Avatar className="size-10">
                  <AvatarImage src={session.user.image} alt="" />
                </Avatar>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {session.user.name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {session.user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogoutButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Link
            href="/signin"
            className={cn(buttonVariants({ size: 'sm' }), 'font-semibold')}
          >
            サインイン
          </Link>
        </>
      )}
    </nav>
  )
}
