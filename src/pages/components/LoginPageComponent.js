import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { setReduxUserState } from "./../../redux/actions/userActions";
import { LoginSocialFacebook } from "reactjs-social-login";

const LoginPageComponent = ({
  loginUserApiRequest,
  reduxDispatch,
  setReduxUserState,
}) => {
  const [validated, setValidated] = useState(false);
  const [loginUserResponseState, setLoginUserResponseState] = useState({
    success: "",
    error: "",
    loading: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;

    const email = form.email.value;
    const password = form.password.value;
    const doNotLogout = form.doNotLogout.checked;

    if (event.currentTarget.checkValidity() === true && email && password) {
      setLoginUserResponseState({ loading: true });
      loginUserApiRequest(email, password, doNotLogout)
        .then((res) => {
          setLoginUserResponseState({
            success: res.success,
            loading: false,
            error: "",
          });
          if (res.userLoggedIn) {
            reduxDispatch(setReduxUserState(res.userLoggedIn));
          }

          if (res.success === "User Logged in" && !res.userLoggedIn.isAdmin)
            // window.location.href = '/user'
            navigate("/user");
          else navigate("/admin/orders");
          // window.location.href = '/admin/orders'
        })
        .catch((err) =>
          setLoginUserResponseState({
            error: err.response.data.message
              ? err.response.data.message
              : err.response.data,
          })
        );
    }

    setValidated(true);
  };

  const handleFacebookLogin = async (response) => {
    console.log("response:", response);
    console.log("FB Username: ", response.data.name);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                required
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckBox">
              <Form.Check
                name="doNotLogout"
                type="checkbox"
                label="Do not logout"
              />
            </Form.Group>
            <Row className="pb-2">
              <Col>
                Don't you have account ?<Link to={"/register"}> Register </Link>
              </Col>
            </Row>
            <Row className="justify-content-between">
              <Col>
                <Button variant="primary" type="submit">
                  {loginUserResponseState &&
                  loginUserResponseState.loading === true ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    ""
                  )}
                  Login
                </Button>
              </Col>
              <Col>
                <LoginSocialFacebook
                  appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                  onResolve={handleFacebookLogin}
                  onReject={(error) => {
                    console.log("Error: ", error);
                  }}
                >
                  <Button>Facebook Login</Button>
                </LoginSocialFacebook>
              </Col>
              <Col>
                <Link to={"/privacy-policy"}>
                  <Button>Privacy Policy</Button>
                </Link>
              </Col>
            </Row>

            <Alert
              show={
                loginUserResponseState &&
                loginUserResponseState.error === "Wrong Credentials"
              }
              variant="danger"
            >
              Credentials do not Match !
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPageComponent;
