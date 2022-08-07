import { useState, useEffect } from "react";
import { Container, Button, ButtonToolbar } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Products } from "../types";
import CartItem from "../components/homeComps/cartItem";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { AppTypes } from "../types";
import { postOrder } from "../utils/api";
import { emptyCart } from "../actions/cart.actions";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state: Products) => state.cart);
  const orderLines = cart;

  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    cart.map((product) => {
      sum = sum + (product.quantity as number) * product.price;
    });
    setTotal(sum);
  }, [cart]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobile: "",
      address: "",
      city: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      mobile: Yup.string()
        .phone(
          "Egypt",
          true,
          "Please enter a valid mobile number starting with your region code (ex. +20 ) "
        )
        .required("Required"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      postOrder(values, orderLines);
      formik.resetForm;
      dispatch(emptyCart());
      navigate("/success")
    },
  });

  return (
    <Container className=" p-5 m-5">
      <div>
        <Row className=" min-vh-100 ">
          <Col sm={8}>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3 "
                controlId="formPlaintextName"
              >
                <Col sm="10">
                  <Form.Control
                    className="border border-0 border-bottom rounded-0"
                    plaintext
                    placeholder="First Name"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                </Col>
                <Form.Text className="text-muted">
                  {formik.touched.firstName ? (
                    <p>{formik.errors.firstName}</p>
                  ) : null}
                </Form.Text>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3 "
                controlId="formPlaintextName"
              >
                <Col sm="10">
                  <Form.Control
                    className="border border-0 border-bottom rounded-0"
                    plaintext
                    placeholder="Last Name"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                </Col>
                <Form.Text className="text-muted">
                  {formik.touched.lastName ? (
                    <p>{formik.errors.lastName}</p>
                  ) : null}
                </Form.Text>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextName"
              >
                <Col sm="10">
                  <Form.Control
                    className="border border-0 border-bottom rounded-0"
                    plaintext
                    placeholder="Mobile "
                    name="mobile"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.mobile}
                  />
                </Col>
                <Form.Text className="text-muted">
                  {formik.touched.mobile ? <p>{formik.errors.mobile}</p> : null}
                </Form.Text>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextName"
              >
                <Col sm="10">
                  <Form.Control
                    className="border border-0 border-bottom rounded-0"
                    plaintext
                    placeholder="Address"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextName"
              >
                <Col sm="10">
                  <Form.Control
                    className="border border-0 border-bottom rounded-0"
                    plaintext
                    placeholder="City "
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                </Col>
              </Form.Group>
            </Form>
            <Col sm="10" className=" d-flex justify-content-between">
              <Button
                onClick={(() => formik.handleSubmit())}
                className="w-50 mx-2"
                style={{
                  color: "white",
                  backgroundColor: "#CD2F17",
                  border: "#CD2F17",
                }}
              >
                Order Now
              </Button>
              <Button
                className="w-50"
                style={{
                  color: "grey",
                  backgroundColor: "white",
                  borderColor: "grey",
                }}
              >
                <Link to="/" style={{ color: "grey", textDecoration: "none" }}>
                  Cancel
                </Link>
              </Button>
            </Col>
          </Col>
          <Col
            sm={4}
            style={{
              gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr) )",
              display: "grid",
              borderLeft: "1px solid grey",
            }}
          >
            {cart.map((cartProduct) => (
              <CartItem cartProduct={cartProduct} key={cartProduct.id} />
            ))}

            <p>subtotal: {total}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Checkout;
