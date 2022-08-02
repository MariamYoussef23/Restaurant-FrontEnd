import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ModalFooter from "react-bootstrap/ModalFooter";
import utensils from "../images/fork&knife.png";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="main ">
      <Container>
        <div className="d-flex py-1 ">
          <div className="fw-bold  ">
            OBSD <Image src={utensils} height={25} width={20}></Image>
          </div>
          <div className="text-center w-75 mx-auto">&copy; {new Date().getFullYear()} copyright</div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;




