import "server-only"

const { stringify } = require("qs")
const { cmsBaseUrl } = require("./cms-base-url")

const fetchReviews = async queryParameters => {
  const query = "?" + stringify(queryParameters, { encodeValuesOnly: true })
  return fetch(`${cmsBaseUrl}/api/reviews${query}`, {
    next: { tags: ["reviews"] },
  })
    .then(res => res.json())
    .catch(console.log)
}

export { fetchReviews }
