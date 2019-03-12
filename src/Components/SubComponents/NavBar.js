import React, {Component} from "react"
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import {getUser} from "../ducks/reducer"
import axios from "axios"

class NavBar extends Component{

  componentDidMount(){
    this.props.getUser()
  }

logoutHandler(){
  axios.post('/api/logout').then((res)=>{
    console.log(res);

}).catch((err)=>{
    console.log(err);
});
}
render(){
  return this.props.user.username ? (<nav className="navBar">
            <ul>
              <li className="navList">
              <img
                  className="logo"
                  src="http://www.userlogos.org/files/logos/sjdvda/music.png"
                  alt="logo"
                />
                <Link className="Links" to="home">
                  Home
                </Link>
                <Link className="Links" to="userpage">
                  Account
                </Link>
                <style> 
                <input /> </style>
                <Link className="Links" to="mymusic">
                  My Music
                </Link>
                <Link className="Links" to="add">
                  Upload
                </Link>
                <Link className="Links" to="aboutus">
                  About Us
                </Link>
                <span className="Links" onClick= {() => this.logoutHandler()}>
                  Logout
                </span>
              </li>
            </ul>
          </nav>
  ) : (
    <nav className="navBar">
            <ul>
              <li className="navList">
                <img
                  className="logo"
                  src="http://www.userlogos.org/files/logos/sjdvda/music.png"
                  alt="logo"
                />
                <Link className="Links" to="home">
                  Home
                </Link>
                <Link className="Links" to="userpage">
                  Account
                </Link>
                <style> 
                <input /> </style>
                <Link className="Links" to="mymusic">
                  My Music
                </Link>
                <Link className="Links" to="add">
                  Upload
                </Link>
                <Link className="Links" to="aboutus">
                  About Us
                </Link>
                <Link className="Links" to="login">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
  )
}
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(NavBar);