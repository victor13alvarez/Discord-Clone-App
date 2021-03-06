import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, username, password, phoneNumber } = form;
    const URL = "https://chat-app-clone-with-react.herokuapp.com/auth";

    const {
      data: { token, userId, hashedPassword },
    } = await axios.post(`${URL}/${isSignup ? "signup" : "login"}`, {
      username,
      password,
      fullName,
      phoneNumber,
    });

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if (isSignup) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("hashedPassword", hashedPassword);
    }

    window.location.reload();
  };

  const switchMode = () => {
    setValidPassword(() => true);

    setForm((prevForm) => ({
      ...prevForm,
      fullName: "",
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    }));

    setIsSignup((prevIsSignUp) => !prevIsSignUp);
  };

  useEffect(() => {
    //here you will have correct value in form since this gets update in every render
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
                autoComplete="username"
                value={form.username}
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
                  value={form.phoneNumber}
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
                value={form.password}
                autoComplete="new-password"
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
                  value={form.confirmPassword}
                  autoComplete="new-password"
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
              <button disabled={!validPassword && isSignup}>
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
    </div>
  );
};

export default Auth;
