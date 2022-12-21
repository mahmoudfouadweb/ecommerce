import React, { useState } from "react";

import "./App.css";
import Navi from "./components/Navi";

import Right from "./components/Right";
import Preview from "./components/Preview";
function App() {
  return (
    <div className="App py-[28px] px-44 xl:min-w-[80%] mx-auto">
      <Navi />
      <div className="flex gap-20 items-center  justify-center mx-10">
        <Preview />
        <Right />
      </div>
    </div>
  );
}

export default App;
