import { NextResponse } from "next/server"
import { auth } from "./lib/auth"

const loginInRoute = "/login"

const middleware = async request => {
  const isLoginRoute = request.nextUrl.pathname.startsWith(loginInRoute)
  const session = await auth()

  if (isLoginRoute && session) {
    return NextResponse.redirect(new URL("/analises", request.url))
  }
}

const config = { matcher: [loginInRoute] }

export { middleware, config }
