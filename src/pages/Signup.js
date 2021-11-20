import { Form, Col, Row, Button, Alert } from "react-bootstrap"
import Signup from "./pages/Signup"
import { useContext } from "react"
import ProductsContext from "./ProductsContext"

function Signup() {
  return (
    <div className="ms-4 mt-4">
      <h1>Sign Up</h1>
      <Form className="m-5" onSubmit={signUp}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            User Nmae
          </Form.Label>
          <Col md="6">
            <Form.Control name="firstName" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Email
          </Form.Label>
          <Col md="6">
            <Form.Control type="email" name="email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Password
          </Form.Label>
          <Col md="6">
            <Form.Control type="password" name="password" required />
          </Col>
        </Form.Group>

        <Row>
          <Col md="8">{errorSignup !== null ? <Alert variant="danger">{errorSignup}</Alert> : null}</Col>
        </Row>
        <Form.Group as={Row} className="my-4">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Sign up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}
export default Signup
