import React from "react";
import Breakfast from "../assets/food.png";
import garden from "../assets/garden.png";
import housekeeping from "../assets/houseKeeping.png";
import pool from "../assets/pool.png";
import wifi from "../assets/wifi.png";
import dinning from "../assets/dinning.png";

const Service = () => {
  return (
    <div>
      <p className="text-center">OUR SERVICES</p>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img src={Breakfast} alt="" className="service-img " />
            <p className="text-center">Breakfast</p>
            <p className="text-center">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
            <img src={wifi} alt="" className="service-img " />
            <p className="text-center">Free Wifi</p>
            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <img src={garden} alt="" className="service-img " />
            <p className="text-center">Garden</p>
            <p className="text-center">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
            <img src={housekeeping} alt="" className="service-img " />
            <p className="text-center">Daily Housekeeping</p>
            <p className="text-center">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5">
            <img src={pool} alt="" className="service-img " />
            <p className="text-center">Pool</p>
            <p className="text-center">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
            <img src={dinning} alt="" className="service-img " />
            <p className="text-center">In-Room Dining Service</p>
            <p className="text-center">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
