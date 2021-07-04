import React from "react";
import {Link} from "react-router-dom";
import { IoColorFillOutline, IoTvOutline, IoBarChartOutline } from "react-icons/io5";

function Services() {

  const [services] = React.useState([
    {
      id: 1,
      title: 'Graphic Design',
      text: 'Tempore corrupti temporibus fuga earum asperiores fugit laudantium',
      icon: <IoColorFillOutline className="services__content-item-icon" />,      

    },
    {
      id: 2,
      title: 'Web & Mobile Design',
      text: 'Tempore corrupti temporibus fuga earum asperiores fugit laudantium',
      icon: <IoTvOutline className="services__content-item-icon" />,      

    },
    {
      id: 3,
      title: 'Social media Marketing',
      text: 'Tempore corrupti temporibus fuga earum asperiores fugit laudantium',
      icon: <IoBarChartOutline className="services__content-item-icon" />,      

    }
  ])

  return (
    <div className="container">
      <div className="services">
        <div className="services__title">
          <h6 className="services__title-sub">Best features</h6>
          <h2 className="services__title-h2">Services.</h2>
        </div>
        <div className="services__content">
          <div className="row">
            <div className="col-3">
              <div style={{backgroundImage: `url('/images/aboutUs/4.jpg')`}} className="services__content-item services__content-one">
                <h2 className="services__content-one-h2">
                  Best of <br /> our features
                </h2>
                <Link to="/" className="services__content-one-btn btn">
                  See all services
                </Link>
              </div>
            </div>
            
            {
              services.map( service => (
                <div className="col-3" key={service.id}>
                <div className="services__content-item">
                  {service.icon}
                  <h2 className="services__content-item-h2">
                    {service.title}
                  </h2>
                  <div className="services__content-item-p">
                    {service.text}
                  </div>
                </div>
              </div>
              )
              
              )
            }
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
