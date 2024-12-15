import { Container } from "react-bootstrap";
import banner from "../../../assets/images/banner (1).png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Container>
        <figure className="position-relative">
          <img
            src={banner}
            alt="banner"
            className="img img-fluid gradient-overlay "
          />
          <figcaption>
            <h1 className="h1 ">Computer Engineering</h1>
            <p className="p">142,765 Computer Engineers follow this</p>
          </figcaption>
        </figure>
      </Container>
    </div>
  );
};

export default Banner;
