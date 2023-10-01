import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className=" navColor">
    <Container>
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Link to="/" className="ms-3 text-decoration-none letraColor" ><i class="fa-solid fa-house pr-3"></i> Home </Link>
        <Link to="/contacto" className="ms-3 text-decoration-none letraColor" ><i class="fa-solid fa-book"></i> Contacto </Link>          
        </Nav>
        <Nav>
          <Nav.Link eventKey={2} className='letraColor'>
            Happy Cake <i class="fa-solid fa-cake-candles ml-2"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation