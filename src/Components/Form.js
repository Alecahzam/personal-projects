import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar"

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
        arist: this.state.artistInput,
        url: this.state.urlInput,
        image: this.state.imageInput
      })
  }

  render() {
    return (
      <div>
      <NavBar/>
      <div className="inputFields">
        <input
          placeholder="Title"
          name="titleInput"
          value={this.state.titleInput}
          onChange={this.updateInputHandler}
        />
        <div />
        <input
          placeholder="Genre"
          name="genreInput"
          value={this.state.genreInput}
          onChange={this.updateInputHandler}
        />
        <div />

        <input
          placeholder="Artist"
          name="artistInput"
          value={this.state.aristInput}
          onChange={this.updateInputHandler}
        />
        <div />

        <input
          placeholder="Mp3 URL"
          name="urlInput"
          value={this.state.urlInput}
          onChange={this.updateInputHandler}
        />
        <div />

        <input
          placeholder="Image address"
          name="imageInput"
          value={this.state.imageInput}
          onChange={this.updateInputHandler}
        />
        <div>
        <button onClick={() => this.addSong()}> Upload </button>
        </div>
      </div>
      </div>
    );
  }
}
