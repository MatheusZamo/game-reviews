import './globals.css'
import NavBar from '@/components/nav-bar'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-montserrat'
})

const metadata = {
  title: {
    template: '%s | Análises de Jogos',
    default: 'Análises de Jogos'
  }
}

const RootLayout = ({ children }) => {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="bg-slate-800 text-slate-200 flex flex-col px-6 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">
          {children}
        </main>
        <footer className="border-t border-t-slate-600 py-3 text-center text-xs">
          Informações e imagens dos jogos gentilmente cedidos por{' '}
          <a href="https://rawg.io/" target="_blank" className="hover:text-sky-500">RAWG</a>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout
export { metadata }