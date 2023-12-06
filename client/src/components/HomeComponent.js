// On the top, I just import the react library and a background picture to this component called HomeComponent.

import React from "react";
// import "./HomeComponent.css";
import HomeImage from "../Images/HomeImage.jpg";
// import LoginImage from "./LoginImage.jpg";
// import ./HomeComponentimport background from "./img/placeholder.png";.css
// #####################################################
// Because this page just shows information, so I didn’t create any parameter or function,
// Just use return statement to define what this component will render to the
//  screen. So here shows the title of webpage, slogan, description. 
// And the last part is footer.

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <h1 className="display-5 fw-bold">
          The Scuba Diving Trip Planning Tool
        </h1>
        <div
          className="p-5 mb-4 bg-light rounded-3"
          style={{
            backgroundImage: `url(${HomeImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
          }}
        >
          <div className="container-fluid py-5">
            {/* <h1 className="display-5 fw-bold">The Scuba Diving Trip Planning Tool</h1> */}
            <h2 className="slogan">Explore Your Underwater Adventure</h2>
            <p></p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="col-md-8 fs-4">
              <h3>
                We offer a stunning service that you haven't experienced before.
              </h3>
              <h3>Take the opportunity to explore it now.</h3>
            </div>
            {/* <button className="btn btn-primary btn-lg" type="button">
                  See how it works.
                </button> */}
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h4>Save your time</h4>
              <p>
                Please select a dive region, and we will gladly recommend the
                best diving areas that match your preferences
              </p>
              {/* <h2>As a student</h2> */}
              {/* <p>
                    Students can register in courses they like. This website is for
                    practice purpose only, so please do not provide any personal
                    information, such as credit card numbers.
                  </p>
                  <button className="btn btn-outline-light" type="button">
                    Login or Register Now
                  </button> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h4>Experience the Wonders of Diving</h4>
              <p>
                Feel free to input the destination to get the map which shows
                dive spots.
              </p>
              {/* <h2>As an Instructor</h2>
                  <p>
                    You can become an instructor by registering as one, and start
                    making online courses. This website is for practice purpose
                    only, so please do not provide any personal information, such as
                    credit card numbers.
                  </p>
                  <button class="btn btn-outline-secondary" type="button">
                    Login or Register Now
                  </button> */}
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          2023 University of Birmingham MSc Computer Science Final Project.
          Created by Alice Chen
           {/* &copy; 2023 Alice Chen */}
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
