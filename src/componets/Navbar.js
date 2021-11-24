import styles from "./navbar.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import GiphyContext from "../utils/GiphyContext"

function NavbarItem() {
  const { logout } = useContext(GiphyContext)
  return (
    <nav>
      <div className={styles.logo}>
        <Link className={styles.h1} to="/Home">
          <span className={styles.span1}>G</span>
          <span className={styles.span2}>I</span>
          <span className={styles.span3}>P</span>
          <span className={styles.span4}>H</span>
          <span className={styles.span5}>Y</span>
        </Link>
      </div>

      {localStorage.tokenPost ? (
        <ul className={styles.navbaritem}>
          <li>
            <Link to={"./Profile"}>Profile </Link>
          </li>
          <li>
            <Link to={"./Home"} onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className={styles.navbaritem}>
          <li>
            <Link to={"/SignUp"}>Signup </Link>
          </li>
          <li>
            <Link to={"/Login"}>Login </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
export default NavbarItem
