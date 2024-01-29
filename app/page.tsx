'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <></>

    // <div className="flex flex-col overflow-hidden">
    //   <header></header>
    //   <main className="flex-1">
    //     <div className="grid h-screen place-items-center gap-16 md:gap-32">
    //       <div className="z-10 flex flex-col justify-center gap-4 sm:flex-row">
    //         <Link
    //           href="/signin"
    //           className={cn(
    //             buttonVariants({ size: 'lg' }),
    //             'transition-all duration-200 ease-out md:hover:-translate-y-1 font-semibold',
    //           )}
    //         >
    //           ログイン
    //         </Link>
    //       </div>
    //     </div>
    //   </main>
    //   <footer></footer>
    // </div>

    // <main className="p-20">
    //   <div>
    //     <p>hogehoge</p>

    //     {session ? (
    //       <>
    //         <p>ログインしています</p>
    //         <p>セッションの有効期限：{session.expires}</p>
    //         <p>ようこそ、{session.user?.name}さん</p>
    //         <p>{session.user?.email}</p>
    //         {session.user?.image !== null && (
    //           <p>
    //             <img
    //               src={session.user?.image}
    //               alt=""
    //               className="size-12 rounded-full"
    //             />
    //           </p>
    //         )}
    //         <LogoutButton>ログアウト</LogoutButton>
    //       </>
    //     ) : (
    //       <>
    //         <p>ログインしていません</p>
    //         <LoginButton />
    //       </>
    //     )}
    //   </div>
    // </main>
  )
}
