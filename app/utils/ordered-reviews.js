import { readdir, readFile} from 'node:fs/promises'
import matter from 'gray-matter'

export const orderedReviews = async () => {
    const files = await readdir(`${process.cwd()}/content/reviews/`)
      const reviewPromises = files.map(async file => {
        const slug = file.replace('.md','')
        const review = await readFile(`${process.cwd()}/content/reviews/${slug}.md`, { encoding: 'utf-8'})
        const { data: { title, img, date } } = matter(review)
        return { title, img, date, path: `/analises/${slug}`}
      })
    
      const reviews = await Promise.all(reviewPromises)
    
      return reviews.sort((a,b) => new Date(b.date) - new Date(a.date))
}