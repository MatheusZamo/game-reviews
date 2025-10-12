import { readFile} from 'node:fs/promises'
import matter from 'gray-matter'

const getReview = async slug => {
  const review = await readFile(`${process.cwd()}/content/reviews/${slug}.md`, { encoding: 'utf-8'})
  const { content, data: { title, img, date } } = matter(review)
  return { content, title, img, date }

}

export { getReview }