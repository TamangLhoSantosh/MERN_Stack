import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to the Home section.</p>
      </section>
      <section id="about">
        <h1>About</h1>
        <p>Learn more About us.</p>
      </section>
      <section id="services">
        <h1>Services</h1>
        <p>Discover our Services.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>Get in touch with us.</p>
      </section>
    </div>
  );
}

export default App;
