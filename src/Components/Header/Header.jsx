import React from "react";
import "./Header.css";
import "./HeaderLocal.css";

export default function Header() {
  return (
    <>
      <section className="container-header container-fluid">
        <button>Learn More</button>
      </section>
      <section className="container-fluid">
        <section className="row container-alert-header">
          <div className="col-12 col-md-6 border border-danger">
            Sign up to see how Sprite® is spicing up the holidays all season
            long.
          </div>
          <div className="col-12 col-md-6 border border-danger">
            <button>SIGN UP</button>
          </div>
        </section>
      </section>
    </>
  );
}
