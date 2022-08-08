import Dashboard from "../components/kitchenComps/dashboard";
import KitchenOrders from "../components/kitchenComps/kitchenOrders";
import  { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersApi } from "../utils/api";
import {  RootState } from "../types";
// import "../dashboard.css";

const Kitchen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    getOrdersApi(dispatch);
  }, []);


  const [filter, setFilter] = useState("notCompleted");
  const updateFilter = (text: string) => {
    setFilter(text);
  };

  const displayOrders = () => {
    switch (filter) {
      case "Completed":
        return orders.filter((order) => order.completed === true);
      case "notCompleted":
        return orders.filter((order) => order.completed === false);
    }
  };
  

  
  return (
    <div style={{ marginTop: "60px" }}>
      <Row>
        <Col xs={2} className="main">
          <Dashboard updateFilter= {updateFilter} />
        </Col>
        <Col xs={10}>
          <KitchenOrders orders={orders} displayOrders={displayOrders} />
        </Col>
      </Row>
    </div>
  );
};

export default Kitchen;

{
  /* <div style={{ paddingTop: "80px " }}>
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Dashboard />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <KitchenOrders />
          </Col>
        </Row>
      </Container>
    </div> */
}
