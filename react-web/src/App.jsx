import React from "react";
import "./app.css";
import { Navbar, Footer } from "./components";
import { About, Header, Contact, Work } from "./containers";
import { useRef } from "react";

function App() {
  const homeSection = useRef();
  const aboutSection = useRef();
  const workSection = useRef();
  const contactSection = useRef();
  return (
    <div className="App">
      <Header goToSection={aboutSection} refSection={homeSection} />
      <Navbar
        goToSection={[homeSection, aboutSection, workSection, contactSection]}
      />
      <div className="content__container">
        <About refSection={aboutSection} />
        <Work refSection={workSection} />
        <Contact refSection={contactSection} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
