import { useContext } from "react"
import styles from "./singup.module.css"
import GiphyContext from "../utils/GiphyContext"

function Login() {
  const { login } = useContext(GiphyContext)

  return (
    <div className={styles.Form}>
      <h3>log in</h3>
      <form className="sign-form" onSubmit={login}>
        <label>
          Email:
          <br />
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <br />
          <input type="password" name="password" required />
        </label>

        <button type="submit">Log in!</button>
      </form>
    </div>
  )
}

export default Login
