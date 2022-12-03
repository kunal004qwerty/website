import React, { useState } from "react";
import { Data } from "./Data";
import "../Style/Section.scss";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import Header from "./Header";
const Section = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  //   let length = slides.lenght;  // Not Working
  const length = Object.keys(slides).length; // OLD WAYS to do....
  // console.log(length);  // 3
  //   console.log(slides.length);  // 3

  return (
    <div>
      <section>
        <Header />
        <div className="buttons">
          <AiOutlineArrowLeft
            className="left-btn"
            onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
          />
          <AiOutlineArrowRight
            className="right-btn"
            onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
          />
        </div>

        <div className="content">
          <h1>Discover our Universe</h1>
          <button>discover</button>
          <button>read article</button>
        </div>

        <div className="slide">
          {Data.map((slide, index) => {
            return (
              <div
                className={index === current ? "slides active" : "slides"}
                key={index}
              >
                {index === current && <img src={slide} alt="" />}
                {/* {index === current && <img src={slide.image} alt="" />} */}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Section;
