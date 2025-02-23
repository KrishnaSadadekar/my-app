import React from "react";
import HeaderD from "./HeaderD";

const Course = () => {
  return (
    <div>
      <HeaderD/>
      <div className="intro-section single-cover" id="home-section">
        <div
          className="slide-1"
          style={{ backgroundImage: "url('images/img_2.jpg')" }}
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row justify-content-center align-items-center text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-section courses-entry-wrap"
        data-aos="fade"
        data-aos-delay="100"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card course h-100">
                <figure className="m-0">
                  <img
                    src="images/Springboot.png"
                    alt="Springboot Framework"
                    className="img-fluid course-img"
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "black" }}>
                    SPRINGBOOT FRAMEWORK
                  </h5>
                  <p className="card-text">
                    Spring Boot simplifies the process of building robust and
                    production-ready Java applications by providing a powerful,
                    opinionated framework.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card course h-100">
                <figure className="m-0">
                  <img
                    src="images/React.jpeg"
                    alt="React JS"
                    className="img-fluid course-img"
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "black" }}>
                    REACT JS
                  </h5>
                  <p className="card-text">
                    React JS is a powerful JavaScript library developed by
                    Facebook for building dynamic and interactive user
                    interfaces based on reusable components.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card course h-100">
                <figure className="m-0">
                  <img
                    src="images/course-1.jpg"
                    alt="Core Java"
                    className="img-fluid course-img"
                  />
                </figure>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "black" }}>
                    CORE JAVA
                  </h5>
                  <p className="card-text">
                    This course covers topics such as data types, control
                    structures, classes, inheritance, interfaces, and exception
                    handling.
                  </p>
                </div>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
