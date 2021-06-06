import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import ProgressCircle from "../components/ProgressCircle";

const AboutUs = () => {
  return (
    <>
      <Header title="About Us" breadcum={true} />
      <About />
      <Services />
      <Testimonial />
      <ProgressCircle />
    </>
  );
};

export default AboutUs;
