import { UserRound } from "lucide-react"

const SkeletonList = () => (
  <>
    <div class=" rounded-md border border-blue-300 p-4 mt-3">
      <div class="flex animate-pulse space-x-4">
        <UserRound />
        <div class="flex-1 space-y-6 py-1">
          <div className="bg-slate-500 rounded h-3 w-24" />
          <div className="bg-slate-500 rounded h-3 w-2/3" />
        </div>
      </div>
    </div>
    <div class=" rounded-md border border-blue-300 p-4 mt-3">
      <div class="flex animate-pulse space-x-4">
        <UserRound />
        <div class="flex-1 space-y-6 py-1">
          <div className="bg-slate-500 rounded h-3 w-24" />
          <div className="bg-slate-500 rounded h-3 w-2/3" />
        </div>
      </div>
    </div>
    <div class=" rounded-md border border-blue-300 p-4 mt-3">
      <div class="flex animate-pulse space-x-4">
        <UserRound />
        <div class="flex-1 space-y-6 py-1">
          <div className="bg-slate-500 rounded h-3 w-24" />
          <div className="bg-slate-500 rounded h-3 w-2/3" />
        </div>
      </div>
    </div>
  </>
)

export { SkeletonList }
