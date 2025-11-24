import { cmsBaseUrl } from "./cms-base-url"
import { fetchReviews } from "./fetch-reviews"

const getReview = async slug => {
  const queryParameters = {
    filters: { slug: { $eq: slug } },
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 1, withCount: false },
  }

  return fetchReviews(queryParameters)
    .then(review => {
      if (review.data.length === 0) {
        return null
      }
      const { attributes } = review.data[0]
      return {
        title: attributes.title,
        img: `${cmsBaseUrl}${attributes.image.data.attributes.url}`,
        date: attributes.publishedAt.split("T")[0],
        content: attributes.body,
        subtitle: attributes.subtitle,
      }
    })
    .catch(console.log)
}

export { getReview }
