import Container from "react-bootstrap/Container";
import { useState } from "react";
import MenuItem from "./menuItem";


const Menu = () => {
  const [menu, setMenu] = useState([
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
    {
      id: 4,
      name: "vegetarian",
      type: "pizza",
      ingredients: ["red Sauce", "vegies"],
      price: 100,
      popular: false,
    },
    {
      id: 5,
      name: "mushroom",
      type: "pizza",
      ingredients: ["red Sauce", "mushrooms", "olives"],
      price: 100,
      popular: false,
    },
    {
      id: 6,
      name: "meat Lovers",
      type: "pizza",
      ingredients: ["red Sauce", "meat", "peppers"],
      price: 100,
      popular: false,
    },
    {
      id: 7,
      name: "chicken bbq",
      type: "pizza",
      ingredients: ["bbq Sauce", "chicken", "olives"],
      price: 100,
      popular: false,
    },
    {
      id: 8,
      name: "Fries",
      type: "side",
      price: 100,
      popular: true,
    },
    {
      id: 9,
      name: "Wedges",
      type: "side",
      price: 100,
      popular: true,
    },
    {
      id: 10,
      name: "Green Salad",
      type: "side",
      price: 100,
      popular: true,
    },
    {
      id: 11,
      name: "Cola",
      type: "Drink",
      price: 100,
      popular: true,
    },
    {
      id: 12,
      name: "Sprite",
      type: "Drink",
      price: 100,
      popular: true,
    },
    {
      id: 13,
      name: "Chocolate Cake",
      type: "Dessert",
      price: 100,
      popular: true,
    },
  ]);
  return (
    <>
      <Container>
        <div style = {{gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr) )" , display: "grid" , gap:"10px"}}>
          {menu.map((item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Menu;
