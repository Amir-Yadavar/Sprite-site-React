import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="container-footer container-fluid">
      <section className="footer-top row m-0">
        <div className="col-12 col-lg-3 text-center my-3">
          <img src="img/sprite_nav_logo.png" alt="" />
        </div>

        <div className="col-12 col-lg-4 text-center my-3">
          <h6 className="text-light p-2">CONNECT WITH US</h6>
          <section className="col-12">
            <span>
              <FaFacebook />
            </span>
            <span>
              <AiFillTwitterCircle />
            </span>
            <span>
              <TfiYoutube />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <FaSpotify />
            </span>
          </section>
        </div>

        <div className="col-12 col-lg-5 text-center my-3">
          <h5 className="text-light p-3">PRODUCTS</h5>
          <span>SPRITE</span>
          <span>SPRITE ZERO SUGAR</span>
          <span>SPRITE LYMONADE</span>
          <span>SPRITE CHERRY</span>
          <span>SPRITE TROPICAL MIX</span>
          <span>SPRITE WINTER SPICED CRANBERRY</span>
          <span>SPRITE WINTER SPICED CRANBERRY ZERO SUGAR</span>
        </div>
      </section>

      <section className="footer-bottom row m-0">
        <p className="col-12 text-center my-4 my-lg-1 text-light">
          © 2022 The Coca-Cola Company. All Rights reserved
        </p>

        <div className="col-12 d-lg-flex text-center my-2  my-lg-1">
          <span>Support Center</span>
          <span>Terms</span>
          <span>Privacy</span>
          <span>Do Not Sell My Personal Information</span>
          <span>Sitemap</span>
          <span>sip & scan®</span>
          <span>Rules</span>
        </div>
      </section>
    </section>
  );
}
