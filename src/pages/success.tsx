import checked from "../images/checked.png";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Success = () => {
  return (
    <Container>
      <Row className="min-vh-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Image src={checked} className='d-block p-5 m-5' />
        </Col>
      </Row>
    </Container>
  );
};

export default Success;
