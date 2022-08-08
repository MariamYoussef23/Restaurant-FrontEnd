import Dashboard from "../components/kitchenComps/dashboard";
import KitchenOrders from "../components/kitchenComps/kitchenOrders";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersApi } from "../utils/api";
import { Orders } from "../types";
// import "../dashboard.css";

const Kitchen = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state: Orders)=> state.orders)
    

    
    useEffect(()=> {
        getOrdersApi(dispatch)
    },[])

  return (
    <div style={{ marginTop: "60px" }}>
       <Row>
          <Col xs={2} className="main">
            <Dashboard />
          </Col>
          <Col xs={10} >
            <KitchenOrders  orders={orders} />
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
