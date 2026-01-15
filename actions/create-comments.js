"use server"

import DOMPurify from "isomorphic-dompurify"
import { prisma } from "../lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "../lib/auth"

const getErrorMessage = data => {
  const validations = [
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
  const session = await auth()

  if (!session?.user) {
    return {
      isError: true,
      error: { message: "Acesso não autorizado. Por favor, faça login." },
    }
  }
  const userName = { user: session.user.name }
  const rawFormData = Array.from(formData, ([key]) => key).reduce(
    (acc, key) => ({ ...acc, [key]: DOMPurify.sanitize(formData.get(key)) }),
    userName
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
