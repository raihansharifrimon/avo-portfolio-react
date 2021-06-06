/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import {BsPlayFill} from "react-icons/bs";

const Testimonial = () => {
  const [video, setvideo] = React.useState(false);

  return (
    <>
      <div
        className="testimonial"
        style={{backgroundImage: `url("/images/header-img.jpg")`}}
      >
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="testimonial__content">
                <button
                  onClick={() => setvideo(true)}
                  className="btn testimonial__video-icon"
                >
                  <BsPlayFill />
                </button>
                <h1>So that's us. There's no other way to put it.</h1>
              </div>
            </div>
            <div className="col-5 offset-1">
              <div className="testimonial__card">
                <h6 className="testimonial__card-h6">Our happy clients</h6>
                <h2 className="testimonial__card-h2">What Client's Say</h2>
                <div className="testimonial__card-text">
                  <p>
                    Nulla metus metus ullamcorper vel tincidunt sed euismod nibh
                    volutpat velit class aptent taciti sociosqu ad litora.
                  </p>
                </div>
                <div className="testimonial__card-author">
                  <div className="author-img">
                    <img
                      src="/images/client/1.jpg"
                      className="img-fluid"
                      alt="client"
                    />
                  </div>
                  <div className="author-info">
                    <h5 className="author--name">Alex Regelman</h5>
                    <span className="author--title">Co-founder, Colabrio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {video ? (
        <div
          className="testimonial__video-modal"
          onClick={() => setvideo(false)}
        >
          <div className="testimonial__video-modal-content">
            <iframe
              src="https://player.vimeo.com/video/127203262?color=ffffff&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Testimonial;
