import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItemComponent from "../components/CartItemComponent";

const CartPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shoping Cart</h1>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent item={{image: {path: "/images/tablets.jpg"}, name: "Product Name", price: 10, count:10, quantity:10}} key={idx} />
            ))}
          </ListGroup>
          <Alert variant="info">Your Cart is Empty</Alert>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroupItem>
              <h3>Subtotal (2 Items)</h3>
            </ListGroupItem>
            <ListGroupItem>
              Price: <span className="fw-bold">$225</span>
            </ListGroupItem>
            <ListGroupItem>
              <LinkContainer to="/user/cart-details">
                <Button type="button">Proceed to checkout</Button>
              </LinkContainer>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
