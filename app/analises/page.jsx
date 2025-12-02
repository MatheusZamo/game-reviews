import Link from "next/link"
import Heading1 from "@/components/heading1"
import Image from "next/image"
import { getReviews } from "../lib/get-reviews"
import Pagination from "@/components/pagination"
import SearchBox from "@/components/search-box"

const metadata = {
  title: "Análises",
}

const dynamic = "force-dynamic"

const Reviews = async ({ searchParams }) => {
  const currentPage = Number(searchParams.page) || 1
  const { reviews, pageCount } = await getReviews({
    quantity: 8,
    page: currentPage,
  })

  return (
    <>
      <Heading1>Análises</Heading1>
      <div className="flex gap-5">
        <Pagination currentPage={currentPage} pageCount={pageCount} />
        <SearchBox />
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
