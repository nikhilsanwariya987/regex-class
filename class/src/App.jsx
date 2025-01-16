import React from "react";
import Nav from "./compontes/Nav";
import Main from "./compontes/Main";
import SideBar from "./compontes/SideBar";

function App() {
  return (
    <>
      <Nav />
      <div className="flex">
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
