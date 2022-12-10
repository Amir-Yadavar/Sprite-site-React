import React, { useState } from "react";
import "./Creators.css";
import Creator from "../../Components/Creator/Creator";
import { creators } from "./../../data";

export default function Creators() {
  const [dataCreators, setDataCreators] = useState(creators);

  return (
    <section className="container-fluid container-creators">
      <section className="row m-0 p-3">
        {dataCreators.map((creator) => (
          <Creator
            key={creator.id}
            img={creator.img}
            name={creator.name}
            link={creator.link}
            description={creator.description}
          />
        ))}
      </section>
    </section>
  );
}
