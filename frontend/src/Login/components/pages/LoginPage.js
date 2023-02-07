import { IconButton, InputAdornment} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import VisibilityIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffRounded";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="text-center m-5-auto">
      <h1 className="text-3xl">Sign in to us</h1>
      <form action="/home">
        <p>
          <label className="label">Username or email address</label>
          <br />
          <input className="input" type="text" name="first_name" required />
        </p>
        <p>
          <label className="label">Password</label>
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
        <p>
          <button id="sub_btn" type="submit" className="mt-3">
            Login
          </button>
        </p>
        <Link to="/forget-password">
          <div className="mt-4 text-gray-500">Forgot password?</div>
        </Link>
      </form>
      <footer className="grid">
        <p>
          Dont have an account? <Link to="/register" className="border-black border-b-2">Create an account</Link>.
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
