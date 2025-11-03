
import Link from "next/link"
import Heading1 from "@/components/heading1"
import Image from "next/image"
import { getReviews } from "../lib/get-reviews"

const metadata = {
  title: 'Análises'
}

const dynamic = 'force-dynamic'

const Reviews = async () => {
  const reviews = await getReviews({ quantity: 12 })
    return(
        <>
          <Heading1>Análises</Heading1>
          <ul className='flex flex-wrap gap-5 mt-3'>
            {reviews.map((review, index) => (
              <li key={review.title} className='rounded-lg bg-slate-700 border border-slate-700 hover:shadow-lg w-[300px]'>
                <Link href={review.path}>
                  <Image 
                    src={review.img}
                    alt='super-mario-bros-wonder'
                    width={320}
                    height={180}
                    className='rounded-t-lg'
                    priority={index <= 2}
                    loading={index >= 3 ? 'lazy' : undefined}
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
export { metadata, dynamic }