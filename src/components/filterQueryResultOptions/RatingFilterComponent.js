import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const RatingFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Fragment key={idx}>
      <Form.Check type="checkbox" id={`check-api-${idx}`}>
        <Form.Check.Input type="checkbox" isValid />
        <Form.Check.Label style={{ cursor: "pointer" }}></Form.Check.Label>
        <Rating readonly size={20} initialValue={5-idx} />
      </Form.Check>
      </Fragment>
      ))}
    </>
  );
};

export default RatingFilterComponent;
