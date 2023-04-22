import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({images,idx}) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={"/images/"+ images[idx] + ".jpg"} />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Lorem ipsum dolor sit amet.</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel
              commodi optio dignissimos laudantium temporibus, laboriosam, earum
              vero dolore, pariatur porro possimus quaerat! Illo, eaque?
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={5} />
              (1)
            </Card.Text>
            <Card.Text className="h4">
              $125{" "}
              <LinkContainer to="/product-details">
                <Button variant="danger">See Product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
