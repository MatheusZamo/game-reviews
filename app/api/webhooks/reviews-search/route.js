import { getSearchedReviews } from "@/app/lib/get-searched-reviews"
import { NextResponse } from "next/server"

const GET = async request => {
  const query = request.nextUrl.searchParams.get("query")
  const searchedReviews = await getSearchedReviews(query)
  return NextResponse.json(searchedReviews)
}

export { GET }
