import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      login: true
    };
  }

register = () => {
    const {username, password} = this.state
    axios.post("/api/register", {username, password}).then(res => {
        console.log(res.data)
    })
}

submit =(e) => {
    e.preventDefault()
    this.login(this.state.username, this.state.password )
}

updateInput = (e) => {
    this.setState({[e.target.name] : e.target.value})
}

  render() {
    return (
        <div>
            <p>Login</p>
            <form onSubmit= {this.submit}>
            <input type= "text" name= "username" onChange= {this.updateInput}/>
            <input type= "password" name= "password" onChange= {this.updateInput}/>
            <button>Login</button>
            </form>
            Don't have an account? Register now!
            <div>
                <button onClick= {() => this.setState({login: !this.state.login})}/>
            </div>
        </div>
       
    
    )
  }
}
