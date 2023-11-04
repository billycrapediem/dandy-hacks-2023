import React, { Component } from 'react';

import NavBar from "./modules/NavBar";
import SideBar from "./modules/SideBar";
import "../components/load-in.css"
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
      content=(
      <div className="loading-screen">
      </div>
      );
    } else {
      // Render your main content once data has loaded
     content=(<div>
      <NavBar />
      <div style={{ display: "flex", height: "100vh" }}>
        <SideBar />
        <div> hello</div>
      </div>
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
