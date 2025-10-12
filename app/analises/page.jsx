
import Link from "next/link"
import Heading1 from "@/components/heading1"
import Image from "next/image"
import { orderedReviews } from "../lib/get-review"
import { getReviewSlugs } from "../lib/get-review-slug"

const Reviews = async () => {
  const slugs = await getReviewSlugs()
  const reviewPromises = slugs.map(async slug => {
    const { title, img } = await  getReview(slug)
    return { title, img, path: `/analises/${slug}`}
  })

  const reviews = await orderedReviews()

    return(
        <>
          <Heading1>Análises</Heading1>
          <ul className='flex gap-5 mt-3'>
            {reviews.map((review) => (
              <li key={review.title} className='rounded-lg bg-slate-700 border border-slate-700 hover:shadow-lg'>
                <Link href={review.path}>
                  <Image 
                    src={review.img}
                    alt='super-mario-bros-wonder'
                    width={320}
                    height={180}
                    className='rounded-t-lg'
                    priority
                  />
                  <p className='text-center mt-2 text-base font-montserrat'>{review.title}</p>
                </Link>
            </li>
            ))}
          </ul>
        </>
    )
}

export default Reviews