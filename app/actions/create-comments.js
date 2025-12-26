"use server"

import { prisma } from "@/app/lib/prisma"
import { revalidatePath } from "next/cache"

const createComment = async formData => {
  const { user, message, slug } = Object.fromEntries(formData)

  if (!user || !message) {
    return { isError: true, error: { message: "Preencha todos os campos " } }
  }

  await prisma.comment.create({
    data: {
      slug,
      user,
      message,
    },
  })

  revalidatePath(`/analises/${slug}`)
  return { isError: false }
}

export default createComment
