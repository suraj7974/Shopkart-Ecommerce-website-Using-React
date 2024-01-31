import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="./images/login__logo.png" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
            <h5>E-mail</h5>
            <input type="text" />

            <h5>Password</h5>
            <input type="password" />

            <button className="login__signInButton">Sign In</button>
            <p>This is just a project for learning purpose its not a actuall website for buying products. Thankyou!!</p>
            <button className="login__registerButton">Create Your Account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
