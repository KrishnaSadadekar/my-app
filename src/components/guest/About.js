import React from "react";
import HeaderD from "./HeaderD";

const About = () => {
  return (
    <div>
      <HeaderD />
      <div className="intro-section single-cover" id="home-section">
        <div
          className="slide-1"
          style={{ backgroundImage: "url('images/img_2.jpg')" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row justify-content-center align-items-center text-center">
                  <h1 className="text-white my-4">About Us</h1>
                  <p className="text-white lead">
                    Welcome to <strong>School of Coding</strong>, where we
                    believe learning should be flexible, accessible, and
                    empowering. Our mission is to help you build the skills you
                    need to achieve your dreams in technology, all while
                    offering unmatched value and convenience.
                  </p>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
