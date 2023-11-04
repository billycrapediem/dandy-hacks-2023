import React from "react";

import NavBar from "./modules/NavBar";
import SideBar from "./modules/SideBar";

const App = () => {

  return (
    <div>
      <NavBar />
      <div style={{ display: "flex", height: "100vh" }}>
        <SideBar />
        <div> hello</div>
      </div>
    </div>
  );
};

export default App;
