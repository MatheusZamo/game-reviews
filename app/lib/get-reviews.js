import { stringify } from "qs"

const getReviews = async ({ quantity }) => {
  const query = "?" + stringify({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize: quantity },
    sort: ['publishedAt:desc']
}, { encodeValuesOnly: true })

const cmsBaseUrl = 'http://localhost:1337'

    return(
     fetch(`${cmsBaseUrl}/api/reviews${query}`, { next: { tags: ['reviews'] } })
      .then(res => res.json())
      .then(reviews => reviews.data.map(({ attributes }) => ({
        title: attributes.title,
        img: `${cmsBaseUrl}${attributes.image.data.attributes.url}`,
        date: attributes.publishedAt.split('T')[0],
        path: `/analises/${attributes.slug}`,
        subtitle: attributes.subtitle
        })))
    .catch(console.log)
    )
}
   



export { getReviews }
