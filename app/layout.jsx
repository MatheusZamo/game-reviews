export default function RootLayout({ children }) {
    const abc = ''
    return (
        <html lang='pt-br'>
            <body>
                <header>
                    <h2>Análise de Jogos</h2>
                </header>
                <main>{children}</main>
                <footer>Rodapé</footer>
            </body>
        </html>
    )
}