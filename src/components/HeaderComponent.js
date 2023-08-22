import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActions";

export default function HeaderComponent() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);
  return (
    <Navbar
      className="z-10"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="/">MK Online Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in Shop ..." />
              <Button variant="warning">
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>

          <Nav>
            {userInfo.isAdmin ? (
              <LinkContainer to="/admin/orders">
                <Nav.Link>
                  Admin
                  <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                </Nav.Link>
              </LinkContainer>
            ) : userInfo.name && !userInfo.isAdmin ? (
              <NavDropdown
                title={`${userInfo.name} ${userInfo.lastName}`}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  eventKey="/user/my-orders"
                  as={Link}
                  to="/user/my-orders"
                >
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/user" as={Link} to="/user">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => dispatch(logout())}>
                  Logout
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
              </>
            )}

            <LinkContainer to="/cart">
              <Nav.Link href="#pricing">
                <Badge pill bg="danger">
                  2
                </Badge>
                <i className="bi bi-cart-dash"></i>
                <span className="ms-1">Cart</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
