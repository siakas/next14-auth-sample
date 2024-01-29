'use client'

import { LogoutButton } from '@/components/LogoutButton'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()

  return session ? (
    <>
      <div className="flex h-auto min-h-screen w-full items-center justify-center">
        <Card className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">ようこそ</CardTitle>
            </div>
            <CardDescription>{session.user?.name} さん</CardDescription>
          </CardHeader>

          <CardContent>
            {session.user?.image !== null && (
              <div className="flex items-center justify-center">
                <img
                  src={session.user?.image}
                  alt=""
                  className="size-12 rounded-full"
                />
              </div>
            )}
          </CardContent>

          <CardFooter className="grid w-full gap-1 text-sm text-muted-foreground max-sm:max-w-[340px] max-sm:px-10">
            <LogoutButton />
          </CardFooter>
        </Card>
      </div>
    </>
  ) : (
    <>
      <div className="flex h-auto min-h-screen w-full items-center justify-center">
        <Link
          href="/signin"
          className={cn(buttonVariants({ size: 'lg' }), 'font-semibold')}
        >
          サインイン
        </Link>
      </div>
    </>
  )
}
