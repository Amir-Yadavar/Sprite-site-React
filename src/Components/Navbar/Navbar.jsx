import React, { useState } from "react";
import "./Navbar.css";
import "./NavbarLocal.css";
import { FaUserAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const [currentProduct, setCurrentProduct] = useState(false);
  const [currentCreator, setCurrentCreator] = useState(false);

  const [modalShow, setModalShow] = useState(false);

  const menuHandle = () => {
    setShowNav(!showNav);
  };

  const handleBeauty = () => {
    setShowNav(false);
  };

  const productSelect = () => {
    setCurrentProduct(true);
    setCurrentCreator(false);
    setModalShow(false);
  };
  const creatorsSelect = () => {
    setCurrentProduct(false);
    setCurrentCreator(true);
    setModalShow(false);
  };
  const logoSelect = () => {
    setCurrentProduct(false);
    setCurrentCreator(false);
    setShowNav(false);
    setModalShow(false);
  };

  const buynowHandler = () => {
    setCurrentProduct(false);
    setCurrentCreator(false);
    setShowNav(false);
    setModalShow(true);
  };

  console.log(currentProduct);

  return (
    <section className="container-fluid container-navbar">
      <section className="row h-100">
        <section className="col-4 col-md-2 d-md-none">
          <span onClick={menuHandle}>|||</span>
          <div className={showNav ? "show-nav-small" : "hidden-nav-small"}>
            <Link to={"/products"} onClick={handleBeauty}>
              <h5 className="h5-nav">PRODUCTS</h5>
            </Link>
            <Link to={"/creators"} onClick={handleBeauty}>
              <h5 className="h5-nav">THE CREATORS</h5>
            </Link>

            <h5 className="h5-nav" onClick={buynowHandler}>
              BUY NOW
            </h5>
            <section className="social-nav-small d-flex w-50 h-100">
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
        </section>

        <section className="col-4 col-md-2 col-xl-1">
          <Link to={"/"} className="link-img-nav" onClick={logoSelect}>
            <img src="img/sprite_nav_logo.png" alt="" className="img-fluid" />
          </Link>
        </section>

        <section className="col-md-4 col-xl-5 d-none d-md-flex justify-content-around">
          <Link
            to={"/products"}
            className={currentProduct ? "menu-navbar-select" : "menu-navbar"}
            onClick={productSelect}
          >
            <h5>PRODUCTS</h5>
          </Link>

          <Link
            to={"/creators"}
            className={currentCreator ? "menu-navbar-select" : "menu-navbar"}
            onClick={creatorsSelect}
          >
            <h5>THE CREATORS</h5>
          </Link>

          <Link className="menu-navbar" onClick={buynowHandler}>
            <h5>BUY NOW</h5>
          </Link>
        </section>

        <section className="col-md-4 col-xl-5 d-none d-md-flex">
          <section className="d-flex h-100">
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
        </section>

        <section className="col-4 col-md-1 col-xl-1">
          <FaUserAlt />
        </section>

        <section
          className={
            modalShow ? "container-modal row justify-content-center" : "d-none"
          }
        >
          <span className="background-dark"></span>

          <section className="container-body-modal col-12 col-lg-7 row p-0">
            <span className="logo-modal d-none d-lg-block">
              <img src="img/buynow/logo.png" alt="" className="img-fluid" />
            </span>

            <div
              className="text-end text-light bg-dark"
              onClick={() => setModalShow(false)}
            >
              <AiOutlineClose />
            </div>
            <section className="container-fluid p-0">
              <Modal />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
