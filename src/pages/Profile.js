import { useContext } from "react"
import { Image } from "react-bootstrap"
import Loader from "../componets/Loader"
import GiphyContext from "../utils/GiphyContext"
import { saveAs } from "file-saver"

function Profile() {
  const { deleteGif } = useContext(GiphyContext)
  const { profile } = useContext(GiphyContext)

  if (!profile) {
    return <Loader />
  }

  return (
    <>
      <div>
        <Image src={profile.photo} height="250px" />
        <p className="text-muted">{profile.email}</p>
      </div>
      {profile.items.map(item => (
        <div key={item._id} className="gif">
          <img src={item.title} />
          <button onClick={() => saveAs(item.title)}>Download!</button>
          <button onClick={deleteGif} id={item._id}>
            Delete
          </button>
        </div>
      ))}
    </>
  )
}
export default Profile
