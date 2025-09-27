import Heading1 from "@/components/heading1"
import Image from "next/image"

const Mario = () => {
    return(
        <>
          <Heading1>Super Mario Bros. Wonder - Análise</Heading1>
          <Image 
            src='/super-mario-bros-wonder.jpg' 
            alt='imagem do super-mario-bros-wonder' 
            width={640} 
            height={360} 
            priority
            className='rounded-lg mt-5 mb-5'
          />
          <p>Análise de Super Mario Bros. Wonder aqui</p>
        </>
    )
}

export default Mario