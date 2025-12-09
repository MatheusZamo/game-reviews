"use client"

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchBox = ({ reviews }) => {
  const listOfReview = reviews.map(review => ({
    title: review.title,
    path: review.path,
  }))

  const [query, setQuery] = useState("")
  const router = useRouter()
  const changeInputValue = e => setQuery(e.target.value)
  const goToReviewPage = review => review && router.push(`${review.path}`)

  const filteredReview =
    query === ""
      ? []
      : listOfReview.filter(review => {
          return review.title.toLowerCase().includes(query.toLowerCase())
        })

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
        {filteredReview.map(review => (
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
