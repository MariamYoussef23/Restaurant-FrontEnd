import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";


const Buttons = ({updateFilter}: {updateFilter : Function}) => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="Popular"
        id="justify-tab-example"
        className="mb-3 nav-justified"
        onSelect={(eventKey) => updateFilter(eventKey)}
      >
        <Tab eventKey="Popular" title="Popular"></Tab>
        <Tab eventKey="Pizza" title="Pizza"></Tab>
        <Tab eventKey="Sides" title="Sides"></Tab>
        <Tab eventKey="Drinks" title="Drinks"></Tab>
        <Tab eventKey="Desserts" title="Desserts"></Tab>
      </Tabs>
    </Container>
  );
};
export default Buttons;
