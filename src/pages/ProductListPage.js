import React from "react";
import { Button, Col, Container, ListGroup, Pagination, Row } from "react-bootstrap";

const ProductListPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item>
            <Button variant="primary">Primary</Button>
              <Button variant="danger">Danger</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          {/* <ProductForListComponent />
          <PaginationComponent /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListPage;
