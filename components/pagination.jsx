import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const Pagination = ({ currentPage, pageCount }) => {
  const previousPageHref = `/analises?page=${currentPage - 1 === 0 ? 1 : currentPage - 1}`
  const nextPageHref = `/analises?page=${currentPage + 1}`
  return (
    <div className="flex gap-2 py-2">
      <Link href={previousPageHref} className="flex items-center">
        <ArrowLeft color="#e2e8f0" size={18} />
      </Link>
      <span>
        Página {currentPage} de {pageCount}
      </span>
      <Link href={nextPageHref} className="flex items-center">
        <ArrowRight color="#e2e8f0" size={18} />
      </Link>
    </div>
  )
}

export default Pagination
