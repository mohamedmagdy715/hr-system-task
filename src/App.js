import React from "react";

import './App.css';
import Employees from "./components/Employees/Employees";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App container">
      <Header />
      <Employees />
    </div>
  );
}

export default App;
