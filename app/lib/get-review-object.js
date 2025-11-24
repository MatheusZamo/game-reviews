const { cmsBaseUrl } = require("./cms-base-url")

const getReviewObject = review => ({
  title: review.attributes.title,
  date: review.attributes.publishedAt.split("T")[0],
  img: `${cmsBaseUrl}${review.attributes.image.data.attributes.url}`,
  subtitle: review.attributes.subtitle,
})

export { getReviewObject }
