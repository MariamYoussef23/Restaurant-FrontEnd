import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import pizza from "../images/main-pizza.png";
import Intro from "../components/homeComps/intro";
import Menu from "../components/homeComps/menu";
import Buttons from "../components/homeComps/buttons";

// import Cart from "../components/homeComps/cart"
const Home = () => {
  return (
    <div >
      <Intro />
      <div className="w-75 mh-75 p-5 " style={{marginLeft:"12%"}}>
        <Buttons />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
