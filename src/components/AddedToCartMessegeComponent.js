import React from 'react'
import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AddedToCartMessegeComponent = () => {
    const [show, setShow] = useState(true);
    
        return (
          <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>The Product was added to your Cart !</Alert.Heading>
            <p>
              <Button variant="success">Go Back</Button>{" "}
              <Link to="/cart">
              <Button variant="danger">Go to Cart</Button>
              </Link>
            </p>
          </Alert>
        );
    
}

export default AddedToCartMessegeComponent
