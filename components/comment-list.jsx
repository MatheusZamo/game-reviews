import { prisma } from "@/app/lib/prisma"
import { UserRound } from "lucide-react"

const CommentList = async ({ slug }) => {
  const comments = await prisma.comment.findMany({
    where: { slug },
    orderBy: { createdAt: "desc" },
  })

  return comments.length > 0 ? (
    <ul className="mt-3">
      {comments.map(comment => (
        <li
          key={comment.id}
          className="border-b border-slate-500 px-3 py-2 last:border-none odd:bg-slate-700"
        >
          <div className="flex gap-3 pb-1 text-slate-400">
            <UserRound /> {comment.user}
          </div>
          <p className="italic">{comment.message}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className="italic mt-3">Seja o primeiro(a) a deixar um comentário!</p>
  )
}

export default CommentList
