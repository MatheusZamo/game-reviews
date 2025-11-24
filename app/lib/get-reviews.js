import { cmsBaseUrl } from "./cms-base-url"
import { fetchReviews } from "./fetch-reviews"

const getReviews = async ({ quantity }) => {
  const queryParameters = {
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: quantity },
    sort: ["publishedAt:desc"],
  }

  return fetchReviews(queryParameters)
    .then(reviews =>
      reviews.data.map(({ attributes }) => ({
        title: attributes.title,
        img: `${cmsBaseUrl}${attributes.image.data.attributes.url}`,
        date: attributes.publishedAt.split("T")[0],
        path: `/analises/${attributes.slug}`,
        subtitle: attributes.subtitle,
      }))
    )
    .catch(console.log)
}

export { getReviews }
