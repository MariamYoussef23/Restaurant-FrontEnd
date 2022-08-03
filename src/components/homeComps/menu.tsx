import Container from "react-bootstrap/Container";
import { useState } from "react";
import MenuItem from "./menuItem";
import { useDispatch, useSelector } from "react-redux";
import { Products, Product } from "../../types";



const Menu = () => {
  
  const dispatch = useDispatch()
  const products = useSelector((state: Products)=> state.products)

  return (
    <>
      <Container>
        <div style = {{gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr) )" , display: "grid" , gap:"10px"}}>
          {products.map((product) => (
            <MenuItem key={product?.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Menu;
