import React from "react";
import { Container } from "react-bootstrap";
import { Order } from "../../types";
import OrderItem from "./orderItem";

const KitchenOrders = ({ orders, displayOrders}: { orders: Order[], displayOrders: Function }) => {
  console.log(orders);
  return (
    <Container>
      <div
        style={{
          gridTemplateColumns: "repeat( auto-fill, minmax(300px, 1fr) )",
          display: "grid",
          gap: "10px",
        }}
      >
        {displayOrders().map((order: Order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </div>
    </Container>
  );
};

export default KitchenOrders;
