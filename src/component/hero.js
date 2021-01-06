import React from "react";
import heroImg from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <p className="hero-title">Ferofly</p>
      </div>
      <div className="d-flex justify-content-center">
        <p className="hero-subtitle">Magnify your Journey</p>
      </div>
      <div>
        <img src={heroImg} alt="" className="img-responsive" />
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <label className="mr-3">Check In</label>
              <input type="date" className="inputWidth" />
            </div>
            <div className="col-sm-12 col-lg-4">
              <label className="mr-3">Check Out</label>
              <input type="date" className="inputWidth" />
            </div>
            <div className="col-sm-12 col-lg-2">
              <label className="mr-3">Adult</label>
              <input type="number" min="0" max="10" className="inputWidth" />
            </div>
            <div className="col-sm-3 col-lg-2">
              <label className="mr-3">Kids</label>
              <input type="number" min="0" max="10" className="inputWidth" />
            </div>
            <div className="col-sm-12 col-lg-1">
              <button type="submit" className="btn btn-dark searchButton">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <p className="d-flex justify-content-center">ABOUT</p>
        <div className="container">
          <p className="p-lg-5">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
        </div>
      </div>
      <div className="about rooms d-flex justify-content-center mb-5">
        <div class="card mt-5 mb-3" style={{ width: "30rem" }}>
          <div class="card-body">
            <h5 class="card-title text-center">OUR ROOMS</h5>
            <p class="card-text mt-5">
              OUR ROOMS I'm a paragraph. Click here to add your own text and
              edit me. I’m a great place for you to tell a story and let your
              users know a little more about you.
            </p>
            <a
              href="/"
              class="btn d-flex justify-content-center mt-5"
              style={{ border: "2px solid black" }}
            >
              Book a room
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
