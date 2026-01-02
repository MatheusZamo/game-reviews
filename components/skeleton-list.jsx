import { UserRound } from "lucide-react"

const SkeletonList = () => (
  <ul className="animate-pulse mt-3">
    {[1, 2, 3].map(item => (
      <li
        class="border-b border-slate-500 px-3 py-4 last:border-none odd:bg-slate-700"
        key={item}
      >
        <div class="flex items-center gap-3 pb-1 text-slate-400">
          <UserRound />
          <div className="bg-slate-500 rounded h-3 w-24" />
        </div>
        <div className="bg-slate-500 rounded h-3 w-2/3" />
      </li>
    ))}
  </ul>
)

export { SkeletonList }
