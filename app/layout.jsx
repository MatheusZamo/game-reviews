const  RootLayout = ({ children }) => {
    return (
        <html lang='pt-BR'>
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

export default RootLayout