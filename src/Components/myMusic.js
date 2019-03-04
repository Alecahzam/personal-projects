import React, { Component } from "react";
import NavBar from "./SubComponents/NavBar";
import Song from "./SubComponents/Song";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "./ducks/reducer";
import { Link } from "react-router-dom"

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
    axios.delete(`/api/favorites/${this.props.user.username}`, {data:  {songid: songid}}).then(res => {
      console.log(res.data);
    });
    this.getFavorites()
  }

  render() {
    const displayFavorites = this.state.favlist.map((f, j) => {
      return (
        <div key={j} className="favList">
          <div>
            <img src={`${f.image}`} alt="songImages" className="imgURL" />
            <div className="sideInfo">
              <div className="artist">Artist: {f.artist}</div>
              <div>Genre: {f.genre}</div>
              <button
                className="favButton"
                onClick={() => this.removeFavorite(f.songid)}
              >
                Remove
              </button>
            </div>
          </div>
          {f.title}
          <Song file={f.url} />
          <div>
            <br />
          </div>
        </div>
      ) 
    });
    return this.props.user.username ? (
      <div>
        <NavBar />
        <div className="favorites">Favorites</div>
        <div>{displayFavorites}</div>
      </div>
    ) : (
      <div>
      <NavBar/>
      <div>
        <Link to="/login"> Please log in. </Link>
      </div>
    </div>
    )
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(MyMusic);
