import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import signInImage from "./../assets/images/signup.jpg";

const initialState = {
  fullName: "",
  username: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const switchMode = () => {
    setIsSignup((prevIsSignUp) => !prevIsSignUp);
  };

  useEffect(() => {
    //here you will have correct value in form since this gets update in every render
    console.log(form.password, form.confirmPassword);
    setValidPassword(form.password === form.confirmPassword);
  }, [form]);

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? "Sign Up" : "Sign In"} </p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="number"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {/* PROFILE PICTURE IF WANTED */}
            {/* {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatar">Profile Picture</label>
                <input
                  name="avatar"
                  type="image"
                  placeholder="Profile Picture"
                  onChange={handleChange}
                  required
                />
              </div>
            )} */}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                  style={{
                    color:
                      validPassword || form.confirmPassword === ""
                        ? "rgb(61, 79, 88)"
                        : "red",
                    background:
                      validPassword || form.confirmPassword === ""
                        ? ""
                        : "rgba(236, 149, 149, 0.300)",
                  }}
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button disabled={!validPassword}>
                {isSignup ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup
                ? "Already have an account?"
                : "Don't have an account yet?"}
              <span onClick={switchMode}>
                {isSignup ? "Sign In!" : "Sign Up!"}
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="auth__form-container_image">
        <img src={signInImage} alt="sign in"></img>
      </div> */}
    </div>
  );
};

export default Auth;
