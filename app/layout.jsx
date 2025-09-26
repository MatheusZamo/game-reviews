import Link from "next/link"
import './globals.css'

const  RootLayout = ({ children }) => {
    return (
        <html lang='pt-BR'>
            <body>
                <header>
                  <h2>Análise de Jogos</h2>
                </header>
                <ul>
                    <li><Link href='/'>Inicio</Link></li>
                    <li><Link href='/analise'>Análise</Link></li>
                    <li><Link href='/sobre' prefetch={false}>Sobre</Link></li>
                </ul>
                <main>{children}</main>
                <footer>Informações e imagens dos jogos gentilmente cedidos por <a href="https://rawg.io/" target='_blank'>RAWG</a></footer>
            </body>
        </html>
    )
}

export default RootLayout