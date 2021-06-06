import React from "react";


const About = () => {
  const [state] = React.useState({
    heading: "Who We Are ?",
    text: "We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sed.",
  });

  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="about__h4">{state.heading}</h4>
          </div>
          <div className="col-9">
            <div className="about__text">
              <p>{state.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
