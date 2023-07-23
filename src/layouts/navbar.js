import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo from "../imagenes/chemical-logo-01.png";
import "./navbar.css";


const NavBarEjemplo = () => {
    return (
        <>
    <Navbar className="navBg" expand="md" >
      <Container>
        <Navbar.Brand as={Link} to='/'><img src={logo} alt="chemical-logo"  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/inicio' id="inicio" className="nav-link active">Inicio</Nav.Link>
            <Nav.Link as={Link} to='/noticias'>Noticias</Nav.Link>
            <Nav.Link as={Link} to='/discografia'>Discografia</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
        <Outlet></Outlet>
    </section>
        </>
    )

}

export default NavBarEjemplo;