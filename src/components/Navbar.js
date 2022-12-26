import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

// import Offcanvas from "react-bootstrap/Offcanvas";
// import { FaBars, FaHome, FaFile } from "react-icons/fa";
// import "animate.css";

const SiteNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar-main">
      <Container fluid className="navbar-main_container">
        <Navbar.Brand href="/" className="navbar-main_brand">
          Nima Fox
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-main_btn"
          aria-controls="navbarSupportedContent"
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Link className="nav-item navbar-main_links" to="/">
              HOME
            </Link>
            <Link className="nav-item navbar-main_links" to="/about">
              ABOUT
            </Link>
            <Link className="nav-item navbar-main_links" to="/projects">
              PROJECTS
            </Link>
            <Link className="nav-item navbar-main_links" to="/contact">
              CONTACT
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
