import React from "react";
import "./Creator.css";

export default function Creator({ img, name, link, description }) {
  return (
    <section className="card-creator p-0">
      <img src={img} alt="" className="img-fluid " />
      <h2 className="text-light py-1">{name}</h2>
      <a href="javascript:void(0)" className="text-success a-link d-block">
        {link}
      </a>
      <p className="text-light parag-card">{description}</p>
    </section>
  );
}
