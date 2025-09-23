export default function RootLayout({ children }) {
    console.log(children)
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