import React from "react";
import image1 from "../assets/gallery1.jpeg";
import image2 from "../assets/gallery2.jpeg";
import image3 from "../assets/gallery3.jpeg";

const Gallery = () => {
  return (
    <div className="mb-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={image1} alt=" " width="340px" height="600px" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={image2} alt=" " width="340px" height="600px" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={image3} alt=" " width="340px" height="600px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
