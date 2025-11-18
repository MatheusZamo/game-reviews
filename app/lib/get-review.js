import { stringify } from "qs"

const cmsBaseUrl = "http://localhost:1337"

const getReview = async slug => {
  const query =
    "?" +
    stringify(
      {
        filters: { slug: { $eq: slug } },
        fields: ["slug", "title", "subtitle", "publishedAt", "body"],
        populate: { image: { fields: ["url"] } },
        pagination: { pageSize: 1, withCount: false },
      },
      { encodeValuesOnly: true }
    )

  return fetch(`${cmsBaseUrl}/api/reviews${query}`, {
    next: { tags: ["reviews"] },
  })
    .then(res => res.json())
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
