import Link from "next/link"

const About = () => {
    return (
        <>
          <h1>Sobre o Análise de Jogos</h1>
          <p>Descrição do Análise de Jogos aqui</p>
          <button><Link href='/'>Home</Link></button>
          <button><Link href='/analise'>Análise</Link></button>
        </>
    )
}

export default About