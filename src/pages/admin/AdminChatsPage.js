import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminChatRoomComponent from "../../components/Admin/AdminChatRoomComponent";
import AdminLinksComponent from "../../components/Admin/AdminLinksComponent";

const AdminChatsPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <Row>
            <AdminChatRoomComponent />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminChatsPage;
