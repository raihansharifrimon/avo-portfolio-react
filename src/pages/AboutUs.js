import React from "react";
import About from "../components/aboutUs/About";
import Header from "../components/Header";
import Services from "../components/aboutUs/Services";
import Testimonial from "../components/aboutUs/Testimonial";
import ProgressCircle from "../components/aboutUs/ProgressCircle";

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
