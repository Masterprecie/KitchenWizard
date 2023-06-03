import React from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-footer font-semibold">
      <div className="footer-head">
        <h2 className="text-orange-600 text-4xl font-semibold">
          Kitchen<span className="text-green-600 text-4xl">Wizzard</span>
        </h2>
        <p>Share what you cook and tags</p>
        <p>us in</p>
        <div className="flex items-center justify-center md:justify-start gap-10 mt-5">
          <a href="#">
            <BsInstagram size={30} className="text-orange-700" />
          </a>
          <a href="#">
            <BsFacebook size={25} className="text-cyan-600" />
          </a>
          <a href="#">
            <BsTwitter size={30} className="text-cyan-500" />
          </a>
        </div>
        <p className="pt-5 text-xs">
          Copyrights &#169;2023
          <span> </span>
          <span className="text-sm font-semibold">
            Kitchen Wizzard</span>
        </p>
      </div>
      <div className="footer-body">
        <div className="">
          <a href="">About Us</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Policy</a>
        </div>
        <div className="">
          <a href="">Contact Us</a>
          <a href="">Blog</a>
        </div>
        <div className="">
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
          <a href="">Cooking & Tips</a>
        </div>
      </div>
    </footer>
  );
}
