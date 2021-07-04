import React from "react";
import {FaBehance, FaFacebookF, FaPinterestP, FaTwitter} from "react-icons/fa";
import SwiperCore, {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.css";
import Button from "../Button";

SwiperCore.use([Navigation, Autoplay]);

const Slider = () => {
  const [sliders] = React.useState([
    {
      id: 1,
      image: "/images/sliders/01.jpg",
      heading: "Orginal Soluations",
      text: "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",
      buttonText: "Learn More",
      buttonType: "outline",
      route: "/about",
    },
    {
      id: 2,
      image: "/images/sliders/02.jpg",
      heading: "Digital Soluations",
      text: "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",
      buttonText: "Look More",
      buttonType: "outline",
      route: "/home",
    },
    {
      id: 3,
      image: "/images/sliders/03.jpg",
      heading: "Unique brandStories",
      text: "If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration.",
      buttonText: "Contact",
      buttonType: "outline",
      route: "/contact",
    },
  ]);

  const [socialLinks] = React.useState([
    {id: 1, icon: <FaFacebookF />, url: "https://facebook.com"},
    {id: 2, icon: <FaTwitter />, url: "https://twitter.com"},
    {id: 3, icon: <FaPinterestP />, url: "https://pinterest.com"},
    {id: 4, icon: <FaBehance />, url: "https://behance.net"},
  ]);

  return (
    <>
      <Swiper
        tag="section"
        className="heroSlide"
        navigation
        autoplay
        spaceBetween={0}
        speed={500}
        loop
      >
        {sliders.map((slide) => (
          <SwiperSlide
            className="heroSlide__content"
            style={{backgroundImage: `url(${slide.image})`}}
            key={`slider-${slide.id}`}
          >
            <div className="heroSlide__info">
              <h1 className="heroSlide__info-h1">{slide.heading}</h1>
              <p className="heroSlide__info-p">{slide.text}</p>
              <Button
                text={slide.buttonText}
                type={slide.buttonType}
                route={slide.route}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ul className="social__links">
        {socialLinks.map((socialLink) => (
          <li className="social__links-item" key={socialLink.id}>
            <a href={socialLink.url}>{socialLink.icon}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Slider;
