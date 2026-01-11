import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

const authConfig = { providers: [Google], pages: { signIn: "/sign-in" } }
const {
  auth,
  signIn,
  handlers: { GET, POST },
} = NextAuth(authConfig)

export { auth, signIn, GET, POST }
