import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { login } from "./ducks/reducer";
import {Link} from "react-router-dom"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      login: true
    };
  }

  register = () => {
    const { username, password } = this.state;
    axios.post("/api/register", { username, password }).then(res => {
      console.log(res.data);
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password)
    // .then(
    //   this.setState({username: "", password: ""}))
  }

  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
    
      <div>  
        <div>
          <input type="text" name="username" onChange={this.updateInput} />
          <input type="password" name="password" onChange={this.updateInput} />
         <button onClick={this.submit}> Login</button> <Link  to="/userpage" >Next...</Link> 
        </div>
        <div>Don't have an account? Register now!</div>
        <button onClick={() => this.register()}>Register</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { login }
)(Login);
