import React from "react";
import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import CustomerLogo from "./CustomerLogo";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import CTA from "./CTA";
import Footer from "./Footer";

function App() {
  return (
    <main className="w-full min-h-screen h-full font-inter">
      <Nav />
      <Hero />
      <CustomerLogo />
      <Gallery />
      <Testimonial />
      <Pricing />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
