import React from "react";
import './Home.css'
import Header from "../../Components/Header/Header";
import ContentFirstHome from "../../Components/HomeMain/Content-1/ContentFirstHome";
import ContentSecondHome from "../../Components/HomeMain/Content-2/ContentSecondHome";

export default function Home() {
  return (
    <section className="container-home">
      <section>
        <Header/>
        <ContentFirstHome/>
        <ContentSecondHome/>
      </section>
    </section>
  );
}
