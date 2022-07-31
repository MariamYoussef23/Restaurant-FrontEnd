import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


const Buttons = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3 nav-justified"
      >
        <Tab eventKey="Popular" title="Popular"></Tab>
        <Tab eventKey="Pizzas" title="Pizzas"></Tab>
        <Tab eventKey="Sides" title="Sides"></Tab>
        <Tab eventKey="Drinks" title="Drinks"></Tab>
        <Tab eventKey="Dessert" title="Dessert"></Tab>
      </Tabs>
    </Container>
  )
};
export default Buttons;
