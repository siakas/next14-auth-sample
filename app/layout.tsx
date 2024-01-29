import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import NextAuthProvider from '@/provider/NextAuth'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="dark">
      <body
        className={cn(
          'w-full overflow-hidden bg-background bg-gradient-to-r from-background to-pink-400/10 font-sans antialiased',
          inter.className,
        )}
      >
        <NextAuthProvider>
          {children}
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  )
}
