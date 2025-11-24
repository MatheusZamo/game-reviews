import { fetchReviews } from "./fetch-reviews"
import { getReviewObject } from "./get-review-object"

const getReview = async slug => {
  const queryParameters = {
    filters: { slug: { $eq: slug } },
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 1, withCount: false },
  }

  return fetchReviews(queryParameters)
    .then(({ data }) => {
      if (data.length === 0) {
        return null
      }

      const review = data[0]
      return { ...getReviewObject(review), content: review.attributes.body }
    })
    .catch(console.log)
}

export { getReview }
