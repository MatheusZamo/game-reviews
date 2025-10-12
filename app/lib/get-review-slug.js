import { readdir } from 'node:fs/promises'

const getReviewSlugs = async () => {
    const files = await readdir(`${process.cwd()}/content/reviews/`)
    return files.map(file => file.replace('.md', ''))
}

export { getReviewSlugs }