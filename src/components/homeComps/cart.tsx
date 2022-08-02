import Modal from "react-bootstrap/Modal";
import { AppTypes } from "../../types";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import delivery from "../../images/delivery.png";
import { Card, Container, Image } from "react-bootstrap";
import pizzaImg from "../../images/seafood-pizza.png";
import { TiPlus, TiMinus } from "react-icons/ti";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <>
      <Button
        onClick={handleShow}
        className="me-2"
        style={{
          color: "white",
          backgroundColor: "#303030",
          borderColor: "#303030",
        }}
      >
        <Image src={delivery} height={30} />
      </Button>
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        style={{ height: "70Vh", overflow: "auto" }}
        className="my-5"
      >
        <Container>
          <Offcanvas.Body>
            {order.map((item) => (
              <CartItem item={item} key={Math.random()}/>
            ))}
            <hr></hr>
            <p>subtotal: L.E 700</p>
            <Button onClick={handleClose}>
              <Link to="/checkout" style={{color:"white"}}>Checkout</Link>
            </Button>
          </Offcanvas.Body>
        </Container>
      </Offcanvas>
    </>
  );
};
export default Cart;
