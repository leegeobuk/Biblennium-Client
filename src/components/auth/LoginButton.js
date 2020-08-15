import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./LoginButton.module.css";

class LoginButton extends Component {
  state = {
    isLoggedIn: false
  }
  
  render() {
    const {isLoggedIn} = this.state;
    return (
      <Link to="/login">
        <button className={classes.login_button} type="button">
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </Link>
    );
  }
}

export default LoginButton;
