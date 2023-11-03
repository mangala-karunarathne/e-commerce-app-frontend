import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AddedToCartMessegeComponent = ({
  showCartMessage,
  setShowCartMessage,
}) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Alert
      show={showCartMessage}
      variant="success"
      onClose={() => setShowCartMessage(false)}
      dismissible
    >
      <Alert.Heading>The Product was added to your Cart !</Alert.Heading>
      <p>
        <Button variant="success" onClick={goBack}>Go Back</Button>{" "}
        <Link to="/cart">
          <Button variant="danger">Go to Cart</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessegeComponent;
