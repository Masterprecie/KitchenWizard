import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/loginBg.png";
import { AiOutlineSearch } from 'react-icons/ai'
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
        <form className="form-page" action="">
          <div className="formInput">
            <input type="text" placeholder="Search for a recipe" name="search" />
            <div type="submit" className="searchIcon">
              {/* <i className="fa fa-search"></i> */}
              <AiOutlineSearch />
            </div>
          </div>
        </form>
        <p className="Explore rule">
          Explore <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </p>
      </div>
      <img src={HeroImage} alt="hero-image" className="Hero-Image" />
    </div>
  );
}
