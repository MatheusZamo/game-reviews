import { readFile, readdir } from 'node:fs/promises'
import { parse } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import matter from 'gray-matter'
import Heading1 from "@/components/heading1"
import Image from "next/image"

export const generateStaticParams = async () => {
   const files = await readdir(`${process.cwd()}/content/reviews`)
   return files.map(file => ({ slug: file.replace('.md', '')}))
}

const GameReview = async ({ params }) => {
  const review = await readFile(
  `${process.cwd()}/content/reviews/${params.slug}.md`, 
    { encoding: 'utf-8'})

  const { content, data } = matter(review)
  const [ year, month, day ] = data.date.split('-')
    return(
        <>
          <Heading1>{data.title}</Heading1>
          <time dateTime={data.date}>{`${day}/${month}/${year}`}</time>
          <Image 
            src={data.img}
            alt='imagem do sonic-frontiers' 
            width={640} 
            height={360} 
            priority
            className='rounded-lg mt-5 mb-5'
          />
          <article 
            className="prose"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parse(content)) }} 
          />
        </>
    )
}

export default GameReview