import { readFile } from 'node:fs/promises'
import { parse } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import matter from 'gray-matter'
import Heading1 from "@/components/heading1"
import Image from "next/image"

const Sonic = async () => {
  const review = await readFile(
  `${process.cwd()}/content/reviews/sonic-frontiers.md`, 
    { encoding: 'utf-8'})

  const { content, data } = matter(review)
  const [ year, month, day ] = data.date.split('-')
    return(
        <>
          <Heading1>{data.title}</Heading1>
          <time datetime={data.date}>{`${day}/${month}/${year}`}</time>
          <Image 
            src={data.img}
            alt='imagem do sonic-frontiers' 
            width={640} 
            height={360} 
            priority
            className='rounded-lg mt-5 mb-5'
          />
          <article 
            class="prose"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parse(content)) }} 
          />
        </>
    )
}

export default Sonic