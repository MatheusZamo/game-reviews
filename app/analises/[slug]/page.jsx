import { parse } from "marked"
import DOMPurify from "isomorphic-dompurify"
import Heading1 from "@/components/heading1"
import Image from "next/image"
import { getReview } from "@/app/lib/get-review"
import ShareReviewButton from "@/components/share-review-button"
import { notFound } from "next/navigation"
import { MessageSquareText } from "lucide-react"
import CommentForm from "@/components/comment-form"
import CommentList from "@/components/comment-list"
import { Suspense } from "react"

const dynamic = "force-dynamic"

const generateMetadata = async ({ params }) => {
  const review = await getReview(params.slug)
  if (!review) notFound()

  return { title: review.title }
}

const GameReview = async ({ params }) => {
  const review = await getReview(params.slug)
  if (!review) notFound()

  const { content, date, title, img, subtitle } = review
  const [year, month, day] = date.split("-")
  return (
    <>
      <Heading1>{title}</Heading1>
      <p className="mb-3">{subtitle}</p>
      <div className="flex gap-4 items-baseline">
        <time dateTime={date}>{`${day}/${month}/${year}`}</time>
        <ShareReviewButton />
      </div>
      <Image
        src={img}
        alt="imagem do sonic-frontiers"
        width={640}
        height={360}
        priority
        className="rounded-lg mt-5 mb-5"
      />
      <article
        className="prose text-slate-200 prose-strong:text-slate-200 prose-h3:text-slate-200"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parse(content)) }}
      />
      <section className="border-solid border-slate-500 border-t max-w-screen-sm mt-6 py-3">
        <h2 className="font-bold flex gap-2 items-center text-xl">
          <MessageSquareText /> Comentários
        </h2>
        <CommentForm slug={params.slug} title={title} />
        <Suspense fallback={<p>Carregando comentarios...</p>}>
          <CommentList slug={params.slug} />
        </Suspense>
      </section>
    </>
  )
}

export default GameReview
export { generateMetadata, dynamic }
