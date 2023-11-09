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
import CartItemComponent from "../../components/CartItemComponent";

const CartPageComponent = ({
  addToCart,
  cartItems,
  cartSubtotal,
  reduxDispatch,
}) => {
  const changeCount = (productId, count) => {
    reduxDispatch(addToCart(productId, count));
  };
  const removeFromCartHandler = (productId, quantity, price) => {
    if (window.confirm("Are you sure?")) {
      console.log("productId :", productId);
      console.log("quantity :", quantity);
      console.log("price :", price);
    }
  };

  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={8}>
          <h1>Shoping Cart</h1>
          {cartItems.lenght === 0 ? (
            <Alert variant="info">Your Cart is Empty</Alert>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item, idx) => (
                <CartItemComponent
                  item={item}
                  key={idx}
                  changeCount={changeCount}
                  removeFromCartHandler={removeFromCartHandler}
                />
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroupItem>
              <h3>
                Subtotal ({cartItems.length}{" "}
                {cartItems.length === 1 ? "Product" : "Products"})
              </h3>
            </ListGroupItem>
            <ListGroupItem>
              Price: <span className="fw-bold">${cartSubtotal}</span>
            </ListGroupItem>
            <ListGroupItem>
              <LinkContainer to="/user/cart-details">
                <Button disabled={cartSubtotal === 0} type="button">
                  Proceed to checkout
                </Button>
              </LinkContainer>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPageComponent;
