import { Header } from '@/components/layout/Header'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      {children}
      <footer></footer>
    </div>
  )
}

export default LandingLayout
