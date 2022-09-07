import React from "react";
import "./app.css";
import { Navbar, Footer } from "./components";
import { Header, Contact, Work } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="header__container">
        <Header />
        <Navbar />
      </div>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
