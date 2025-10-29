import { stringify } from "qs"
import { writeFileSync } from "node:fs"

const query = "?" + stringify({
    filters: { slug: { $eq: 'hades-2018'} },
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize: 1, withCount: false },
}, { encodeValuesOnly: true })

fetch(`http://localhost:1337/api/reviews${query}`)
    .then(res => res.json())
    .then(reviews => {
        const formattedReviews = JSON.stringify(reviews, null, 2)
        const file = `${process.cwd()}/scripts/cms-response.json`
        writeFileSync(file, formattedReviews, 'utf8')
    })
    .catch(console.log)