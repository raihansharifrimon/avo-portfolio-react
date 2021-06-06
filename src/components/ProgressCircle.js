import React from "react";

const ProgressCircle = () => {
  const [state] = React.useState([
    {id: 1, data: 90, heading: 'Happy Client', subHeading: 'Project'},
    {id: 2, data: 80, heading: 'Development', subHeading: 'App'}
  ]);

  return (
    <div className="progressCircle">
      <div className="container">
        <div className="row">
          {state.map((item) => (
            <div className="col-3" key={item.id}>
              <div className="progressCircle__content">
                <svg
                  className="progressCircle__circle"
                  width="100"
                  height="100"
                >
                  <circle
                    className="progressCircle__circle-circle"
                    style={{strokeDashoffset: `${284 - (284 / 100) * item.data}`}}
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#75dab4"
                    strokeWidth="2"
                  />
                  <text
                    className="percentage"
                    fill="#662d91"
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    {item.data}%
                  </text>
                </svg>
                <div className="progressCircle__content-info">
                    <span className="circle-sub-heading">{item.subHeading}</span>
                    <h4 className="circle-heading">{item.heading}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
