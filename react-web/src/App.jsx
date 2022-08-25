import React from "react";
import "./app.css";
import { Navbar } from "./components";
import { Header } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="header__container">
        <Header />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
