import { fetchReviews } from "./fetch-reviews"

const getSearchedReviews = async query => {
  const queryParameters = {
    filters: { title: { $containsi: query } },
    fields: ["slug", "title"],
    sort: ["title"],
    pagination: { pageSize: 5 },
  }

  return fetchReviews(queryParameters)
    .then(({ data }) =>
      data.map(({ attributes }) => ({
        path: `/analises/${attributes.slug}`,
        title: attributes.title,
      }))
    )
    .catch(console.log)
}

export { getSearchedReviews }
