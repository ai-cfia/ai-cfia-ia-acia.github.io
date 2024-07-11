import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// Custom Arrow components
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    style={{ right: "10px", zIndex: "1"}}
    onClick={onClick}
    className={`arrow ${className}`} >
          <AiOutlineArrowRight class="arrows" style={{color:"white"}}/>
        </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    style={{ left: "10px", zIndex: "1"}}
     onClick={onClick}
     className={`arrow ${className}`} >
          <AiOutlineArrowLeft class="arrows" style={{color:"white"}}/>
        </div>
  );
}

const Carousel = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} style={{ position: 'absolute', textAlign: 'center',  }}>
          <img src={image.src} alt={image.alt || `Slide ${index}`} style={{ display: 'block', margin: '0 auto' }} />
          <h1>{image.title}</h1> {/* Title text for each image */}
          <p>{image.text}</p> {/* Paragraph text for each image */}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
