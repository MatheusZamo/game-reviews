import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const Arrow = ({ enabled, href, children }) =>
  enabled ? (
    <Link href={href} className="flex items-center">
      {children}
    </Link>
  ) : (
    <span className="flex items-center opacity-40 hover:cursor-not-allowed">
      {children}
    </span>
  )

const Pagination = ({ currentPage, pageCount }) => {
  const arrowStyle = { color: "#e2e8f0", size: 18 }
  const getHref = ({ page }) => `/analises?page=${page}`
  return (
    <div className="flex gap-2 py-2">
      <Arrow
        enabled={currentPage > 1}
        href={getHref({ page: currentPage - 1 })}
      >
        <ArrowLeft {...arrowStyle} />
      </Arrow>
      <span>
        Página {currentPage} de {pageCount}
      </span>
      <Arrow
        enabled={currentPage < pageCount}
        href={getHref({ page: currentPage + 1 })}
      >
        <ArrowRight {...arrowStyle} />
      </Arrow>
    </div>
  )
}

export default Pagination
