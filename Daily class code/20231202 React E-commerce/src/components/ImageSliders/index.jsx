import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

import banner1 from "../../Assets/images/banner-images/first.webp";
import banner2 from "../../Assets/images/banner-images/second.webp";
import banner3 from "../../Assets/images/banner-images/third.webp";
import banner4 from "../../Assets/images/banner-images/fourth.webp";

import "./style.css";

function ImageSliders() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="slider-image" src={banner1} text="First slide" />
          {/* <Carousel.Caption>
            <h3>Big Year End Sale</h3>
            <p>Grab the Year end Sale</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner2} text="Second slide" />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner3} text="Third slide" />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="slider-image" src={banner4} text="Third slide" />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default ImageSliders;
