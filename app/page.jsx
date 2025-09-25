import Link from "next/link"

const Home = () => {
    return (
    <>
      <h1>Bem vindo(a) ao Análises de Jogos!</h1>
      <p>Paragráfo da página inicial</p>
      <button><Link href='/sobre'>Sobre</Link></button>
      <button><Link href='/analise'>Análise</Link></button>
    </>
    )
}

export default Home