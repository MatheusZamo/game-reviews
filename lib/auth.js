import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const authConfig = { providers: [Google] }
const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig)

export { auth, GET, POST }
