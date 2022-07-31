import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";
import pizza from "../../images/main-pizza.png";

const Intro = () => {
  return (
    <div className="main mt-2">
      <Container>
        <div className="d-flex justify-content-center align-items-center w-100" >
          <div className={"fw-bold fs-1 align-middle text-start"}>
            <h1> ENJOY OUR <br/> DELICIOUS <span style={{color:"#FF9200"}}>FOOD</span> </h1>
          </div>
          <div  style={{maxWidth:"500px"}} >
            <Image src={pizza}  className="image-fluid w-100 py-5" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
