import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <Navbar collapseOnSelect expand="md lg" variant="dark" className='header-nav'>
      <Container>
        <Navbar.Brand><Link className='link' to="/home"><b>TopJobs</b></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link><Link className='link' to='/home'>Home</Link></Nav.Link>
            <Nav.Link><Link className='link' to='/contactUs'>Contact Us</Link></Nav.Link>
            <Nav.Link><Link className='link' to='/jobs'>My Jobs</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;