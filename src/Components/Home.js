import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import Song from "./Song";
import Upload from "./Upload";
import routes from "../routes";
import Form from "./Form";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      songList: []
    };
    this.getSongs = this.getSongs.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  // componentDidUpdate() {
  //   this.getSongs();
  // }

  getSongs() {
    axios.get("/api/songs").then(res => {
      console.log(res.data);
      this.setState({ songList: res.data });
    });
  }

  render() {
    const songDisplay = this.state.songList.map((e, i) => {
      return (
        <div key={i} className="songList">
          <div>
            <img
              src={`${e.image}`}
              alt="songImages"
              className="imgURL"
              onClick={e => this.songDetails}
            />
            <div className="sideInfo">
              <div className="artist">Artist: {e.artist}</div>
              <div>Genre: {e.genre}</div>
              <button className="favButton" onClick = {(e) => this.addToFavorites}>fav</button>{" "}
            </div>
          </div>
          {e.title}
          <Song file={e.url} />
          <div>
            <br />
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className = "background">
          <nav className="navBar">
            <ul>
              <li className="navList">
                <img
                  className="logo"
                  src="https://img2.androidappsapk.co/300/7/8/7/com.airg.launchers.music.png"
                  alt="logo"
                />
                <Link className="Links" to="home">
                  Home
                </Link>
                <Link className="Links" to="userpage">
                  Account
                </Link>
                <Link className="Links" to="discover">
                  Discover
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
              </li>
            </ul>
          </nav>
          {/* <Upload/> */}
        </div>
        Home
        <div className="whole">{songDisplay}</div>
        <Form getSongs={this.getSongs} />
      </div>
    );
  }
}

export default Home;
