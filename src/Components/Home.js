import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import Song from "./SubComponents/Song";
// import Upload from "./Upload";
import NavBar from "./SubComponents/NavBar"
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";



class Home extends Component {
  constructor() {
    super();
    this.state = {
      songList: [],
    };
    this.getSongs = this.getSongs.bind(this);
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

  addToFavorites(songid){
    axios.post("/api/favorites", {username: this.props.user.username, songid: songid}).then(response => {
      console.log(response)
    }
    )
  }

  render() {
    console.log(this.props)
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
              <button className="favButton" onClick = {() => this.addToFavorites(e.songid)}>fav</button>{" "}
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
          <NavBar/>
          {/* <Upload/> */}
        </div>
       <div>Home</div> 
        <div className="whole">{songDisplay}</div>
        {/* <Form getSongs={this.getSongs} /> */}
        <footer>
        
        </footer>
      </div>
    );
  }
}


const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Home);