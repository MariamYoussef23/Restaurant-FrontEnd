import Container from "react-bootstrap/Container";
import { AppTypes } from "../../types";
import Card from "react-bootstrap/Card";
import { TiPlus, TiMinus } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import pizzaImg from "../../images/seafood-pizza.png";
import { Image } from "react-bootstrap";
import { useState } from "react";

const MenuItem = ({ item }: AppTypes) => {
  return (
    <Card>
      <div className="row align-items-center" style={{ height: "200px" }}>
        <div className="col-4 ">
          <Image src={pizzaImg} width="130" />
        </div>

        <div className="col-8">
          <h5>{item?.name}</h5>

          {item?.ingredients?.map((ingredient) => (
            <div key={Math.random()}>
              <p className="text-muted m-0 ">{ingredient},</p>
            </div>
          ))}

          <p>Price: L.E {item?.price}</p>

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

export default MenuItem;
