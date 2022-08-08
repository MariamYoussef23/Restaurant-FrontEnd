import React from "react";
import { Container } from "react-bootstrap";
import { Props } from "../../types";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getOrdersApi, getProductsApi } from "../../utils/api";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { completeOrder } from "../../utils/api";

const OrderItem = ({ order }: Props) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Card className="mt-2">
        <Card.Header>order: {order?.id} </Card.Header>
        <Card.Body>
          <Card.Text>
            {order?.orderLines.map((orderLine) => {
              return (
                <div className="d-flex bd-highlight" key={Math.random()}>
                  <div className="p-2 w-75 bd-highlight text-start">
                    {orderLine.product.name}
                  </div>
                  <div className="p-2 flex-shrink-1 bd-highlight">
                    qty: {orderLine.quantity}
                  </div>
                </div>
              );
            })}
          </Card.Text>
          <Button
            variant="primary"
            onClick={async () => {
              await completeOrder(dispatch, order!.id);
              getOrdersApi(dispatch);
            }}
          >
            {order!.completed? 'completed' : 'click here when order is ready'}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default OrderItem;

{
  /* <Form.Check 
                type='checkbox'
                id='default-checkbox'
                label={`${orderLine.product.name} ${orderLine.quantity}`}
                /> */
}
