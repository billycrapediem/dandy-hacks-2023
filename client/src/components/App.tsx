import React, { Component } from 'react';

import NavBar from "./modules/NavBar";
import SideBar from "./modules/SideBar";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "../components/load-in.css"
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import WorkSapce from './pages/WorkSpace';
import DoneTasks from './pages/DoneTasks';

interface MyComponentState {
  isLoading: boolean;
}
let content;
class App extends Component<{}, MyComponentState> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    // Simulate an asynchronous operation (e.g., data fetching)
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  render() {

    if (this.state.isLoading) {
      // Render a loading message or spinner while data is loading
      content = (
        <div className="loading-screen">
        </div>
      );
    } else {
      // Render your main content once data has loaded
      content = (<div>
        <NavBar />
        <Container fluid>
          <Row >
            <Col style={{ flex: "1" }} id="sidebar-wrapper" className="sidebar">
              <SideBar />
            </Col>
            <Col style={{ flex: "10" }} id="page-content-wrapper">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="workspace" element={<WorkSapce />} />
                <Route path="done" element={<DoneTasks />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>);
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
