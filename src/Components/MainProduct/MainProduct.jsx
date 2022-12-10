import React, { useEffect, useState } from "react";
import "./MAinProduct.css";
import { Link, useParams } from "react-router-dom";
import { productDatas } from "./../../data";
import { RiArrowLeftSFill } from "react-icons/ri";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { productOfMain } from "./../../data";
import Form from "react-bootstrap/Form";

export default function MainProduct() {
  let param = useParams();

  let [mainData, setMainData] = useState(productDatas);

  let [mainMiniData, setMainMiniData] = useState(productOfMain);

  useEffect(() => {
    setMainData(mainData.find((item) => item.id == param.productId));
  }, []);

  return (
    <section className="container-fluid container-allMain">
      <section className="row justify-content-center">
        <div className="col-12 p-3 m-3 text-light back-page">
          <Link to={"/products"} className="back-page-icon">
            <RiArrowLeftSFill />
            BACK TO PRODUCTS
          </Link>
        </div>

        <div className="col-12 px-5 py-2 my-2  row justify-content-center align-items-center">
          <div className="col-9 my-2 p-2 align-center col-md-4 ">
            <img
              src={`/${mainData.img}`}
              alt={mainData.title}
              className="img-fluid"
            />
          </div>

          <div className="col-12 my-2 p-2 col-md-8 ">
            <h1 className="text-light title-main p-3">{mainData.title}</h1>

            <p className="description-p text-light">{mainData.description}</p>

            <section className="row">
              <div className="col-12 col-md-6 my-3">
                <label
                  htmlFor="dropdown-basic"
                  className="text-light text-center p-3 d-block label-drop"
                >
                  AVAILABLE FLAVORS
                </label>

                <Form.Select aria-label="Default select example" className="dropdown w-100">
                  <option className="op-style">{mainData.title}</option>
                  <option value="1" className="op-style">SPRITE® LYMONADE</option>
                  <option value="2" className="op-style">SPRITE® TROPICAL MIX</option>
                  <option value="3" className="op-style">Something else</option>
                </Form.Select>

               
              </div>
              <div className="col-12 col-md-6 my-3">
                <label
                  htmlFor="dropdown-basic"
                  className="text-light text-center p-3 d-block label-drop"
                >
                  AVAILABLE SIZES
                </label>

                <Form.Select aria-label="Default select example" className="dropdown w-100">
                  <option className="op-style">12 fl oz, 12 pack</option>
                  <option value="12 fl oz, 20 pack" className="op-style">12 fl oz, 20 pack</option>
                  <option value="12 fl oz, 24 pack" className="op-style">12 fl oz, 24 pack</option>
                  <option value="12 fl oz, 35 pack" className="op-style">12 fl oz, 35 pack</option>
                </Form.Select>

              </div>
            </section>

            <button className="btn btn-success px-5 d-block btn-shop">
              SHOP NOW
            </button>
          </div>
        </div>

        <section className="row col-9 my-2 p-2">
          <section className="col-12">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Details">
                <p className="text-light parag-detail p-2">{mainData.par1}</p>
                <p className="text-light parag-detail p-2">{mainData.par2}</p>
                <p className="text-light parag-detail p-2">{mainData.par3}</p>
              </Tab>
              <Tab
                eventKey="profile"
                title="Nutrition Facts"
                className="Nutrition"
              >
                <section className="row justify-content-center align-items-center">
                  <section className="col-10 col-md-4">
                    <img
                      src={`/${mainData.Factimg}`}
                      alt=""
                      className="img-fluid"
                    />
                  </section>
                  <section className="col-10 col-md-8">
                    <p className="text-light parag-fact p-2">
                      {mainData.factDetail}
                    </p>
                  </section>
                </section>
              </Tab>
            </Tabs>
          </section>
        </section>

        <section className="row mt-2 justify-content-evenly">
          {mainMiniData.map((item) => (
            <img
              src={`/${item.img}`}
              alt={item.title}
              className="img-fluid col-5 col-md-3 mx-0 my-4"
            />
          ))}
        </section>
      </section>
    </section>
  );
}
