import pizzaImg from "../images/seafood-pizza.png";
import { TiPlus, TiMinus } from "react-icons/ti";
import { Button, Card, Container, Image } from "react-bootstrap";
import React from "react";
import { AppTypes } from "../types";


const CheckoutItem = ({item}: AppTypes) => {
  return (
    <>
      <div className="row align-items-center" style={{ height: "200px" }}>
        <div className="col-4 ">
          <Image src={pizzaImg} width="100" />
        </div>

        <div className="col-8 w-50 h-50">
          <h5>{item?.name}</h5>

          {item?.ingredients?.map((ingredients) => (
            <div key={Math.random()}>
              <p className="text-muted m-0 ">{ingredients},</p>
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
    </>
  );
};

export default CheckoutItem;
