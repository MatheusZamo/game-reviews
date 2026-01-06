import "server-only"

const getReviewObject = review => ({
  title: review.attributes.title,
  date: review.attributes.publishedAt.split("T")[0],
  img: new URL(
    review.attributes.image.data.attributes.url,
    process.env.CMS_BASE_URL
  ).href,
  subtitle: review.attributes.subtitle,
})

export { getReviewObject }
