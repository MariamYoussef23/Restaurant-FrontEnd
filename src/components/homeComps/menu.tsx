import Container from "react-bootstrap/Container";
import { useState } from "react";
import MenuItem from "./menuItem";
import { useDispatch, useSelector } from "react-redux";
import { Products, DisplayProducts, Product } from "../../types";

const Menu = ({displayProducts}: DisplayProducts) => {


  return (
    <>
      <Container>
        <div
          style={{
            gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr) )",
            display: "grid",
            gap: "10px",
          }}
        >
          {displayProducts().map((product: Product) => (
            <MenuItem  key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Menu;
