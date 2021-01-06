import React from "react";

const Header = () => {
  return (
    <div style={{ background: "black" }} id="header">
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse header"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link mr-5" href="/">
                HOME<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mr-5" href="/">
                ABOUT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mr-5" href="/">
                ROOMS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mr-5" href="/">
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mr-5" href="/">
                GALLERY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mr-5" href="/">
                SEE & DO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  mr-5" href="/">
                CONTACT
              </a>
            </li>
            <li>
              <a href="/" className="btn btn-lg" style={{ color: "Grey" }}>
                Book a Room
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
