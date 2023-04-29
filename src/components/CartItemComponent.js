import React from "react";
import { Button, Col, Image, ListGroupItem, Row } from "react-bootstrap";
import { Form } from "react-router-dom";

function CartItemComponent() {
  return (
    <>
      <ListGroupItem>
        <Row>
          <Col md={2}>
            <Image crossOrigin="anonymous" src="/images/tablets.jpg" fluid />
          </Col>
          <Col md={2}>
            Mac Book Series
            <br />
            High Performance
          </Col>
          <Col md={2}>
            <b>$450</b>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button type="button" variant="secondary" onClick={() => window.confirm("Are you sure")}><i className="bi bi-trash"></i></Button>
          </Col>
        </Row>
      </ListGroupItem>
    </>
   
  );
}

export default CartItemComponent;
