import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink } from "react-router-dom";

const UserOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col md={12}>
        <h1>My Orders</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
          {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>Mangala Karuarathne</td>
                  <td>2022-08-15</td>
                  <td>$125</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>
                    <Link to="/user/order-details">go to order</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;
