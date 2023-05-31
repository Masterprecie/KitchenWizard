import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import Hero from "../../component/Hero/Hero";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
