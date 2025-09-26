import Link from "next/link"

const Reviews = () => {
    return(
        <>
          <h1>Análises</h1>
          <ul>
            <li><Link href='/analise/super-mario-bros-wonder'>Super Mario Bros. Wonder</Link></li>
            <li><Link href='/analise/sonic-frontiers'>Sonic Frontiers</Link></li>
          </ul>
        </>
    )
}

export default Reviews