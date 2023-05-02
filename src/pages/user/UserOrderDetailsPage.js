import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const UserOrderDetailsPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Oder Details</h1>
        <Col md={8}>
          <br />
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
            </Col>
            <Col md={6}>
              <h2>Payment Method</h2>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <h3>Order Summary</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrderDetailsPage;
