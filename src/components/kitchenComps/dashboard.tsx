import React from "react";
import { Button, Row } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="min-vh-100 main">
      <div className="py-4">DASHBOARD</div>
      <Row>
        <Button
          className="my-5"
          style={{
            borderColor: "#303030",
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          Pending
        </Button>
      </Row>
      <Row>
        <Button
          style={{
            borderColor: "#303030",
            backgroundColor: "#303030",
            color: "white",
          }}
        >
          Completed
        </Button>
      </Row>
    </div>
  );
};

export default Dashboard;

{
  /* <Sidebar>
      <SidebarMenu bg="dark" variant="dark">
        <SidebarMenu.Brand href="#home">Dashboard</SidebarMenu.Brand>
        <SidebarMenu className="me-auto">
          <Button>Pending</Button>
          <Button>Completed</Button>
        </SidebarMenu>
      </SidebarMenu>
      </Sidebar> */
}
