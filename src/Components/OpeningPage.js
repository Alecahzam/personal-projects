import React, { Component } from "react";
import NavBar from "./SubComponents/NavBar";
import "./CSS/OpeningPage.css";
import Bg from "./SubComponents/Bg";
import { Link } from "react-router-dom"

export default class Opener extends Component {
 
  render() {
    return (
      <div className="body">
      <img src="ylia.jpg" alt="ylia"/>
      <div >
         <h4 className="title">OrchesChat</h4>
          <Link  to="/home" >
          <button id="enterButton">
            Get Connected</button>
          </Link>
      </div>
      </div>
    );
  }
}