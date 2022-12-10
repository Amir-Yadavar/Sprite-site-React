import React from "react";
import Form from "react-bootstrap/Form";
import "./Modal.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { BsSearch } from "react-icons/bs";

export default function Modal() {
  return (
    <>
      <section className="row p-2 m-0 bg-dark justify-content-center">
        <div className="col-10 col-lg-2 m-2 border-lg border-lg-success p-2">
          <img src="img/buynow/11963027.jpg" alt="" className="img-fluid" />
        </div>

        <div className="col-12 col-lg-4 my-3">
          <label
            htmlFor="dropdown-basic"
            className="text-light text-center p-3 d-block label-drop"
          >
            BRAND :
          </label>

          <Form.Select
            aria-label="Default select example"
            className="dropdown w-100"
          >
            <option className="op-style">SPRITE</option>
            <option value="1" className="op-style">
              SPRITE® LYMONADE
            </option>
            <option value="2" className="op-style">
              SPRITE® TROPICAL MIX
            </option>
            <option value="3" className="op-style">
              Something else
            </option>
          </Form.Select>
        </div>

        <div className="col-12 col-lg-4 col-xl-2 my-3">
          <label
            htmlFor="dropdown-basic"
            className="text-light text-center p-3 d-block label-drop"
          >
            Flover :
          </label>

          <Form.Select
            aria-label="Default select example"
            className="dropdown w-100"
          >
            <option className="op-style">SPRITE</option>
            <option value="1" className="op-style">
              SPRITE® LYMONADE
            </option>
            <option value="2" className="op-style">
              SPRITE® TROPICAL
            </option>
          </Form.Select>
        </div>
        <div className="col-12 col-lg-4 col-xl-2 my-3">
          <label
            htmlFor="dropdown-basic"
            className="text-light text-center p-3 d-block label-drop"
          >
            SIZE :
          </label>

          <Form.Select
            aria-label="Default select example"
            className="dropdown w-100"
          >
            <option className="op-style">2 LITERS</option>
            <option value="1" className="op-style">
              12 fl oz, 12 pack
            </option>
            <option value="2" className="op-style">
              12 fl oz, 24 pack
            </option>
            <option value="2" className="op-style">
              12 fl oz, 32 pack
            </option>
          </Form.Select>
        </div>
      </section>
      <div className="bg-secondary col-12 text-light p-2 alert-modal">
        Can’t find your favorite beverage? We are working on it! Please check
        back later as we are working hard to ensure that our products are always
        available, both online and in your local store. Thank you for your
        understanding during this unprecedented time.
      </div>

      <section className="row bg-success justify-content-between p-3 m-0">
        <span className="col-6 col-md-4 p-2 text-light">FIND ONLINE</span>
        <span className="col-6 col-md-4 p-2 text-light">FIND NEARBY</span>

        <div className="col-12 col-md-4">
          <InputGroup className="mb-3 font-tahoma">
            <Form.Control
              placeholder="Berlin, BE"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="bg-secondary" id="button-addon2">
              <BsSearch />
            </Button>
          </InputGroup>
        </div>
      </section>

      <section className="row bg-light justify-content-between align-items-center p-3 m-0">
        <section className="col-12 col-lg-6 ">
          <div className="d-flex justify-content-between align-items-center p-2 m-2">
            <img src="img/buynow/6150715.png" alt="" className="img-fluid" />
            <span className="font-tahoma">See website</span>
            <button className="btn btn-dark">View</button>
          </div>
          <div className="d-flex justify-content-between align-items-center p-2 m-2">
            <img src="img/buynow/7059.png" alt="" className="img-fluid" />
            <span className="font-tahoma">In Stoke</span>
            <button className="btn btn-success">BUY NOW</button>
          </div>
          <div className="d-flex justify-content-between align-items-center p-2 m-2">
            <img src="img/buynow/189.png" alt="" className="img-fluid" />
            <span className="font-tahoma">In Store</span>
            <button className="btn btn-dark">View</button>
          </div>
        </section>

        <section className="col-12 col-lg-6">
          <h2 className="text-center font-tahoma text-success">WE'RE SORRY</h2>
          <p className="text-center font-tahoma">We couldn't find any local</p>
          <p className="text-center font-tahoma">sellers for this product.</p>
        </section>
      </section>

      <section className="d-flex justify-content-between align-items-center p-3 m-0 bg-success">
        <p className="text-light font-tahoma">Price Spider</p>
        <p className="text-light font-tahoma">
          © PriceSpider 2005-2022 PriceSpider Terms of Service
        </p>
      </section>
    </>
  );
}
