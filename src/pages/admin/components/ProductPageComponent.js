import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AdminLinksComponent from "../../../components/Admin/AdminLinksComponent";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userActions";

const ProductPageComponent = ({ fetchProducts, deleteProduct }) => {
  const [products, setProducts] = useState([]);
  const [productDeleted, setProductDeleted] = useState(false);

  const deleteHandler = async (productId) => {
    if (window.confirm(" Are you sure ? ")) {
      const data = await deleteProduct(productId);
      if (data.message === "Product removed") {
        setProductDeleted(!productDeleted);
      }
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const abrtctrl = new AbortController();
    fetchProducts(abrtctrl)
      .then((res) => setProducts(res))
      .catch((err) =>
      dispatch(logout())
        // setProducts([
        //   {
        //     name: err.response.data.message
        //       ? err.response.data.message
        //       : err.response.data,
        //   },
        // ])
      );
    return () => abrtctrl.abort();
  }, [productDeleted]);

  return (
    <>
      <Row className="m-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>
            Product List{" "}
            <LinkContainer to="/admin/create-new-product">
              <Button variant="primary" size="lg">
                Create New
              </Button>
            </LinkContainer>
          </h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit / Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <LinkContainer to={`/admin/edit-product/${item._id}`}>
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(item._id)}
                    >
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default ProductPageComponent;
