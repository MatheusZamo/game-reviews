import { signOut } from "../lib/auth"

const LogoutForm = () => {
  const handleLogout = async () => {
    "use server"
    await signOut()
  }
  return (
    <form action={handleLogout}>
      <button type="submit" className="hover:text-sky-500">
        Logout
      </button>
    </form>
  )
}

export { LogoutForm }
