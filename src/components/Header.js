import React from "react";
import {Link, useLocation} from 'react-router-dom';

const Header = ({title, breadcum}) => {
  let location = useLocation();

  const [state] = React.useState({
    heading: title,
    background: "/images/header-img.jpg",
    link1: "Home",
    link2: title
  });

  return (
    <div
      style={{backgroundImage: `url(${state.background})`}}
      className="header"
    >
      <div className="header__content">
        <h1 className="header__content-h1">{state.heading}</h1>

        {breadcum ? (
          <div className="header__content-links">
            <Link to="/" >{state.link1}</Link>
            <span className="header__content-span">/</span>
            <Link to={location.pathname}>{title}</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
