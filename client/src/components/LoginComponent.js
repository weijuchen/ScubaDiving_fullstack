import React, { Component, useState } from "react";
import LoginImage from "../Images/LoginImage.jpg";
import "./LoginComponent.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// This code defines a function named handleSubmit that handles the process of user login in a React component. It will send a login credentials to a server and communicates with a server API endpoint to authenticate the user and manage the login process.
// handles user login by sending login credentials to a server, receiving a response, and then managing the UI and token storage based on the response.12-40

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:8080/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        } else {
          alert("Something went wrong");
        }
      }); 
  }

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${LoginImage})` }}
    >
      {/* This code creates a user sign-in form with input fields for email and
      password, , and a submit button. It captures user
      login details and submits them for authentication to a server endpoint. */}
      <div className="image-section">
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>

          <div className="login-section">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-section">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-section">
            <div className="custom-control custom-checkbox">
              {/* <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label> */}
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/register">Register Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
