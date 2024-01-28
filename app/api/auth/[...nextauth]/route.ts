import NextAuth, { type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  providers: [
    // Github OAuth によるログイン設定
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],

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
