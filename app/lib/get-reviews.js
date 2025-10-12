const { getReview } = require("./get-review")
const { getReviewSlugs } = require("./get-review-slug")

const getReviews = async () => {
    const slugs = await getReviewSlugs()
    const reviewPromises = slugs.map(async slug => {
        const { title, img, date } = await getReview(slug)
        return { title, img, date, path: `/analises/${slug}`}
    })

    return Promise.all(reviewPromises)
}

export { getReviews }