import Modal from "react-bootstrap/Modal";
import { AppTypes, Products } from "../../types";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import delivery from "../../images/delivery.png";
import { Card, Container, Image } from "react-bootstrap";
import pizzaImg from "../../images/seafood-pizza.png";
import { TiPlus, TiMinus } from "react-icons/ti";
import CartItem from "./cartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useSelector((state: Products) => state.cart);
  const [total, setTotal] = useState(0);

 

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
            {cart.map((cartProduct) => (
              <CartItem cartProduct={cartProduct} key={cartProduct.id} />
            ))}
            <hr></hr>
            <p>subtotal: </p>
            <Button onClick={handleClose}>
              <Link to="/checkout" style={{ color: "white" }}>
                Checkout
              </Link>
            </Button>
          </Offcanvas.Body>
        </Container>
      </Offcanvas>
    </>
  );
};
export default Cart;
