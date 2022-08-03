import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import pizza from "../images/main-pizza.png";
import Intro from "../components/homeComps/intro";
import Menu from "../components/homeComps/menu";
import Buttons from "../components/homeComps/buttons";
import { useEffect, useState } from "react";
import { getProductsApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/products.actions";
import { Products } from "../types";

// import Cart from "../components/homeComps/cart"
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: Products) => state.products);

  const saveProducts = async () => {
    const products = await getProductsApi();
    dispatch(getProducts(products?.data.data));
    console.log(products?.data.data);
  };
  useEffect(() => {
    saveProducts();
  }, []);

  const [filter, setFilter] = useState("Popular");
  const updateFilter = (text: string) => {
    setFilter(text);
  };

  const displayProducts = () => {
    switch (filter) {
      case "Popular":
        return products.filter((product) => product.popular);
      case "Pizza":
        return products.filter((product) => product.category?.name === "Pizza");
      case "Sides":
        return products.filter((product) => product.category?.name === "Sides");
      case "Drinks":
        return products.filter(
          (product) => product.category?.name === "Drinks"
        );
      case "Desserts":
        return products.filter(
          (product) => product.category?.name === "Desserts"
        );
    }
  };
  console.log(displayProducts());

  return (
    <div>
      <Intro />
      <div className="w-75 mh-75 p-5 " style={{ marginLeft: "12%" }}>
        <Buttons updateFilter={updateFilter} />
        <Menu displayProducts={displayProducts} />
      </div>
    </div>
  );
};

export default Home;
