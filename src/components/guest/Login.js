import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderD from "./HeaderD";
import { doLogin } from "../../services/auth";

const Login = () => {
  const [LoginDetail, setLoginDetail] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginDetail({ ...LoginDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login details:", LoginDetail);

    if (
      LoginDetail.email === "admin@schoolofcoding.in" &&
      LoginDetail.password === "pass@123"
    ) {
      sessionStorage.setItem("email", LoginDetail.email);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <HeaderD />
      <main>
        <section className="intro-section" id="home-section">
          <div
            className="slide-1"
            style={{ backgroundImage: "url('images/hero_1.jpg')" }}
            data-stellar-background-ratio="0.5"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4">
                      <h1 data-aos="fade-up" data-aos-delay="100">
                        Student Management
                      </h1>
                      <p
                        className="mb-4"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime ipsa nulla sed quis rerum amet natus quas
                        necessitatibus.
                      </p>
                    </div>

                    <div
                      className="col-lg-5 ml-auto"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <form onSubmit={handleSubmit} className="form-box">
                        <h3 className="h4 text-black mb-4">Login here</h3>

                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            name="email"
                            required
                            value={LoginDetail.email}
                            onChange={handleChange}
                            title="Please enter a valid email address."
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            required
                            value={LoginDetail.password}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="submit"
                            className="btn btn-primary btn-pill"
                            value="Login"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
