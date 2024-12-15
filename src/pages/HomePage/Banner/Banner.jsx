import banner from "../../../assets/images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <img src={banner} alt="" className="img " />
      <div>
        <h1 className="h1">Computer Engineering</h1>
        <p className="p">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Banner;
