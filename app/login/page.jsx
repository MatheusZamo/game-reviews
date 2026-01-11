import Heading1 from "../../components/heading1"
import { LoginForm } from "../../components/login-form"

const metadata = {
  title: "Login",
}

const Login = () => {
  return (
    <>
      <Heading1>Login</Heading1>
      <LoginForm />
    </>
  )
}

export default Login
export { metadata }
