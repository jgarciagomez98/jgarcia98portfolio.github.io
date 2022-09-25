import React from "react";
import "./app.css";
import { Navbar, Footer } from "./components";
import { About, Header, Contact, Work } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="header__container">
        <Header />
        <Navbar />
      </div>
      <div className="content__container">
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
