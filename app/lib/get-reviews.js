const { getReview } = require("./get-review")
const { getReviewSlugs } = require("./get-review-slug")

const getReviews = async () => {
    const slugs = await getReviewSlugs()
    const reviewPromises = slugs.map(async slug => {
        const { title, img, date } = await getReview(slug)
        return { title, img, date, path: `/analises/${slug}`}
    })

    const reviews = await Promise.all(reviewPromises)
    return reviews.toSorted((a,b) => {
    const [aDay, bDay] = [a, b].map(({ date }) => Number(date.split('-')[2]))
    return aDay - bDay
  })
}

export { getReviews }