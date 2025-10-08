import Link from "next/link"
import Image from "next/image"
import { orderedReviews } from "./utils/ordered-reviews"

const Home = async () => {
const reviews = await orderedReviews()
  
  return (
    <>
      <div className="rounded-lg border-2 border-slate-700 w-1/2 hover:shadow-lg">
        <Link href={reviews[0].path} className="flex">
          <Image
            src={reviews[0].img}
            width="320"
            height="180"
            alt=""
            priority
            className="rounded-l-lg"
          />
          <div className="p-3">
            <h2 className="text-xl font-montserrat">{reviews[0].title}</h2>
            <p>Breve parágrafo aqui</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home