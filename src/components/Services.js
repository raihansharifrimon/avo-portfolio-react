import React from "react";
import {BsBriefcase, BsDisplay, BsPencilSquare} from "react-icons/bs";

const Services = () => {
  const [state] = React.useState([
    {
      id: 1,
      icon: <BsBriefcase />,
      heading: "Digital Marketing",
      text: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
    },
    {
      id: 2,
      icon: <BsDisplay />,
      heading: "Web & App Development",
      text: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
    },
    {
      id: 3,
      icon: <BsPencilSquare />,
      heading: "Graphic Design",
      text: "Tempore corrupti temporibus fuga earum asperiores fugit laudantium.",
    },
  ]);

  return (
    <div className="service">
      <div className="container">
        <div className="row">
          {state.map((item, index) => (
            <div className="col-4 px-15" key={index}>
              <div className="service__section">
                <div className="service__section-icon">
                  {item.icon}
                </div>
                <div className="service__section-heading">
                  <h6>{item.heading}</h6>
                </div>
                <div className="service__section-text">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
