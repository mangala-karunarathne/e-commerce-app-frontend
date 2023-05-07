import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Button, Form, Toast } from "react-bootstrap";

const AdminChatRoomComponent = () => {
    const [msg1, closeMsg1] = useState(true);
    const close1 = () => closeMsg1(false);
    const [msg2, closeMsg2] = useState(true);
    const close2 = () => closeMsg2(false);
  return (
    <>
      <Toast show={msg1} onClose={close1} className="ms-4 mb-5">
        <Toast.Header>
          <strong className="me-auto">Chat with Mangala Karunarathne</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "400px", overflow: "auto" }}>
            {Array.from({ length: 30 }).map((_, idx) => (
              <Fragment key={idx}>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>User Wrote:</b> Hell, Admin. This is a test chat message.
                </p>
                <p>
                  <b>Admin wrote:</b> Hi, How can I help you
                </p>
              </Fragment>
            ))}
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
      <Toast show={msg2} onClose={close2} className="ms-4 mb-5">
        <Toast.Header>
          <strong className="me-auto">Chat with Mathhesha Pathirana</strong>
        </Toast.Header>
        <Toast.Body>
          <div style={{ maxHeight: "400px", overflow: "auto" }}>
            {Array.from({ length: 30 }).map((_, idx) => (
              <Fragment key={idx}>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>User Wrote:</b> Hell, Admin. This is a test chat message.
                </p>
                <p>
                  <b>Admin wrote:</b> Hi, How can I help you
                </p>
              </Fragment>
            ))}
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Write a message</Form.Label>
              <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AdminChatRoomComponent;
