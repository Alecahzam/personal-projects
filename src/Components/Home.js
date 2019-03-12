import React, { Component } from "react";
import axios from "axios";
import "./CSS/Home.css";
// import { Link } from "react-router-dom";
import Song from "./SubComponents/Song";
// import Upload from "./Upload";
import NavBar from "./SubComponents/NavBar";
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      songList: []
    };
  }

  componentDidMount() {
    this.getSongs();
    this.props.getUser();
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

  handleToast() {
    toast.success("Added to favorites.");
    console.log("test");
  }

  addToFavorites(songid) {
    axios
      .post("/api/favorites", {
        username: this.props.user.username,
        songid: songid
      })
      .then(() => {
        this.handleToast();
      })
      .catch(err => {
        console.log(err);
        toast.success("Added to favorites.");
      });
  }

  render() {
    console.log(this.props);
    const songDisplay = this.state.songList.map((e, i) => {
      return this.props.user.username ? (
        <div className="whole" key={i}>
          <div className="songList">
            <div>
              <img src={`${e.image}`} alt="songImages" className="imgURL" />
            </div>
            <p id="favButton"
              onClick={() => this.addToFavorites(e.songid)}>&#9734;</p>
            
            <div className="sideInfo">
              <div id="arti"> Artist: {e.artist}</div>
              <div id="geny">Genre: {e.genre}</div>
            </div>
          </div>
          <div className="songTitle">{e.title}</div>
          <Song id="player" file={e.url} />
        </div>
      ) : (
        <div className="whole" key={i}>
          <div className="songList">
            <div className="imageSpace">
              <img src={`${e.image}`} alt="songImages" className="imgURL" />
            </div>
            <div className="sideInfo">
              <div> Artist: {e.artist}</div>
              <div>Genre: {e.genre}</div>
            </div>
          </div>
          <div className="songTitle">{e.title}</div>
          <Song id="player" file={e.url} />
        </div>
      );
    });
    return (
      <div className="homeBG">
        <div className="background">
          <NavBar />
        </div>
        <br />
        <br />
        <br />
        <div className="songDis">{songDisplay}</div>
        <footer />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Home);
