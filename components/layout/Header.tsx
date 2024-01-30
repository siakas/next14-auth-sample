import { HeaderNavigation } from '@/components/layout/HeaderNavigation'
import { HeaderSignin } from '@/components/layout/HeaderSignin'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex h-20 w-full bg-transparent">
      <div className="container flex items-center justify-between p-4">
        <Link href="/" className="text-lg font-bold">
          ロゴ
        </Link>

        <HeaderNavigation />

        <HeaderSignin />
      </div>
    </header>
  )
}
