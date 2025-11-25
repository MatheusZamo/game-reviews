import Link from "next/link"
import Image from "next/image"
import { getReviews } from "./lib/get-reviews"

const metadata = {
  description:
    "Análises de jogos é onde você encontra análises de jogos para Xbox, Playstation, Nintendo e PC.",
}

const dynamic = "force-dynamic"

const Home = async () => {
  const { reviews } = await getReviews({ quantity: 4 })

  return (
    <div className="flex flex-wrap gap-3">
      {reviews.map(review => (
        <div
          key={review.title}
          className="rounded-lg border-2 border-slate-700 w-[640px] hover:shadow-lg"
        >
          <Link href={review.path} className="flex">
            <Image
              src={review.img}
              width="320"
              height="180"
              alt=""
              priority
              className="rounded-l-lg"
            />
            <div className="p-3">
              <h2 className="text-xl font-montserrat">{review.title}</h2>
              <p>{review.subtitle}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home
export { metadata, dynamic }
