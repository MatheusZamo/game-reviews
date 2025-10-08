
import Link from "next/link"
import Heading1 from "@/components/heading1"
import Image from "next/image"
import { orderedReviews } from "../utils/ordered-reviews"

const Reviews = async () => {
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