import { parse } from 'marked'
import DOMPurify from 'isomorphic-dompurify'
import Heading1 from "@/components/heading1"
import Image from "next/image"
import { getReview } from '@/app/lib/get-review'
import ShareReviewButton from '@/components/share-review-button'
import { notFound } from 'next/navigation'

const dynamic = 'force-dynamic'


const generateMetadata = async ({ params }) => {
  const review = await getReview(params.slug)
  if (!review) notFound()

  return { title: review.title }
}

const GameReview = async ({ params }) => {
  const review = await getReview(params.slug)
  if (!review) notFound()

  const { content, date, title, img, subtitle } = review
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
export { generateMetadata, dynamic }