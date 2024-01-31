import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
};
const register = e => {
     e.preventDefault();

 }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="./images/login__logo.png" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onclick={signIn}
            type="submit"
            className="login__signInButton"
          >
            Sign In
          </button>
          <p>
            This is just a project for learning purpose its not a actuall
            website for buying products. Thankyou!!
          </p>
          <button onclick={register} className="login__registerButton">Create Your Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
