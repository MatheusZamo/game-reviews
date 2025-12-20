import "server-only"

const getReviewObject = review => ({
  title: review.attributes.title,
  date: review.attributes.publishedAt.split("T")[0],
  img: `${process.env.CMS_BASE_URL}${review.attributes.image.data.attributes.url}`,
  subtitle: review.attributes.subtitle,
})

export { getReviewObject }
