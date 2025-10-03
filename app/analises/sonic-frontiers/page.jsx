import { readFile } from 'node:fs/promises'
import { parse } from 'marked'
import DOMPurify from 'isomorphic-dompurify'

const Sonic = async () => {
  const review = await readFile(
  `${process.cwd()}/content/reviews/sonic-frontiers.md`, 
    { encoding: 'utf-8'})
    return(
          <article 
            class="prose text-slate-200 prose-strong:text-slate-200"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(parse(review)) }} 
          />
    )
}

export default Sonic