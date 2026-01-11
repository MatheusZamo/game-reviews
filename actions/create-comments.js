"use server"

import DOMPurify from "isomorphic-dompurify"
import { prisma } from "../lib/prisma"
import { revalidatePath } from "next/cache"

const getErrorMessage = data => {
  const validations = [
    { condition: !data.user, message: "Preencha o campo com seu nome" },
    {
      condition: data.user && data.user.length > 50,
      message: "Deixe o nome com no máximo 50 caracteres",
    },
    {
      condition: !data.message,
      message: "Preencha o campo com seu comentário",
    },
    {
      condition: data.message && data.message.length > 500,
      message: "Deixe o comentário com no máximo 500 caracteres",
    },
  ]

  return validations.find(validation => validation.condition)?.message
}

const createComment = async formData => {
  const rawFormData = Array.from(formData, ([key]) => key).reduce(
    (acc, key) => ({ ...acc, [key]: DOMPurify.sanitize(formData.get(key)) }),
    {}
  )
  const errorMessage = getErrorMessage(rawFormData)

  if (errorMessage) {
    return { isError: true, error: { message: errorMessage } }
  }

  await prisma.comment.create({
    data: rawFormData,
  })

  revalidatePath(`/analises/${rawFormData.slug}`)
  return { isError: false }
}

export default createComment
