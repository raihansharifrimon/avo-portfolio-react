import React from "react";
import {Link} from "react-router-dom";

function Services() {
  return (
    <div className="container">
      <div className="services">
        <div className="services__title">
          <h6 className="services__title--sub">Best features</h6>
          <h2 className="services__title-h2">Services.</h2>
        </div>
        <div className="services__content">
          <div className="row">
            <div className="col-3">
              <div className="services__content-item services__content--one">
                <h2 className="services__content--one-h2">
                  Best of our features
                </h2>
                <Link to="/" className="services__content--btn btn">
                  See all services
                </Link>
              </div>
            </div>
            <div className="col-3">
              <div className="services__content-item services__content--one">
                <h2 className="services__content--one-h2">
                  Best of our features
                </h2>
                <Link to="/" className="services__content--btn btn">
                  See all services
                </Link>
              </div>
            </div>
            <div className="col-3">
              <div className="services__content-item services__content--one">
                <h2 className="services__content--one-h2">
                  Best of our features
                </h2>
                <Link to="/" className="services__content--btn btn">
                  See all services
                </Link>
              </div>
            </div>
            <div className="col-3">
              <div className="services__content-item services__content--one">
                <h2 className="services__content--one-h2">
                  Best of our features
                </h2>
                <Link to="/" className="services__content--btn btn">
                  See all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
