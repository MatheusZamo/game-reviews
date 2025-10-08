import { readdir, readFile} from 'node:fs/promises'
import matter from 'gray-matter'
import Link from "next/link"
import Heading1 from "@/components/heading1"
import Image from "next/image"

const Reviews = async () => {
  const files = await readdir(`${process.cwd()}/content/reviews/`)
  const reviewPromises = files.map(async file => {
    const slug = file.replace('.md','')
    const review = await readFile(`${process.cwd()}/content/reviews/${slug}.md`, { encoding: 'utf-8'})
    const { data: { title, img, date } } = matter(review)
    return { title, img, date, path: `/analises/${slug}`}
  })

  const reviews = await Promise.all(reviewPromises)

  const orderedReviews = reviews.sort((a,b) => new Date(b.date) - new Date(a.date))

    return(
        <>
          <Heading1>Análises</Heading1>
          <ul className='flex gap-5 mt-3'>
            {orderedReviews.map((review) => (
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