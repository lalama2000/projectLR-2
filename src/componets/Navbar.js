import styles from "./navbar.module.css"
import { Link } from "react-router-dom"

function NavbarItem() {
  return (
    <nav>
      <div className={styles.logo}>
        <Link className={styles.h1} to="/Home">
          Giphy
        </Link>
      </div>
      <ul className={styles.navbarhome}>
        <li>
          <Link to={"./Home"} className={styles.home}>
            Home
          </Link>
        </li>
      </ul>
      {localStorage.tokenPost ? (
        <ul className={styles.navbaritem}>
          <li>
            <Link to={"./Profile"}>Profile </Link>
          </li>
          <li>
            <Link to={"./Home"}>Logout </Link>
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
