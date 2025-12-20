import "server-only"

const { stringify } = require("qs")

const fetchReviews = async queryParameters => {
  const query = "?" + stringify(queryParameters, { encodeValuesOnly: true })
  return fetch(`${process.env.CMS_BASE_URL}/api/reviews${query}`, {
    next: { tags: ["reviews"] },
  })
    .then(res => res.json())
    .catch(console.log)
}

export { fetchReviews }
