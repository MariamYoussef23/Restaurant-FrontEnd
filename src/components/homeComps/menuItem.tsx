import Container from "react-bootstrap/Container";
import { Product, Props, Products } from "../../types";
import Card from "react-bootstrap/Card";
import { TiPlus, TiMinus } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import pizzaImg from "../../images/seafood-pizza.png";
import { Image } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../utils/functions";

const MenuProduct = ({ product }: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: Products) => state.cart);
  const cartProduct = cart.find((cart) => cart.id === product?.id);
  
  return (
    <Card>
      <div className="row align-products-center" style={{ height: "200px" }}>
        <div className="col-4 ">
          <Image src={pizzaImg} width="130" />
        </div>

        <div className="col-8">
          <h5>{product?.name}</h5>

          {product?.description}

          <p>Price: L.E {product?.price}</p>

          <div>
            <Button
              style={{
                color: "black",
                backgroundColor: "white",
                border: "white",
              }}
              onClick={() => updateCart(-1, product!, dispatch)}
            >
              <TiMinus />
            </Button>
            <Button
              style={{
                color: "black",
                backgroundColor: "#d3d3d3",
                border: "grey",
              }}
            >
              {cartProduct ? cartProduct?.quantity : 0}
            </Button>
            <Button
              style={{
                color: "black",
                backgroundColor: "white",
                border: "white",
              }}
              onClick={() => updateCart(1, product!, dispatch)}
            >
              <TiPlus />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MenuProduct;
