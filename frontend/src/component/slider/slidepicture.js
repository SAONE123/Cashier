import React from "react";
import images from "./boxphoto";

import CustomSlider from "./slider";

import Styles from "./slidepicture.css";

export default function SlidePicture() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return (
            <>
              <div className="slideboxes">
                <img key={index} src={image.imgURL} alt={image.imgAlt} />;
                <a key={index}>{image.imgDesk}</a>
              </div>
            </>
          );
        })}
      </CustomSlider>
    </div>
  );
}
