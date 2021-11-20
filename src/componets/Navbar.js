import styles from "./navbar.module.css"
import { FaSearch } from "react-icons/fa"
function NavbarItem() {
  return (
    <nav>
      <div className={styles.logo}>
        <h1 className={styles.h1}>Giphy</h1>
      </div>
      <div className={styles.search}>
        <input type="text" className={styles.searchItem} placeholder="Search Gifs.." name="search" />
        <button type="submit" className={styles.searchButton}>
          <i class={FaSearch}></i>
          <FaSearch />
        </button>
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
