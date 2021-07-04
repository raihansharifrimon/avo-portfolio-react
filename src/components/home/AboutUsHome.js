import React from "react";
import { SiCoderwall } from "react-icons/si";
import { IoColorFillOutline, IoMedalOutline, IoFlashOutline } from "react-icons/io5";

const AboutUsHome = () => {
  return (
    <section className="aboutUs">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="aboutUs__left">
              <div className="row">
                <div className="col-5 px-15">
                  <div className="aboutUs__left-img1">
                    <img
                      className="img-fluid"
                      src="/images/aboutUs/1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-7 px-15">
                  <div className="aboutUs__left-img2">
                    <img
                      className="img-fluid"
                      src="/images/aboutUs/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="aboutUs__left-img3">
                    <img
                      className="img-fluid"
                      src="/images/aboutUs/2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="offset-1 aboutUs__right">
              <div className="aboutUs__right-content">
                <div className="aboutUs__right-subtitle">
                  <SiCoderwall className="icon" />
                  <h6>About Us</h6>
                </div>
                <h2 className="aboutUs__right-h2">
                  We are more than just a digital agency.
                </h2>
                <p className="aboutUs__right-text">
                  We are AVO. We create award-winning websites, remarkable
                  brands and cutting-edge apps.Nullam imperdiet, sem at
                  fringilla lobortis, sem nibh fringilla nibh, id gravida mi
                  purus sit amet erat. Ut dictum nisi masvitp
                </p>

                <div className="aboutUs__right-iconboxs">
                  <div className="aboutUs-iconbox">
                    <IoFlashOutline className="aboutUs-iconbox-icon" />
                    <h5 className="aboutUs-iconbox-h5">
                      Pixel
                      <br />
                      Perfect
                    </h5>
                  </div>
                  <div className="aboutUs-iconbox">
                    <IoColorFillOutline className="aboutUs-iconbox-icon" />
                    <h5 className="aboutUs-iconbox-h5">
                      Creative
                      <br />
                      Design
                    </h5>
                  </div>
                  <div className="aboutUs-iconbox">
                    <IoMedalOutline className="aboutUs-iconbox-icon" />
                    <h5 className="aboutUs-iconbox-h5">
                      High
                      <br />
                      Perfomace
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHome;
