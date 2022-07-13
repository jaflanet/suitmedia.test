import React from "react";
import "./imgSlider.css";
import img1 from "../../asset/bg.jpg";
import img2 from "../../asset/about-bg.jpg";

const ImgSlider = () => {
  return (
    <>
      <div class="slideshow-container">
        <div className="slideshow" data-transition="fade">
          <input
            type="radio"
            name="ss2"
            id="ss2-item-1"
            className="slideshow--bullet"
            checked="checked"
          />
          <div className="slideshow--item">
            <img src={img1} alt="gambar1" />
            <div className="slideshow--item--text">
              THIS IS A PLACE WHERE TECHNOLOGY <br />& CREATIVITY FUSED INTO
              DIGITAL CHEMISTRY
            </div>
            <label
              for="ss2-item-2"
              className="slideshow--nav slideshow--nav-previous"
            >
              slide
            </label>
            <label
              for="ss2-item-2"
              className="slideshow--nav slideshow--nav-next"
            >
              slide
            </label>
          </div>

          <input
            type="radio"
            name="ss2"
            id="ss2-item-2"
            class="slideshow--bullet"
          />
          <div className="slideshow--item">
            <img src={img2} alt="gambar2" />
            <div className="slideshow--item--text">
              WE DON'T HAVE THE BEST BUT WE HAVE <br />
              THE GREATES TEAM
            </div>
            <label
              for="ss2-item-1"
              class="slideshow--nav slideshow--nav-previous"
            >
              slide 1
            </label>
            <label
              for="ss2-item-1"
              className="slideshow--nav slideshow--nav-next"
            >
              slide 2
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgSlider;
