import Container from "react-bootstrap/Container";
import { ProductProps} from "../../types";
import Card from "react-bootstrap/Card";
import { TiPlus, TiMinus } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import pizzaImg from "../../images/seafood-pizza.png";
import { Image } from "react-bootstrap";
import { useState } from "react";

const MenuProduct = ({product}: ProductProps) => {
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
              0
            </Button>
            <Button
              style={{
                color: "black",
                backgroundColor: "white",
                border: "white",
              }}
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
