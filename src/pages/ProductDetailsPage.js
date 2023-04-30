import React, { useEffect } from "react";
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
import ImageZoom from "js-image-zoom";

const ProductDetailsPage = () => {
  useEffect(() => {

    var options = {
      width: 400,
      zoomWidth: 500,
      // filContainer: true,
      // zoomPosition: "bottom",
      // scale: 2,
      offset: {verticle:0, horizontal:0},
    }

    new ImageZoom(document.getElementById("first"),options)
    new ImageZoom(document.getElementById("second"),options)
    new ImageZoom(document.getElementById("third"),options)
    new ImageZoom(document.getElementById("fourth"),options)
  })
  
  return (
    <Container>
      <AddedToCartMessegeComponent />
      <Row className="mt-5">
        <Col style={{zIndex:1}} md={4}>
          <div id="first">
            <Image crosorigin="anonymous" fluid src="/images/books.jpg" />
          </div>
          <div id="second">
            <Image crosorigin="anonymous" fluid src="/images/cameras.jpg" />
          </div>
          <div id="third">
            <Image crosorigin="anonymous" fluid src="/images/monitors.jpg" />
          </div>
          <div id="fourth">
            <Image crosorigin="anonymous" fluid src="/images/tablets.jpg" />
          </div>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={8}>
              <ListGroup>
                <ListGroup.Item>
                  <h1>Test Title Added here</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} />
                  (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$165</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  sint! MK Online Shop
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>Status in Stock</ListGroup.Item>
                <ListGroup.Item>
                  Price <span className="fw-bold">$165</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Quantity :
                  <Form.Select size="lg" aria-label="Default select example">
                    <option>1</option>
                    <option value="1">2</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger">Add to Cart</Button>
                </ListGroup.Item>
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
