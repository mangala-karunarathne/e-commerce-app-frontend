import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/Admin/AdminLinksComponent";

const UserPageComponent = ({ fetchUsers }) => {
  const [users, setUsers] = useState([]);

  const deleteHandler = () => {
    if (window.confirm("Are you sure?")) alert("User Deletet !");
  };

  useEffect(() => {
    const abortctrl = new AbortController();
    fetchUsers(abortctrl).then((res) => setUsers(res));
    return () => abortctrl.abort();
  }, []);

  return (
    <>
      <Row className="m-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>User List</h1>
          {console.log(users)}
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Is Admin</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
                (item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>Mangala </td>
                    <td>Karuarathne</td>
                    <td>mangalaicc@gmail.com</td>
                    <td>
                      <i className={item}></i>
                    </td>
                    <td>
                      <LinkContainer to="/admin/edit-user">
                        <Button className="btn-sm">
                          <i className="bi bi-pencil-square"></i>
                        </Button>
                      </LinkContainer>
                      {" / "}
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={deleteHandler}
                      >
                        <i className="bi bi-x-circle"></i>
                      </Button>
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

export default UserPageComponent;
