import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AdminLinksComponent from "../../components/Admin/AdminLinksComponent";

const AdminOrdersPage = () => {

  return (
    <>
      <Row className="m-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>Orders</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>Payment Method</th>
                <th>Order Details</th>
              </tr>
            </thead>
            <tbody>
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
                (item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>Mangala Karuarathne</td>
                    <td>2022-08-15</td>
                    <td>$125</td>
                    <td>
                      <i className={item}></i>
                    </td>
                    <td>Paypal</td>
                    <td>
                      <LinkContainer to="/admin/order-details">
                        <Button>Go to order</Button>
                      </LinkContainer>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default AdminOrdersPage;
