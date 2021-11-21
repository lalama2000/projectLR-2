import { Card, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function cardgif(props) {
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={el.images.fixed_height.url} />
            {inProfile ? (
              <div>
                <Button variant="success" className="me-2">
                  save
                </Button>
                <Button variant="success" className="me-2">
                  Download
                </Button>
                <Button variant="danger">Delete</Button>
              </div>
            ) : (
              <Link className="btn btn-primay" to={`/post/${post._id}`}>
                View
              </Link>
            )}
          </Card.Body>
        </Card>
      </Col>
    </div>
  )
}
export default cardgif
