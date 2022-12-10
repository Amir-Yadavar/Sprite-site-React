import React, { useState } from "react";
import "./Products.css";
import Product from "../../Components/Product/Product";
import { Link } from "react-router-dom";
import { productDatas } from "./../../data";

export default function Products() {
  const [productData, setProductData] = useState(productDatas);

  return (
    <section className="container-fluid bg-dark">
      <section className="row">
        <section className="col-12 text-center">
          <h3 className="text-white my-3 title-products">EXPLORE SPRITE</h3>
          <button className="btn-product btn-product-big my-2">SHOP NOW</button>
        </section>
      </section>

      <section className="row mt-2 justify-content-evenly">
        {productData.map((item) => (
          <Link to={`/products/${item.id}`} className="col-5 col-md-3 mx-0 my-4" key={item.id}>
            <Product  title={item.title} img={item.img}/>
          </Link>
        ))}
      </section>
    </section>
  );
}
