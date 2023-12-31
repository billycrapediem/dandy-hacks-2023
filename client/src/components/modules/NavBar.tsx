import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCubes ,faCalendar,faFlag } from '@fortawesome/free-solid-svg-icons';
import UR_img from '../src/ur.jpeg';
import './NavBar.css';
import '../utils/utilities.css';
// function have two buttons, one for back to home page, one for go to calender page
function NavBar() {
  console.log(UR_img);
  const logoStyle = {
    maxWidth: '50px', // Adjust the maximum width to your preference
    height: 'auto',    // This will maintain the aspect ratio
    margin: '10px',
  };
  function solid(arg0: string): import("@fortawesome/fontawesome-svg-core").IconProp {
    throw new Error('Function not implemented.');
  }

  return (
    <Navbar className='color' data-bs-theme="dark">
      <Container>
        <div>
          <img className="circular-image" src={UR_img} style={logoStyle}></img>
        </div>
        <Navbar.Brand className="u-bold setcolor text" href="#home">A clever todo list help you sort your calendar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">
            <FontAwesomeIcon icon={faHome} size="xl" />
          </Nav.Link>
          <Nav.Link href="/calendar">
            <FontAwesomeIcon icon={faCalendar} size="xl" />
          </Nav.Link>
        </Nav>
        <FontAwesomeIcon className='u-flex' icon={faFlag} bounce size="xl" />
        <FontAwesomeIcon className='u-flex' icon={faCubes} beat size="2xl" style={{color: "#fffff",}} />
      </Container>
    </Navbar>
  );
}

export default NavBar;