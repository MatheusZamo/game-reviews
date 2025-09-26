import Link from "next/link"
import Heading1 from "@/components/heading1"

const Reviews = () => {
    return(
        <>
          <Heading1>Análises</Heading1>
          <ul>
            <li><Link href='/analises/super-mario-bros-wonder'>Super Mario Bros. Wonder</Link></li>
            <li><Link href='/analises/sonic-frontiers'>Sonic Frontiers</Link></li>
          </ul>
        </>
    )
}

export default Reviews