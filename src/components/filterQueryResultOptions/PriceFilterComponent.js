import React from "react";
import { Form } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold">Price no greater than:</span> 500$
      </Form.Label>
      <FormRange min={10} max={1000} step={10}/>
    </>
  );
};

export default PriceFilterComponent;
