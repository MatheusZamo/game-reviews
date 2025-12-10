import { fetchReviews } from "./fetch-reviews"

const queryParameters = {
  fields: ["slug", "title"],
  sort: ["publishedAt:desc"],
  pagination: { pageSize: 100 },
}

const getSearchableReviews = async () =>
  fetchReviews(queryParameters)
    .then(({ data }) =>
      data.map(({ attributes }) => ({
        path: `/analises/${attributes.slug}`,
        title: attributes.title,
      }))
    )
    .catch(console.log)

export { getSearchableReviews }
