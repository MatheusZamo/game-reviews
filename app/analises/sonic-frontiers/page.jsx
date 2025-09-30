import { readFile } from 'node:fs/promises'
import { parse } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Heading1 from "@/components/heading1"
import Image from "next/image"

const Sonic = async () => {
  const review = await readFile(
  `${process.cwd()}/content/reviews/sonic-frontiers.md`, 
    { encoding: 'utf-8'})
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
          <article dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parse(review)) }} />
        </>
    )
}

export default Sonic