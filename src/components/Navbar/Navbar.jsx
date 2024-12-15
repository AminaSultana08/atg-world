import { IoIosSearch } from "react-icons/io";
import "./styles/custom.css";
import logo from "../../assets/images/logo.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light   bg-light">
      <div className=" container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand d-flex justify-content-around " href="/">
          <img src={logo} className="logo" alt="" />
        </a>

        {/* Search Input and Button */}
        <form className="d-flex ms-3">
          <button className="btn search-icon" type="submit">
            <IoIosSearch />
          </button>
          <input
            className="form-control me-2 search"
            type="search"
            placeholder="Search for your favorite groups in ATG"
            aria-label="Search"
          />
        </form>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create Account.<span className="text-primary">It's free!</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
