import Banner from "../Banner/Banner";
import Navbar from "../../../components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import Post from "../Posts/Posts";

const Home = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Banner />
        <Post />
      </Container>
    </div>
  );
};

export default Home;
