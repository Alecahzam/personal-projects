import React, { Component } from "react";
import NavBar from "./SubComponents/NavBar";
import "./OpeningPage.css";
import Bg from "./SubComponents/Bg";

export default class Opener extends Component {
  enterHandler() {}
  render() {
    return (
      <div className="body">
        {/* <NavBar/> */}
        <div className="image">
          <Bg id= "bg"/>
        </div>
        <div className="titleAndButton">
          <h4 className="title">OrchesChat</h4>
          <button id="connect" onClick={this.enterHandler}>
            Get Connected
          </button>
        </div>
      </div>
    );
  }
}