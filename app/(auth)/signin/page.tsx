import { OAuthButtons } from '@/components/auth/OAuthButtons'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'

const SigninPage = () => {
  return (
    <div className="flex h-auto min-h-screen w-full items-center justify-center">
      <Card className="max-sm:flex max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:rounded-none max-sm:border-none sm:min-w-[370px] sm:max-w-[368px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">サインイン</CardTitle>
          </div>
          <CardDescription>サインイン方法をお選びください。</CardDescription>
        </CardHeader>

        <CardContent>
          <OAuthButtons />
        </CardContent>

        <CardFooter className="grid w-full gap-1 text-sm text-muted-foreground max-sm:max-w-[340px] max-sm:px-10">
          <div>
            <span>
              アカウントをお持ちでない方は
              <Link
                href="#"
                className="font-bold text-primary underline-offset-4 transition-colors hover:underline"
              >
                こちら
              </Link>
            </span>
          </div>
          <div>
            <span>
              パスワードをお忘れの方は
              <Link
                href="#"
                className="font-bold text-primary underline-offset-4 transition-colors hover:underline"
              >
                こちら
              </Link>
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SigninPage
