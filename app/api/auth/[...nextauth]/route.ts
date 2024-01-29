import NextAuth, { type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
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
}

// NextAuth.js を初期化
// NextAuth 関数に初期化オプションを渡すことで認証機能を提供するハンドラ関数を返す
const handler = NextAuth(authOptions)

// NextAuth の認証機能を処理するためのエンドポイントとして利用する関数をエクスポート
export { handler as GET, handler as POST }
