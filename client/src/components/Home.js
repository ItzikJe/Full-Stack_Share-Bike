import React from "react";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5  ">
              <h1 className="display-4 fw-border mb-4 text-center text-white">
                Share Bike - ברוכים הבאים ל
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident impedit nobis officia suscipit est velit sunt adipisci
                amet quasi cupiditate maxime qui consectetur omnis soluta,
                placeat nostrum in quis at! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Provident impedit nobis officia
                suscipit est velit sunt adipisci amet quasi cupiditate maxime
                qui consectetur omnis soluta, placeat nostrum in quis at!
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/contact"
                  className="btn btn-light me-4 rounded-pill px-4 py-2"
                >
                  Get Quote
                </NavLink>
                <NavLink
                  to="/service"
                  className="btn btn-outline-light me-4 rounded-pill px-4 py-2"
                >
                  Our Services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
