import { useState } from "react";
import { Container, Button, ButtonToolbar } from "react-bootstrap";
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
      <div>
        <Row className=" min-vh-100 ">
          <Col sm={8}>
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
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextName"
              >
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
                className="mb-3"
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
                className="mb-3"
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
            <Col sm="10" className=" d-flex justify-content-between">
              <Button
                className="w-50 mx-2"
                style={{
                  color: "white",
                  backgroundColor: "#CD2F17",
                  border: "#CD2F17",
                }} 
              >
                <Link to="/success" style={{color:"white", textDecoration: 'none'}}>Order Now</Link>
              </Button>
              <Button
                className="w-50"
                style={{
                  color: "grey",
                  backgroundColor: "white",
                  borderColor: "grey",
                }}
              >
                {" "}
                Cancel
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
            {order.map((item) => (
              <CheckoutItem item={item} key={Math.random()} />
            ))}

            <p>subtotal: L.E 700</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Checkout;
