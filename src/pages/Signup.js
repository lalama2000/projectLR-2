import { useContext } from "react"
import styles from "./singup.module.css"
import GiphyContext from "../utils/GiphyContext"

function SignUp() {
  const { signup } = useContext(GiphyContext)

  return (
    <div>
      <div className={styles.f1}>
        <h2 className={styles.head}>SIGN UP!</h2>
        <form className={styles.Form} onSubmit={signup}>
          <label>First Name:</label>
          <input type="text" name="Name" placeholder="Your first name.." required />
          <br />
          <label>Last Name:</label>
          <input type="text" name="LName" placeholder="Your last name.." required />
          <br />

          <label>Email:</label>
          <input type="email" name="email" required />
          <br />

          <label>Password:</label>
          <input type="password" name="password" required />
          <br />

          <label>Avtar:</label>
          <input type="url" name="image" required />
          <br />

          <button className={styles.button} type="submit">
            Sign Up
          </button>
        </form>
      </div>
      <img
        className={styles.photo}
        src="https://i.pinimg.com/originals/4b/74/bb/4b74bbf5197ab483c311f6cb078c3ddb.gif"
      ></img>
    </div>
  )
}

export default SignUp
