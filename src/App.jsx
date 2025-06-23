import React from "react";
import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import ClientLogo from "./ClientLogo";

function App() {
  return (
    <main className="w-full min-h-screen h-full font-inter">
      <Nav />
      <Hero />
      <ClientLogo />
    </main>
  );
}

export default App;
