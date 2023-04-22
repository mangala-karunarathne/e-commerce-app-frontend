import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProductDetailsPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>images</Col>
        <Col md={8}>
          <Row>
            <Col md={8}>Product Name, Price, Description & Rate</Col>
            <Col md={4}>Product Status & Quantity</Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>REVIEWS</h5>
            </Col>
          </Row>
          <hr />
          Send Review Form
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
