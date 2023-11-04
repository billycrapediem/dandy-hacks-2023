import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./modules/NavBar";
import SideBar from "./modules/SideBar";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import { Container, Row, Col } from "react-bootstrap";
import "./utils/utilities.css";


// set up the app, side bar, and routes
// side bar is on the left take 30% width, routes are on the right take 70% width
const App = () => {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row >
          <Col xs={2} id="sidebar-wrapper" className="sidebar">
            <SideBar />
          </Col>
          <Col id="page-content-wrapper" className="test">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
