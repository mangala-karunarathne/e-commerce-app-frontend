import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import AddedToCartMessegeComponent from "../components/AddedToCartMessegeComponent";
import { Rating } from "react-simple-star-rating";

const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedToCartMessegeComponent />
      <Row className="mt-5">
        <Col md={4}>
          <Image fluid src="/images/books.jpg" />
          <Image fluid src="/images/cameras.jpg" />
          <Image fluid src="/images/monitors.jpg" />
          <Image fluid src="/images/tablets.jpg" />
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item>Test Title Added here</ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} />
                  (1)
                </ListGroup.Item>
                <ListGroup.Item> Best Laptops</ListGroup.Item>
                <ListGroup.Item>MK Online Shop</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Danger</Button>
                </ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>Lorem ipsum dolor sit.</ListGroup.Item>
                <ListGroup.Item>Lorem ipsum dolor sit.</ListGroup.Item>
                <ListGroup.Item>Lorem ipsum dolor sit.</ListGroup.Item>
                <ListGroup.Item>Lorem ipsum dolor sit.</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <hr />
          Send Review Form
          <Alert variant="danger">Login First to write a Review</Alert>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Button variant="primary">Primary</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
