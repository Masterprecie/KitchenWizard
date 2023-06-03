import React from "react";
import NavBar from "../../component/NavBar/NavBar";
import Hero from "../../component/Hero/Hero";
import Footer from "../../component/Footer/Footer";
import ListMeal from "../../component/apiData/ListMeal";


const Home = () => {

  return (
    <div>
      <NavBar />
      <Hero />
      <ListMeal />
      <Footer />
    </div>
  );
};

export default Home;
