// import react module and useState hook
import React, { Component, useState } from "react";
import "./SignupComponent.css";
import RegisterImage from "../Images/RegisterImage.jpg";

export default function SignUp() {
  //  declare a state variable named email and a function named setEmail to update its value
  const [username, setusername] = useState("");
  // const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userType, setUserType] = useState("");
  // const [secretKey, setSecretKey] = useState("");
  // #####################################################
  // defines a function named handleSubmit
  // handles  submission forms for user registration, It makes a POST request to a server endpoint and handles the response based on the registration status. 18-46
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(username, email, password);

    fetch("http://localhost:8080/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    // this code creates a user registration which includes user details and submits them to a server endpoint for registration.
    <div
      className="register-container"
      style={{ backgroundImage: `url(${RegisterImage})` }}
      // style={{ backgroundImage: "url(./RegisterImage.jpg)" }}
    >
      <div className="image-section">
        {/* style={{ backgroundImage: "url('../Images/RegisterImage.jpg')" }} */}
        {/* <img src={RegisterImage} alt="Missing " /> */}
        {/* <div className="register-inner"> */}
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>

          {/* <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Admin
          </div>
          {userType == "Admin" ? (
            <div className="register-section">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}
 */}

          <div className="register-section">
            <label htmlFor="username">user name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              id="username"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>

          {/* <div className="register-section">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div> */}

          <div className="register-section">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="register-section">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
