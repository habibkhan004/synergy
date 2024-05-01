import cover1 from "./images/cover1.png";
import cover2 from "./gallary/12.jpeg";
import cover3 from "./gallary/4.jpeg";
import "./css/slider.css";

import { useState, useEffect } from "react";
let Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cover1, cover2, cover3];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <>
      <section id="home" className="section home-section">
        <div className="slider">
          <div
            className="slide"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
          >
            <div id="mainarea">
              <h2>Welcome to Software Synergy Solutions</h2>
              <p>
                We provide cutting-edge software solutions tailored to your
                business needs.
              </p>
              <a href="#footer" className="btn">
                Get in Touch
              </a>
            </div>
          </div>{" "}
          <div className="btnc">
            <button className="prev" onClick={prevSlide}>
              ❮
            </button>
            <button className="next" onClick={nextSlide}>
              ❯
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
