import { stringify } from "qs"

const cmsBaseUrl = 'http://localhost:1337'

const query = "?" + stringify({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize: 6 },
    sort: ['publishedAt:desc']
}, { encodeValuesOnly: true })

const getReviews = async () => fetch(`${cmsBaseUrl}/api/reviews${query}`)
    .then(res => res.json())
    .then(reviews => reviews.data.map(({ attributes }) => ({
            title: attributes.title,
            img: `${cmsBaseUrl}${attributes.image.data.attributes.url}`,
            date: attributes.publishedAt.split('T')[0],
            path: attributes.slug,
        })))
    .catch(console.log)



export { getReviews }
