import React, { useState } from "react";
import {
  Alert,
  Button,
  CloseButton,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminCreateProuductPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Link to="/admin/products" className="btn btn-info my-3">
            Go Back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Create a new Product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                required
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Count in Stock</Form.Label>
              <Form.Control name="count" required type="number" min="0" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" required type="text" min="0" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>
                Category
                <CloseButton />(<small>remove selected</small>)
              </Form.Label>
              <Form.Select required name="category" aria-label="Default">
                <option value="">Choose Category</option>
                <option value="1">Laptops</option>
                <option value="2">TV</option>
                <option value="3">Games</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formBasicNewCategory" className="mb-3 mt-3">
              <Form.Label>
                Or Create a new Category (Ex. Computers/Laptops/Intel)
              </Form.Label>
              <Form.Control name="newCategory" type="text" />
            </Form.Group>

            <Row className="mt-5">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttributes">
                  <Form.Label>Choose Attribute and set Value</Form.Label>
                  <Form.Select
                    required
                    name="atrrKey"
                    aria-label="Select Attribute"
                  >
                    <option>Choose Attribute</option>
                    <option value="red">Colour</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicAttributeValue"
                >
                  <Form.Label>Attribute Value</Form.Label>
                  <Form.Select
                    required
                    name="atrrVal"
                    aria-label="Select Attribute Value"
                  >
                    <option>Choose Attribute Value</option>
                    <option value="red">Colour</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Att Key</td>
                    <td>Att Value</td>
                    <td>
                      <CloseButton />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                  <Form.Label>Create new Attribute</Form.Label>
                  <Form.Control disable={false} type="text" placeholder="First choose or Create category" name="newAttrValue"/>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttributeValue">
                  <Form.Label>Attribute Value</Form.Label>
                  <Form.Control disable={false} type="text" placeholder="First choose or Create category" name="newAttrValue"/>
                </Form.Group>
              </Col>
            </Row>

            <Alert variant="primary">
              After typing attribute key and value press enter on one of the field
            </Alert>

            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
              <Form.Label>Images</Form.Label>
              <Form.Control required type="file" multiple />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminCreateProuductPage;
