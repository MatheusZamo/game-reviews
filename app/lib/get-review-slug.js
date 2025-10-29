import { stringify } from "qs"

const cmsBaseUrl = 'http://localhost:1337'

  const query = "?" + stringify({
    fields: ['slug'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  }, { encodeValuesOnly: true })

const getReviewSlugs = async () => fetch(`${cmsBaseUrl}/api/reviews${query}`)
    .then(res => res.json())
    .then(({ data }) => data.map(({ attributes }) => attributes.slug))
    .catch(console.log)
 

export { getReviewSlugs }