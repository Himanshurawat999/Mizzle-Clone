import React from "react";
import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import CustomerLogo from "./CustomerLogo";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";

function App() {
  return (
    <main className="w-full min-h-screen h-full font-inter">
      <Nav />
      <Hero />
      <CustomerLogo />
      <Gallery />
      <Testimonial />
    </main>
  );
}

export default App;
