import Heading1 from "@/components/heading1"
import Image from "next/image"

const Sonic = () => {
    return(
        <>
          <Heading1>Sonic Frontiers - Análise</Heading1>
          <Image 
            src='/sonic-frontiers.jpg' 
            alt='imagem do sonic-frontiers' 
            width={640} 
            height={360} 
            priority
            className='rounded-lg mt-5 mb-5'
          />
          <p>Análise de Sonic Frontiers aqui</p>
        </>
    )
}

export default Sonic