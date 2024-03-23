import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import CartItemComponent from "../../../components/CartItemComponent";
import { useParams } from "react-router-dom";

const UseerOrderDetailsPageComponent = ({ userInfo, getUser, getOrder, loadScript }) => {
  const [userAddress, setUserAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [orderButtonMessage, setOrderButtonMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [isDelivered, setIsDelivered] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const paypalContainer = useRef();
  console.log(paypalContainer);

  const { id } = useParams();

  useEffect(() => {
    // console.log("check :", userAddress );
    getUser()
      .then(
        (data) => {
          // console.log("data A:", data);
          // console.log("data 1:", data.address);
          setUserAddress({
            address: data.address,
            city: data.city,
            country: data.country,
            zipCode: data.zipCode,
            state: data.state,
            phoneNumber: data.phoneNumber,
          });
        }
        )
        .catch((err) => console.log("shit", err));
        // console.log("check :", userAddress );
      }, []);

      useEffect(() => {
        getOrder(id).then(data => {
          setPaymentMethod(data.paymentMethod);
          setCartItems(data.cartItems);
          console.log("Cart Items", data.cartItems ) 
          setCartSubTotal(data.orderTotal.cartSubtotal);
          data.isDelivered ? setIsDelivered(data.deliveredAt) : setIsDelivered(false);
          data.isPaid ? setIsPaid(data.paidAt) : setIsPaid(false);
          if(data.isPaid) {
            setOrderButtonMessage("Your order is finished");
            setButtonDisabled(true);
          } else {
            if (data.paymentMethod === 'pp') {
              setOrderButtonMessage("Pay for your order");
            } else if(data.paymentMethod === 'cod') {
              setButtonDisabled(true);
              setOrderButtonMessage("Wait for your order. You pay on delivery");
            }
          }
        })
        .catch((err) => console.log(err));
      }, []);

      const orderHandler = () => {
        setButtonDisabled(true);
        if (paymentMethod === 'pp') {
          setOrderButtonMessage("To pay for your order click one of the buttons below");
          if(!isPaid) {
            loadScript({
              "client-id": "ARZSc3ZTEz7iPo8TaqVA224YABlusXGuWf7KafM5dDwCu04Op2f9bHaOO5hDPGnIuoLl-iJMhMPV_YMi"
            })
            .then((paypal) => {
              paypal.Buttons({}).render("#paypal-container-element");
            })
            .catch((err) => {
              console.log("failed to load the PayPal JS SDK script", err);
            })
          }
        } else {
          setOrderButtonMessage("Your order was placed. Thank You");
        }
      }

  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Oder Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: {userInfo.name} {userInfo.lastName}
              <br />
              <b>Address</b>: {userAddress.address} {userAddress.city}{" "}
              {userAddress.state} {userAddress.zipCode}
              <br />
              <b>Phone</b>: {userAddress.phoneNumber}
            </Col>
            <Col md={6}>
              <h2>Payment Method</h2>
              <Form.Select value={paymentMethod} disabled={true}>
                <option value="pp">Paypal</option>
                <option value="cod">
                  Cash on Delivery (Delivery may be delayed)
                </option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant={isDelivered ? "success" : "danger"}>
                  {isDelivered ? <>Delivered at {isDelivered}</> : <>Not Delivered</>}
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant={isPaid ? "success" : "danger"}>
                {isPaid ? <>Paid on {isPaid}</> : <>Not Paid yet</>}
                </Alert>
              </Col>
            </Row>
          </Row>
          <br />
          <h2>Order Items</h2>
          <ListGroup variant="flush">
            {cartItems.map((item, idx) => (
              <CartItemComponent
                item={item}
                key={idx}
                orderCreated={true}
              />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>Order Summary</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Items Price (Including Tax): <span className="fw-bold">{cartSubTotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Shipping: <span className="fw-bold">Included</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Tax: <span className="fw-bold">Included</span>
            </ListGroup.Item>
            <ListGroup.Item className="text-danger">
              Total Price: <span className="fw-bold">{cartSubTotal}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button size="lg" onClick={orderHandler} variant="danger" type="button" disabled={buttonDisabled}>
                  {orderButtonMessage}
                </Button>
              </div>
              <div style={{ position: "relative", zIndex: 1}}>
                <div ref={paypalContainer} id="paypal-container-element">

                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UseerOrderDetailsPageComponent;
