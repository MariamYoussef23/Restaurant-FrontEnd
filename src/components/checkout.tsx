import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CheckoutItem from "./checkoutItem";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [order, setOrder] = useState([
    {
      id: 1,
      name: "margherita",
      type: "pizza",
      ingredients: ["red Sauce"],
      price: 100,
      popular: true,
    },
    {
      id: 2,
      name: "peperoni",
      type: "pizza",
      ingredients: ["red Sauce", "peperoni", "olives"],
      price: 100,
      popular: false,
    },
    {
      id: 3,
      name: "four-cheese",
      type: "pizza",
      ingredients: ["cheese", "olives"],
      price: 100,
      popular: true,
    },
  ]);

  return (
    <Container className=" p-5 m-5">
      <div className="d-flex justify-content-between min-vh-100">
        <div className="">
          <Form className=" ">
            <Form.Group
              as={Row}
              className="mb-3 "
              controlId="formPlaintextName"
            >
              <Col sm="10">
                <Form.Control
                  className="border border-0 border-bottom rounded-0"
                  plaintext
                  readOnly
                  defaultValue="Name"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Col sm="10">
                <Form.Control
                  className="border border-0 border-bottom rounded-0"
                  plaintext
                  readOnly
                  defaultValue="Mobile"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 form"
              controlId="formPlaintextName"
            >
              <Col sm="10">
                <Form.Control
                  className="border border-0 border-bottom rounded-0"
                  plaintext
                  readOnly
                  defaultValue="Address"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3 form"
              controlId="formPlaintextName"
            >
              <Col sm="10">
                <Form.Control
                  className="border border-0 border-bottom rounded-0"
                  plaintext
                  readOnly
                  defaultValue="City"
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <div style={{ borderLeft: "3px solid grey", width: "25%" }}>
          {order.map((item) => (
            <CheckoutItem item={item} key={Math.random()} />
          ))}
          <hr></hr>
          <p>subtotal: L.E 700</p>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
