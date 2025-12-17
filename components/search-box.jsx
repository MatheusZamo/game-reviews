"use client"

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const SearchBox = () => {
  const [reviews, setReviews] = useState([])
  const [query, setQuery] = useState("")
  const router = useRouter()
  const changeInputValue = e => setQuery(e.target.value)
  const goToReviewPage = review => review && router.push(review.path)

  useEffect(() => {
    if (query.length > 1) {
      const controller = new AbortController()
      const url = `/api/webhooks/reviews-search?query=${encodeURIComponent(query)}`
      fetch(url, { signal: controller.signal })
        .then(response => response.json())
        .then(setReviews)
        .catch(console.log)

      return () => controller.abort()
    } else {
      setReviews([])
    }
  }, [query])

  return (
    <Combobox onChange={goToReviewPage}>
      <ComboboxInput
        displayValue={query}
        onChange={changeInputValue}
        className="bg-slate-700 border px-2 rounded"
        placeholder="Pesquisar análise"
        autoFocus
      />
      <ComboboxOptions
        anchor="bottom start"
        className="border empty:invisible bg-slate-700"
      >
        {reviews.map(review => (
          <ComboboxOption
            key={review.title}
            value={review}
            className="data-focus:bg-blue-500"
          >
            <span className="block px-2 w-full"> {review.title}</span>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}

export default SearchBox
