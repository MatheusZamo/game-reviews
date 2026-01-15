import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./prisma"

const loginInCallback = async ({ user }) => {
  try {
    const userInDb = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (!userInDb) {
      await prisma.user.create({ data: { email: user.email, name: user.name } })
    }

    return true
  } catch (error) {
    console.log("error", error)
    return false
  }
}

const authConfig = {
  providers: [Google],
  pages: { signIn: "/login" },
  callbacks: { signIn: loginInCallback },
}
const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig)

export { auth, signIn, signOut, GET, POST }
