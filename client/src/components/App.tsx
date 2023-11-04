import React from "react";

import SideBar from "./modules/SideBar";

const App = () => {

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <SideBar />
      <h1>WELCOME TO QUICKPAY</h1>
    </div>
  );
};

export default App;
