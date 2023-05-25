import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/loginBg.png";

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
        <form class="form-page" action="">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
        <p className="Explore rule">
          Explore <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </p>
      </div>
      <img src={HeroImage} alt="" className="Hero-Image" />
    </div>
  );
}
