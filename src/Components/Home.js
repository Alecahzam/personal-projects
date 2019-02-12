import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import  Song from "./Song"
import Upload from "./Upload"
// import routes from "../routes";

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
      //   var imageUrl = e.image
      return (
      
        <div key={e.songid} className="songList">
 
            <img src={`${e.image}`} alt="songImages" className="imgURL" />    
           <Song
          file={e.url}
          />
           <div>Title: {e.name}</div>
            <div>Artist: {e.artist} Genre: {e.genre}</div> 
            <div>
              <br/>
            </div>
        </div>
      );
    });
    return (
      <div>
          <div> 
        <nav className="navBar">
        
          <ul>
            <li className= "navList">
            <img className= "logo" src= "https://img2.androidappsapk.co/300/7/8/7/com.airg.launchers.music.png" alt= "logo"/>
              <Link className="Links" to="/"> Home</Link>
              <Link className="Links" to="/userpage"> Account </Link> 
              <Link className= "Links" to="/discover"> Discover </Link>
              <input></input>
              <Link className= "Links" to="/mymusic"> My Music </Link>
              <Link className= "Links" to="/aboutus"> About Us</Link>
            </li>
          </ul>
        </nav> <Upload/>
        </div>
        Home Page
        <div>
        {songDisplay}
        </div>
      </div>
    );
  }
}

export default Home;
