import { useContext } from "react"
import { Image } from "react-bootstrap"
import Loader from "../componets/Loader"
import GiphyContext from "../utils/GiphyContext"
import { saveAs } from "file-saver"
import styles from "./profile.module.css"

function Profile() {
  const { deleteGif } = useContext(GiphyContext)
  const { profile } = useContext(GiphyContext)

  if (!profile) {
    return <Loader />
  }

  return (
    <div>
      <div className={styles.file}>
        <Image className={styles.avtar} src={profile.photo} height="250px" />
        <p className="text-muted">{profile.email}</p>
      </div>
      <div className={styles.gifs}>
        {profile.items.map(item => (
          <div key={item._id}>
            <img src={item.title} />
            <div className={styles.buttonProo}>
              <button className={styles.buttonDown} onClick={() => saveAs(item.title)}>
                Download
              </button>
              <button className={styles.buttonDel} onClick={deleteGif} id={item._id}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Profile
