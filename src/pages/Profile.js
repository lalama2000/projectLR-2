import { useContext } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import CardGif from "../components/CardGif"
import PostsContext from "../utils/PostsContext"
function Profile() {
  const { profile } = useContext(PostsContext)
  if (!profile) {
    return <Loader />
  }
  const myGif = data.filter(gifs => gifs._user._id === profile._id)
  return (
    <Container>
      <Row className="d-flex align-items-center mb-5">
        <Col>
          <Image src={profile.photo} height="250px" />
        </Col>
        <Col>
          <h2 className="mb-2">
            {profile.fristName} {profile.lastName}
          </h2>
          <p className="text-muted">{profile.email}</p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}>
        {myPosts.map(post => (
          <PostCard key={post._id} post={post} inProfile={true} />
        ))}
      </Row>
    </Container>
  )
}
export default Profile
