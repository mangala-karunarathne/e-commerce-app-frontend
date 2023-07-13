import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AdminLinksComponent from "../../../components/Admin/AdminLinksComponent";

const OrderPageComponent = ({getOrders}) => {

const [orders, setOrders] = useState([])

useEffect(() => {
    getOrders()
    .then((orders)=> setOrders(orders))
    .catch(err=>console.log(err.response.data.message ? err.response.data.message : err.response.data))
}, [])
console.log(orders);

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
              {orders.map(
                (order, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                      {order.user !== null ? ( 
                      <>
                        {order.user.name} {order.user.lastName}
                      </>
                        ) : null}
                     </td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.orderTotal.cartSubtotal}</td>
                    <td>
                      {order.isDelivered ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-check-lg text-danger"></i>}
                    </td>
                    <td>{order.paymentMethod}</td>
                    <td>
                      <LinkContainer to={`/admin/order-details/${order._id}`}>
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

export default OrderPageComponent;
