import { useContext } from "react"
import styles from "./singup.module.css"
import GiphyContext from "../utils/GiphyContext"

function SignUp() {
  const { signup } = useContext(GiphyContext)

  return (
    <div className={styles.Form}>
      <h3>Create an Account!</h3>
      <form className="sign-form" onSubmit={signup}>
        <label>
          Name
          <br />
          <input type="text" name="Name" required />
        </label>
        <label>
          Name
          <br />
          <input type="text" name="LName" required />
        </label>

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
        <label>
          avtar
          <br />
          <input type="url" name="image" required />
        </label>
        <br />
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  )
}

export default SignUp
