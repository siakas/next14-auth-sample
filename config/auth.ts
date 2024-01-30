import NextAuth, { type NextAuthConfig } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    // OAuth のための設定
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],

  // JWT を暗号化するための値を設定
  secret: process.env.NEXTAUTH_SECRET,

  // セッショントークンに JWT を指定
  session: {
    strategy: 'jwt',
  },

  // ミドルウェアからリダイレクトされる際に表示するログインページを
  // NextAuth が自動的に作成したものではなく、こちらで作成したページで表示する
  // カスタムログインページを指定すると、保護したページからのサインイン後のリダイレクトがうまく動かないのでいったん解除
  // pages: {
  //   signIn: '/signin',
  // },

  // `/dashboard` はログイン後のみアクセス許可
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === '/dashboard') return !!auth
      return true
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
