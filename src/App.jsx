import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import PreLoader from "./components/PreLoader";
// import { useState } from "react";

const App = () => {

  return (
    <main className="max-w-7xl mx-auto relative">
    
    <PreLoader />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer/>
    </main>
  );
};

export default App;
