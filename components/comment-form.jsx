"use client"

import createComment from "@/actions/create-comments"
import { useState } from "react"

const CommentForm = ({ slug, title }) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.target)
    const result = await createComment(formData)
    setErrorMessage(result.isError ? result.error.message : null)
    setIsSubmitting(false)

    if (!result.isError) {
      e.target.reset()
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="border border-slate-500 flex flex-col gap-2 mt-3 px-3 py-3 rounded"
    >
      <p className="pb-1">
        Jogou <strong>{title}</strong>? Dê a sua opinião!
      </p>
      <input type="hidden" name="slug" value={slug} />
      <div className="flex items-center">
        <label className="shrink-0 flex items-center space-x-2">
          <span className="w-32">Seu nome</span>
          <input
            name="user"
            className="border px-2 py-1 rounded w-48 ml-2 bg-slate-800"
          />
        </label>
      </div>
      <div className="flex items-center">
        <label className="shrink-0 flex items-center space-x-2">
          <span className="w-32">Seu comentário</span>
          <textarea
            name="message"
            className="border px-2 py-1 rounded w-96 ml-2 bg-slate-800"
          />
        </label>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        disabled={isSubmitting}
        type="submit"
        className="disabled:bg-indigo-400 bg-indigo-600 rounded px-2 py-1 self-center text-slate-50 w-32 hover:bg-indigo-500"
      >
        {isSubmitting ? "Salvando" : "Enviar"}
      </button>
    </form>
  )
}

export default CommentForm
