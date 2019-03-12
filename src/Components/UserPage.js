import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";
import { Link } from "react-router-dom";
import NavBar from "./SubComponents/NavBar";
import Sharto from "./SubComponents/Chart";
import "./CSS/UserPage.css"
import axios from "axios"

class UserPage extends Component {
  constructor() {
    super();
    this.state = {
      bio: ""
    };
    this.getBio = this.getBio.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
    this.getBio()
  }

updateInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getBio(){
    axios.get("/api/bio").then(res => {
      console.log(res.data);
      this.setState({ bio: res.data });
    });
  }

  render() {
    console.log(this.props);
    return this.props.user.username ? (  
      <div className="userBG">
        <NavBar/>
        <br/>
        <hr/>
        <div className="accountBox">
        <p className="userProps">Welcome, {this.props.user.username}</p>   
       </div> 
       <br/>
        {/* <form id="bioDisplay">
        <input
  placeholder="Tell us about yourself."
  className="userBio"
  value={this.state.bioInput}
  onChange={this.updateInputHandle}
  onSubmit= {(e) => this.setState({bio: e.target.name})}
/>
</form> */}

 {/* {this.state.bio} */}
<h1>Preferred Music:</h1>
<Sharto/>
      </div>
    ) : (
      <div>
        <NavBar /><br/>
        <br/>
        <br/>
        <br/>
        <div >
          <Link className= "pleaseLogin" to="/login"> You must log in to have an account page.</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getUser }
)(UserPage);
