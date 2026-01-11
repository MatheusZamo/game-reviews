import { signIn } from "../lib/auth"

const LoginForm = () => {
  const handleLogin = async () => {
    "use server"
    await signIn("google", { redirectTo: "/analises" })
  }
  return (
    <form action={handleLogin}>
      <button type="submit" className="bg-indigo-600 rounded px-4 py-2 mt-2">
        Entrar com o Google
      </button>
    </form>
  )
}

export { LoginForm }
