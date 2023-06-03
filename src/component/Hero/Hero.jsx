import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/loginBg.png";
import SearchForm from "./SearchForm";
export default function Hero() {
  return (
    <div className="Hero bg-hero">
      <div className="Hero-Main">
        <p>
          Find Your Daily <span>Meal</span>
        </p>
        <p>
          Here And <span>Enjoy</span>
        </p>
        <p>Explore variety of Cusines and add</p>
        <p>it your meal plain enjoy eating</p>
        <SearchForm />
        <p className="Explore rule">
          Explore <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </p>
      </div>
      <img src={HeroImage} alt="hero-image" className="Hero-Image" />
    </div>
  );
}
