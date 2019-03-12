import React, { Component } from "react";
import axios from "axios";
import NavBar from "./SubComponents/NavBar";
import "./CSS/Form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      titleInput: "",
      genreInput: "",
      artistInput: "",
      urlInput: "",
      imageInput: ""
    };
    this.addSong = this.addSong.bind(this);
    this.updateInputHandler = this.updateInputHandler.bind(this);
  }

  updateInputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSong() {
    axios
      .post("/api/songs", {
        title: this.state.titleInput,
        genre: this.state.genreInput,
        artist: this.state.artistInput,
        url: this.state.urlInput,
        image: this.state.imageInput
      })
      .then(
        this.setState({
          titleInput: "",
          genreInput: "",
          artistInput: "",
          urlInput: "",
          imageInput: ""
        })
      );
  }

  render() {
    return (
      <div className="formBG">
        <NavBar />
        <div className="Upload">Upload Audio</div>
        <div className="fill">
          Please fill out every area properly. Submissions without all required
          fields will not be uploaded.
        </div>
        <div className="inputFields">
          <input
            className="uploadInput"
            placeholder="Title"
            name="titleInput"
            value={this.state.titleInput}
            onChange={this.updateInputHandler}
          />
          <div />
          <br />
          <input
            className="uploadInput"
            placeholder="Genre"
            name="genreInput"
            value={this.state.genreInput}
            onChange={this.updateInputHandler}
          />
          <div />
          <br />
          <input
            className="uploadInput"
            placeholder="Artist"
            name="artistInput"
            value={this.state.artistInput}
            onChange={this.updateInputHandler}
          />
          <div />
          <br />
          <input
            className="uploadInput"
            placeholder="Mp3 URL"
            name="urlInput"
            value={this.state.urlInput}
            onChange={this.updateInputHandler}
          />
          <div />
          <br />
          <input
            className="uploadInput"
            placeholder="Image address"
            name="imageInput"
            value={this.state.imageInput}
            onChange={this.updateInputHandler}
          />
          <div>
            <br/>
            <button id="addBtn" onClick={() => this.addSong()}>
              {" "}
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//mp3:
//http://66.90.93.122/ost/the-legend-of-zelda-25th-anniversary-special-orchestra-cd/ehubiwiy/01%20The%20Legend%20of%20Zelda%2025th%20Annivers.mp3
// image:
// http://www.zeldadungeon.net/assets_c/2011/11/zeldasymphony-thumb-600x433-18975.jpg
// Hajime Wakai
// Orchestral
// Legend of Zelda 25th Anniversary