import { parse } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Heading1 from "@/components/heading1"
import Image from "next/image"
import { getReviewSlugs } from '@/app/lib/get-review-slug'
import { getReview } from '@/app/lib/get-review'
import ShareReviewButton from '@/components/share-review-button'

export const generateStaticParams = async () => {
   const slugs = await getReviewSlugs()
   return slugs.map(slug => ({ slug }))
}

const generateMetadata = async ({ params }) => {
  const { title } = await getReview(params.slug)
  return { title }
}

const GameReview = async ({ params }) => {
  const { content, date, title, img, subtitle } = await getReview(params.slug)
  const [ year, month, day ] = date.split('-')
    return(
        <>
          <Heading1>{title}</Heading1>
          <p className='mb-3'>{subtitle}</p>
          <div className="flex gap-4 items-baseline">
            <time dateTime={date}>{`${day}/${month}/${year}`}</time>
            <ShareReviewButton />
          </div>
          <Image 
            src={img}
            alt='imagem do sonic-frontiers' 
            width={640} 
            height={360} 
            priority
            className='rounded-lg mt-5 mb-5'
          />
          <article 
            className="prose text-slate-200 prose-strong:text-slate-200 prose-h3:text-slate-200"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parse(content)) }} 
          />
        </>
    )
}

export default GameReview
export { generateMetadata }