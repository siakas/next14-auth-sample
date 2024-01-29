'use client'

import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'

export const OAuthButtons = () => {
  const { toast } = useToast()

  const handleOAuthSignIn = async (provider: 'google' | 'github') => {
    try {
      await signIn(provider, {
        callbackUrl: '/',
      })

      toast({
        title: '接続成功',
        description: '認証画面に移動します',
      })
    } catch (error) {
      toast({
        title: 'ログインに失敗しました',
        description: '再度お試しください',
        variant: 'destructive',
      })

      console.error(error)
      throw new Error(`${provider}によるログインでエラー`)
    }
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
      <Button
        aria-label="Googleアカウントでサインイン"
        variant="outline"
        className="w-full sm:w-auto"
        onClick={() => handleOAuthSignIn('google')}
      >
        <Icons.google className="mr-2 size-4" />
        Google
      </Button>

      <Button
        aria-label="GitHubアカウントでサインイン"
        variant="outline"
        className="w-full sm:w-auto"
        onClick={() => handleOAuthSignIn('github')}
      >
        <Icons.gitHub className="mr-2 size-4" />
        GitHub
      </Button>
    </div>
  )
}
