import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";
const Reference = () => {
  const [references, setReference] = useState([]);
  useEffect(() => {
    fetch("https://kkb75281.github.io/react_api/src/utils/reference.json")
      .then((response) => response.json())
      // .then(result => console.log(result.data.cssRefer))
      .then((result) => setReference(result.cssRefer))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["referece", "referece api"]} />
        <ReferCont references={references} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Reference;
