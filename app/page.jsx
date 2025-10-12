import Link from "next/link"
import Image from "next/image"
import { getReviewSlugs } from "./lib/get-review-slug"
import { getReview } from "./lib/get-review"

const Home = async () => {
  const slugs = await getReviewSlugs()
  const reviewPromises = slugs.map(async slug => {
    const { title, img, date } = await getReview(slug)
    return { title, img, date, path: `/analises/${slug}`}
  })

  const reviews = await Promise.all(reviewPromises)
  const [mostRecentReview] = reviews.toSorted((a,b) => {
    const [aDay, bDay] = [a, b].map(({ date }) => Number(date.split('-')[2]))
    return aDay - bDay
  })
  
  return (
    <>
      <div className="rounded-lg border-2 border-slate-700 w-1/2 hover:shadow-lg">
        <Link href={mostRecentReview.path} className="flex">
          <Image
            src={mostRecentReview.img}
            width="320"
            height="180"
            alt=""
            priority
            className="rounded-l-lg"
          />
          <div className="p-3">
            <h2 className="text-xl font-montserrat">{mostRecentReview.title}</h2>
            <p>Breve parágrafo aqui</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home