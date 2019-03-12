import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { login, getUser } from "./ducks/reducer";
import { Link } from "react-router-dom";
import "./CSS/Login.css";
import NavBar from "./SubComponents/NavBar";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      login: true
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  register = () => {
    const { username, password } = this.state;
    axios.post("/api/register", { username, password }).then(res => {
      console.log(res.data);
    });
  };

  submit = e => {
    e.preventDefault();
    this.props
      .login(this.state.username, this.state.password)
      .then(this.setState({ username: "", password: "" }));
  };

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <NavBar />

        <div className="login">
          <div>
            Log in and start keeping track of your favorite songs!
          </div>
          <br />
          <input
            id="usernameLogin"
            type="text"
            name="username"
            placeholder=" Username..."
            onChange={this.updateInput}
          />
          <br />
          <input
            id="passwordLogin"
            type="password"
            name="password"
            placeholder=" Password..."
            onChange={this.updateInput}
          />
          
              </div>
              <button id="loginButton" onClick={this.submit}>
          <Link to="/userpage">
          Login </Link> 
            </button>
        <div className="register">Don't have an account? Register now!</div>
        <button className="registerButton" onClick={() => this.register()}>
          Register
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { login, getUser }
)(Login);
