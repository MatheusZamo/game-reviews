import Link from "next/link"
import Heading1 from "@/components/heading1"
import Image from "next/image"
import { getReviews } from "../lib/get-reviews"
import { ArrowLeft, ArrowRight } from "lucide-react"

const metadata = {
  title: "Análises",
}

const dynamic = "force-dynamic"

const Reviews = async ({ searchParams }) => {
  const currentPage = Number(searchParams.page) || 1
  const { reviews, page } = await getReviews({ quantity: 8, page: currentPage })
  const previousPageHref = `/analises?page=${currentPage - 1 === 0 ? 1 : currentPage - 1}`
  const nextPageHref = `/analises?page=${currentPage + 1}`
  return (
    <>
      <Heading1>Análises</Heading1>
      <div className="flex gap-2 py-2">
        <Link href={previousPageHref} className="flex items-center">
          <ArrowLeft color="#e2e8f0" size={18} />
        </Link>
        <span>
          Página {currentPage} de {page}
        </span>
        <Link href={nextPageHref} className="flex items-center">
          <ArrowRight color="#e2e8f0" size={18} />
        </Link>
      </div>
      <ul className="flex flex-wrap gap-5 mt-3">
        {reviews.map((review, index) => (
          <li
            key={review.title}
            className="rounded-lg bg-slate-700 border border-slate-700 hover:shadow-lg w-[300px]"
          >
            <Link href={review.path}>
              <Image
                src={review.img}
                alt="super-mario-bros-wonder"
                width={320}
                height={180}
                className="rounded-t-lg"
                priority={index <= 2}
                loading={index >= 3 ? "lazy" : undefined}
              />
              <p className="text-center mt-2 text-base font-montserrat">
                {review.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Reviews
export { metadata, dynamic }
