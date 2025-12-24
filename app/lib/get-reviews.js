import "server-only"
import { fetchReviews } from "./fetch-reviews"
import { getReviewObject } from "./get-review-object"

const getReviews = async ({ quantity, page }) => {
  const queryParameters = {
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: quantity, page },
    sort: ["publishedAt:desc"],
  }

  return fetchReviews(queryParameters)
    .then(reviews => ({
      pageCount: reviews.meta.pagination.pageCount,
      reviews: reviews.data.map(review => ({
        ...getReviewObject(review),
        path: `/analises/${review.attributes.slug}`,
      })),
    }))
    .catch(console.log)
}

export { getReviews }
