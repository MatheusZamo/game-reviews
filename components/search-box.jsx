"use client"

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react"
import { useState } from "react"

const SearchBox = ({ reviews }) => {
  const listOfReview = reviews.map(review => review.title)
  const [selectedReview, setSelectedReview] = useState(listOfReview[0])
  const [query, setQuery] = useState("")

  const filteredReview =
    query === ""
      ? listOfReview
      : listOfReview.filter(review => {
          return review.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      value={selectedReview}
      onChange={setSelectedReview}
      onClose={() => setQuery("")}
    >
      <ComboboxInput
        aria-label="Assignee"
        displayValue={listOfReview => listOfReview}
        onChange={event => setQuery(event.target.value)}
        className="bg-slate-700 border px-2 rounded"
        placeholder="Pesquisar análise"
      />
      <ComboboxOptions
        anchor="bottom"
        className="border empty:invisible bg-slate-700"
      >
        {filteredReview.map(listOfReview => (
          <ComboboxOption
            key={listOfReview}
            value={listOfReview}
            className="data-focus:bg-blue-500"
          >
            <span className="block px-2 w-full"> {listOfReview} </span>
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}

export default SearchBox
