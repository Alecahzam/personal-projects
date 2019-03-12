import React, { Component } from "react";
import NavBar from "./SubComponents/NavBar";
import Song from "./SubComponents/Song";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class MyMusic extends Component {
  constructor() {
    super();
    this.state = {
      favlist: [],
      playlists: []
    };
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount() {
    this.getFavorites();
    this.props.getUser();
  }

  getFavorites() {
    axios.get(`/api/favorites/${this.props.user.username}`).then(res => {
      console.log(res);
      this.setState({ favlist: res.data });
    });
  }

  removeFavorite(songid) {
    axios
      .delete(`/api/favorites/${this.props.user.username}`, {
        data: { songid: songid }
      })
      .then(res => {
        console.log(res.data);
      });
      toast.success("Removed from list.")
    this.getFavorites();
  }

  render() {
    const displayFavorites = this.state.favlist.map((f, j) => {
      return (
        <div className="whole">
          <div key={f} className="songList">
            <div>
              <img src={`${f.image}`} alt="songImages" className="imgURL" />
            </div>{" "}
            
              <p id="favButton"
              onClick={() => this.removeFavorite(f.songid)}>&#9746;</p>
            
            <div className="sideInfo">
              <div> Artist: {f.artist}</div>
              <div>Genre: {f.genre}</div>
            </div>
          </div>
          <div className="songTitle">{f.title}</div>
          <Song id="player" file={j.url} />
        </div>
      );
    });
    return this.props.user.username ? (
      <div className="homeBG">
        <NavBar />
        <div className="favorites">Favorites</div>
        <hr/>
        <br/>
        <hr/>
        <br/>
        <div>{displayFavorites}</div>
      </div>
    ) : (
      <div>
        <NavBar />
        <div>
          
          <Link to="/login"> Please log in. </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(MyMusic);
