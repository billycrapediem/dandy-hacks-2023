import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendar } from '@fortawesome/free-solid-svg-icons';
import UR_img from './ur.jpeg'; 
// function have two buttons, one for back to home page, one for go to calender page
function NavBar() {
  const logoStyle = {
    maxWidth: '50px', // Adjust the maximum width to your preference
    height: 'auto',    // This will maintain the aspect ratio
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <img src={UR_img} alt="logo" style={logoStyle}/>
        <Navbar.Brand href="#home">UR List</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">
          <FontAwesomeIcon icon={faHome} /> 
          </Nav.Link>
          <Nav.Link href="/calendar">
            <FontAwesomeIcon icon={faCalendar} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;