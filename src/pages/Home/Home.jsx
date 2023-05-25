import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";
import Hero from "../../component/Hero/Hero";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Link to="/login">Go to Login</Link> <br />
      <Link to="/register">Go to Register</Link>
    </div>
  );
};

export default Home;
