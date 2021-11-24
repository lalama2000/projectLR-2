import { useContext } from "react"
import styles from "./singup.module.css"
import GiphyContext from "../utils/GiphyContext"

function Login() {
  const { login } = useContext(GiphyContext)

  return (
    <div>
      <div className={styles.f1}>
        <h2 className={styles.head}>LOG IN</h2>
        <form className={styles.Form} onSubmit={login}>
          <label>Email:</label>
          <input type="email" name="email" required />
          <br />
          <label>Password:</label>
          <input type="password" name="password" required />
          <br />

          <button className={styles.button} type="submit">
            Log in
          </button>
        </form>
      </div>
      <img
        className={styles.photo}
        src="https://i.pinimg.com/originals/07/ee/2f/07ee2ff0d53565c402db2cdbe700ae6c.gif"
      ></img>
    </div>
  )
}

export default Login
