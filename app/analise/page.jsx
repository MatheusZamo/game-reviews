import Link from "next/link"

const Reviews = () => {
    return(
        <>
          <h1>Análises</h1>
          <p>Análises aqui</p>
          <button><Link href='/'>Home</Link></button>
          <button><Link href='/sobre'>Sobre</Link></button>
        </>
    )
}

export default Reviews