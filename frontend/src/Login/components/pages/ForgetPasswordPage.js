import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const ForgetPasswordPage = () => {
  return (
    <div className="text-center m-5-auto">
      <h1 className="text-3xl">Reset your password</h1>
      <form action="/login">
        <p>
          <label id="reset_pass_lbl">Email address</label>
          <br />
          <input className="input" type="email" name="email" required />
        </p>
        <p>
          <button id="sub_btn" className="mt-4">
            Send password reset email
          </button>
        </p>
      </form>
      <footer>
        <p>
          Dont have an account?{" "}
          <Link to="/register" className="border-black border-b-2">
            Create an account
          </Link>
          .
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
};

export default ForgetPasswordPage;
