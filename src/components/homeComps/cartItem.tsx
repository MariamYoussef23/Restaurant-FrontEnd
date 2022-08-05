import pizzaImg from "../../images/seafood-pizza.png";
import { TiPlus, TiMinus } from "react-icons/ti";
import { Button, Card, Container, Image } from "react-bootstrap";
import { AppTypes, Product, ProductProps } from "../../types";
import React from "react";
import { updateCart } from "../../utils/functions";
import { useDispatch } from "react-redux";

const CartItem =({cartProduct}: ProductProps) => {
  const dispatch = useDispatch();


    return (
        <>
        <div className="row align-items-center" style={{ height: "200px" }}>
                  <div className="col-4 ">
                    <Image src={pizzaImg} width="100" />
                  </div>
          
                  <div className="col-8 w-50 h-50">
                    <h5>{cartProduct?.name}</h5>
          
                    {cartProduct?.ingredients}
          
                    <p>Price: L.E {cartProduct?.price}</p>
          
                    <div>
                      <Button
                        style={{
                          color: "black",
                          backgroundColor: "white",
                          border: "white",
                        }}
                        onClick={() => updateCart(-1, cartProduct!, dispatch)}
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
                        onClick={() => updateCart(1, cartProduct!, dispatch)}
                      >
                        <TiPlus />
                      </Button>
                    </div>
                  </div>
                </div>
              
            
        </>

    )
}


export default CartItem