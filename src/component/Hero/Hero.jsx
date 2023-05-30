import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/fast.png";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-Main">
        <p>
          Find Your Daily <span>Meal</span>
        </p>
        <p>
          Here And <span>Enjoy</span>
        </p>
        <p>Explore variety of Cusines and add</p>
        <p>it your meal plain enjoy eating</p>
        <form className="form-page" action="">
          <input type="text" placeholder="Search for a recipe" name="search" />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <p className="Explore rule">
          Explore <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </p>
      </div>
      <img src={HeroImage} alt="hero-image" className="Hero-Image" />
    </div>
  );
}
