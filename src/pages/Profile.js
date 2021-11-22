import { useContext } from "react"
import { Image } from "react-bootstrap"
import Loader from "../componets/Loader"
import GiphyContext from "../utils/GiphyContext"

function Profile() {
  const { profile, Gifs } = useContext(GiphyContext)
  if (!profile) {
    return <Loader />
  }
  // const myGiphy = Gifs.filter(Gif => Gif._user._id === profile._id)

  return ( Gifs.map(el => {
      return (
        <div key={el.id} className="gif">
          <img src={el.images.fixed_height.url} />  
    <div> 
      <Image src={profile.photo} height="250px" />
      <p className="text-muted">{profile.email}</p>
    </div>
    </div>
  ))
}
export default Profile
