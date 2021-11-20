import styles from "./navbar.module.css"

function NavbarItem() {
  return (
    <nav>
      <div className={styles.logo}>
        <h1 className={styles.h1}>Giphy</h1>
      </div>
      <ul className={styles.navbaritem}>
        <li>
          <a href="./Signup">Signup</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  )
}
export default NavbarItem
