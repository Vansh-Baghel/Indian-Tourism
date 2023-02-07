import { IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import VisibilityIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffRounded";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-center m-5-auto">
      <h1 className="text-3xl">Create your account</h1>
      <form action="/home">
        <p>
          <label className="label">Username</label>
          <br />
          <input
            className="input"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            type="text"
            name="first_name"
            required
          />
        </p>
        <p>
          <label className="label">Email address</label>
          <br />
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
        </p>
        <p>
          <label className="label" type={showPassword ? "text" : "password"}>
            Password
          </label>
          <br />
          <div className="flex">
            <input
              className="input relative"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
            <span>
              <InputAdornment className="absolute">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordVisibility}
                  className="relative bottom-0"
                  disableRipple
                >
                  {showPassword ? (
                    <VisibilityOffIcon
                      style={{
                        bottom: "-30px",
                        position: "absolute",
                        left: "-37px",
                      }}
                    />
                  ) : (
                    <VisibilityIcon
                      style={{
                        bottom: "-30px",
                        position: "absolute",
                        left: "-37px",
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            </span>
          </div>
        </p>
        <p className="m-3">
          <input
            className="input"
            type="checkbox"
            name="checkbox"
            id="checkbox"
            required
          />{" "}
          <span>
            I agree all statements in{" "}
            <span
              className="text-sky-700 cursor-pointer"
            >
              terms of service
            </span>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
};
export default RegisterPage;
